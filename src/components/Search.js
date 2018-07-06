import React, { Component } from 'react';
import DownShift from 'downshift';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayers } from '../actions/index';

class Search extends Component{

    stateReducer = (state, changes) => {
        return changes;
    }

    componentDidMount(){
        this.props.getPlayers();
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
                    const { getPlayers, ...props} = this.props;
                    return (
                    <div {...props}>
                        <div style={wrapperStyle}>
                            <input 
                                {...getInputProps({placeholder:'Find stocks, players...'})} 
                                style={inputStyle} />
                            <ul {...getMenuProps({style: uListStyle})}>
                                {isOpen
                                ? Object.keys(this.props.items)
                                    .filter(uid => !inputValue || this.props.items[uid].name.toLowerCase().includes(inputValue))
                                    .slice(0, 7)
                                    .map((uid, index) => listItem(this.props.items[uid], index, highlightedIndex, selectedItem, getItemProps)) 
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
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        padding: '0 10px',
    }                              
    return (
    <li
      {...getItemProps({
        key: item.uid,
        index,
        item,
        style: listItemStyle,
      })}
    >
        <img src={item.image_url} alt={item.number} style={imageStyle}/>
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

const imageStyle = {
    width: '30px',
    height: '45px',
    borderRadius: '15px',
    border: '1px solid #e1b12c',
    marginRight: '10px'
}

const mapStateToProps = (state) => {
    return {
        items: state.players.data
    }
}

const mapDispathToprops = (dispatch) => {
    return bindActionCreators({ getPlayers }, dispatch)
}

export default connect(mapStateToProps, mapDispathToprops)(Search);
