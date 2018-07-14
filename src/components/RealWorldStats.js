import React, { Component } from 'react';
import StatsTable from './StatsTable';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { colors } from '../utils/uiScheme';

class RealWorldStats extends Component{
    state = {
        statsType: 'per_game',
        data: []
    }

    handleSelect = (type=this.state.statsType)=>{
        const data = [];
        for (let season in this.props.stats[type]){
            data.push({...this.props.stats[type][season], season: season})
        }
        this.setState({statsType: type, data: data.reverse()})
    }

    componentWillMount(){
        this.handleSelect();
    }
    
    render(){
        return(<div>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                    <DropdownButton 
                        title={this.state.statsType.replace(/_/g, ' ')}
                        bsStyle="default"
                        style={ dropdownStyle }
                        id={`dropdown-stats`} >
                        { Object.keys(this.props.stats).map((type, i)=>(
                            <MenuItem
                                key={type}
                                eventKey={i}
                                onClick={() => this.handleSelect(type)} >
                                {type.replace(/_/g, ' ')}
                            </MenuItem>)) }
                    </DropdownButton>
                    <h4 style={{ marginLeft: '15px' }} >Real world stats</h4>
                </div>
                <StatsTable data={this.state.data} type={this.state.statsType}/>
            </div>
        );
    }
}

const dropdownStyle = {
    backgroundColor: colors.secondary,
    color: colors.text,
    borderColor: colors.main,
    width: '300px',
    height: '40px',
    marginTop: '15px'
}

export default RealWorldStats;