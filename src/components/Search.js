import React, { Component } from 'react';
import DownShift from 'downshift';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayersList } from '../actions/playerCommands';
import { Link } from 'react-router-dom';
import { colors } from '../utils/uiScheme';

class Search extends Component{

    componentDidMount(){
        this.props.getPlayersList();
    }

    render(){
        return (
            <DownShift 
                itemToString={item => (item ? item.name : '')}
                defaultHighlightedIndex={0}
                {... this.props} >
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
                    const { getPlayersList, onChange, ...props} = this.props;
                    return (
                    <div {...props}>
                        <div style={wrapperStyle}>
                            <input 
                                {...getInputProps({placeholder:'Find stocks / players...'})} 
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
        backgroundColor: highlightedIndex === index ? colors.secondary : '',
        fontWeight: selectedItem === item ? 'bold' : 'normal',
        listStyle: 'none',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        padding: '0 10px',
        textDecoration: 'none',
        color: colors.text
    }                              
    return (
    <Link
      {...getItemProps({
        key: item.uid,
        index,
        item,
        style: listItemStyle,
        to: `players/${item.uid}`
      })}
    >
        <img src={item.image_url} alt={item.number} style={imageStyle}/>
      {item.name}
    </Link>
)}

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const inputStyle = {
    borderRadius: '3px',
    height: '40px',
    padding: '5px',
    fontSize: '16px',
    color: colors.secondary
}

const uListStyle = {
    padding: 0
}

const imageStyle = {
    width: '32px',
    height: '45px',
    borderRadius: '5px',
    border: `1px solid ${colors.third}`,
    marginRight: '10px'
}

const mapStateToProps = (state) => {
    return {
        items: state.players.data
    }
}

const mapDispathToprops = (dispatch) => {
    return bindActionCreators({ getPlayersList }, dispatch)
}

export default connect(mapStateToProps, mapDispathToprops)(Search);
