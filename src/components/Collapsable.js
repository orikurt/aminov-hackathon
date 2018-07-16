import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Collapsable extends Component {
    
    state = {}

    minHeight = '55px';
    
    componentWillMount(){
        this.setState({
            expanded: this.props.expanded || false,
            height: this.props.expanded 
                ? this.props.maxHeight || 'auto'
                : this.props.minHeight || this.minHeight,
            toggleStyle: {
                cursor: 'pointer',
                position: 'absolute',
                zIndex: 1,
                right: this.props.toggleRight || '15px',
                top: this.props.toggleTop || midHeight(this.props.minHeight || this.minHeight)
            }                
        })
    }

    expand = () => {
        this.setState({
            expanded: true,
            height: this.props.maxHeight || 'auto'
        })
    }

    collapse = () => {
        this.setState({
            expanded: false,
            height: this.props.minHeight || this.minHeight
        })        
    }

    render(){
        return (
            <div style={{ ...this.props.style, height: this.state.height, overflow: 'hidden', position: 'relative' }}>
                <Glyphicon 
                    glyph={ this.state.expanded ? "minus" : "plus" }
                    onClick={()=> this.state.expanded ? this.collapse() : this.expand() } 
                    style={ this.state.toggleStyle }/>
                { this.props.children }
            </div>
        )
    }
}

const midHeight = (height) => {
    return ((parseInt(height.substring(0, height.length -2), 10) / 2) - 7) + 'px';
}

export default Collapsable;