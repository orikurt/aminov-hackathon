import React from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';

const imageStyle = {
    width: '30px',
    height: '45px',
    borderRadius: '15px',
    border: '1px solid #e1b12c',
    margin: '0 auto'
}

const textStyle = {
    textAlign: 'center',
    margin: '0 auto'
}

const TextCell = props => <div style={textStyle} >{props.value}</div>

const columns = [
    {
        Header: '',
        accessor: 'image_url',
        Cell: props => <img src={props.value} style={imageStyle}/>
    },
    {
        Header: 'Name',
        accessor: 'name',
        Cell: TextCell,
        filterable: true
    },
    {
        Header: 'Height',
        accessor: 'height',
        Cell: TextCell,
        filterable: true
    },
    {
        Header: 'Weight',
        accessor: 'weight',
        Cell: TextCell,
        filterable: true
    },
    {
        Header: 'Team',
        accessor: 'team',
        Cell: TextCell,
        filterable: true
    },
    {
        Header: 'Exp',
        accessor: 'experience',
        Cell: TextCell,
    },
    {
        Header: 'Number',
        accessor: 'number',
        Cell: TextCell,
    },
];

const extendTdProps = () => {
    return {
        style: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
        }
    }
}

const filterMethod = (filter, row, _column) => {
    const id = filter.pivotId || filter.id
    return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value) : true
}

const playersList = withRouter((props) => { 
    const data = [];
    for (let uid in props.players){
        data.push(props.players[uid]);
    }

    const extendTrProps = (_state, rowInfo) => {
        return {
            style: {
                cursor: 'pointer'
            },
            onClick: ()=>{ props.history.push(`players/${rowInfo.original.uid}`)}
        }
    }
    
    return ( 
        <ReactTable 
            data={data} 
            columns={columns}
            showPaginationTop={true}
            defaultFilterMethod={filterMethod}
            className='-striped -highlight'
            getTrProps={extendTrProps}
            getTdProps={extendTdProps}
        /> )
});

export default playersList;