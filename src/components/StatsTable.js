import React from 'react';
import ReactTable from 'react-table';
import { TextCell, PercentCell } from '../utils/tableCells';

const StatsTable = (props) => {
    return (
        <ReactTable 
            data={props.data}
            columns={columns}
            className="-striped"
            showPagination={false}
            defaultPageSize={props.data.length}
        />
    );
}

const columns = [
    {
        Header: 'Season',
        accessor: 'season',
        Cell: TextCell
    },
    {
        Header: 'Team',
        accessor: 'Tm',
        Cell: TextCell,
    },    
    {
        Header: 'Games',
        accessor: 'G',
        Cell: TextCell,
    },
    {
        Header: 'Starts',
        accessor: 'GS',
        Cell: TextCell,
    },
    {
        Header: 'Minutes',
        accessor: 'MP',
        Cell: TextCell,
    },        
    {
        Header: 'Points',
        accessor: 'PTS',
        Cell: TextCell,
    },
    {
        Header: 'Rebounds',
        accessor: 'TRB',
        Cell: TextCell,
    },
    {
        Header: 'Assists',
        accessor: 'AST',
        Cell: TextCell,
    },
    {
        Header: 'Steals',
        accessor: 'STL',
        Cell: TextCell,
    },    
    {
        Header: 'Blocks',
        accessor: 'BLK',
        Cell: TextCell,
    },
    {
        Header: 'Turnovers',
        accessor: 'TOV',
        Cell: TextCell,
    },     
    {
        Header: 'Field Goals',
        accessor: 'FG%',
        Cell: PercentCell,
    },    
    {
        Header: '3 Points',
        accessor: '3P%',
        Cell: PercentCell,
    },
    {
        Header: 'Free Throws',
        accessor: 'FT%',
        Cell: PercentCell,
    },        
];

export default StatsTable;