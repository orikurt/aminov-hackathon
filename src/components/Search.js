import React, { Component } from 'react';
import DownShift from 'downshift';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlayers } from '../actions/index';
import { getPlayers } from '../utils/api';

class Search extends Component{

    stateReducer = (state, changes) => {
        return changes;
    }

    componentDidMount(){
        getPlayers().then(players => this.props.setPlayers(players));
    }

    render(){
        return (
            <DownShift 
                itemToString={item => (item ? item.name : '')}
                onChange={(selected, state)=>{ }}
                stateReducer={this.stateReducer}
                defaultHighlightedIndex={0} >
            {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
              }) => {
                    const { setPlayers, ...props} = this.props;
                    return (
                    <div {...props}>
                        <div style={wrapperStyle}>
                            <input 
                                {...getInputProps({placeholder:'Find stocks, players...'})} 
                                style={inputStyle} />
                            <ul {...getMenuProps({style: uListStyle})}>
                                {isOpen
                                ? this.props.items
                                    .filter(item => !inputValue || item.name.toLowerCase().includes(inputValue))
                                    .map((item, index) => listItem(item, index, highlightedIndex, selectedItem, getItemProps)) 
                                    : null}
                            </ul>
                        </div>
                    </div>
              )}}
            </DownShift>
        )

    }
}

const listItem = (item, index, highlightedIndex, selectedItem, getItemProps) => {
    const listItemStyle = {
        cursor: 'pointer',
        backgroundColor: highlightedIndex === index ? '#353b48' : '',
        fontWeight: selectedItem === item ? 'bold' : 'normal',
        listStyle: 'none',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'left',
        padding: '0 10px',
    }                              
    return (
    <li
      {...getItemProps({
        key: item.name,
        index,
        item,
        style: listItemStyle,
      })}
    >
        <img src={""} alt={item.number} />
      {item.name}
    </li>
)}

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const inputStyle = {
    borderRadius: '3px',
    height: '25px',
    padding: '5px',
    fontSize: '14px',
}

const uListStyle = {
    padding: 0
}

const mapStateToProps = (state) => {
    return {
        items: state.players
    }
}

const mapDispathToprops = (dispatch) => {
    return bindActionCreators({ setPlayers }, dispatch)
}

export default connect(mapStateToProps, mapDispathToprops)(Search);
