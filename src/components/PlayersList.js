import React from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';

const imageStyle = {
    width: '30px',
    height: '45px',
    borderRadius: '15px',
    border: '1px solid #e1b12c'    
}

const columns = [
    {
        Header: '',
        accessor: 'image_url',
        Cell: props => <img src={props.value} style={imageStyle}/>
    },
    {
        Header: 'Name',
        accessor: 'name',
        filterable: true
    },
    {
        Header: 'Height',
        accessor: 'height',
        filterable: true
    },
    {
        Header: 'Weight',
        accessor: 'weight',
        filterable: true
    },
    {
        Header: 'Team',
        accessor: 'team',
        filterable: true
    },
    {
        Header: 'Exp',
        accessor: 'experience'
    },
    {
        Header: 'Number',
        accessor: 'number'
    },
];

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

export default playersList;