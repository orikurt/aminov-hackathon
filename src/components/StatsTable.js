import React from 'react';
import ReactTable from 'react-table';
import { TextCell, PercentCell } from '../utils/tableCells';

const getColumnsByType = (type) => {
    const columns = (type && type.indexOf('advanced') > -1) ? columns_advanced : columns_regular;
    return columns
}

const StatsTable = (props) => {
    return (
        <ReactTable 
            data={props.data}
            columns={ getColumnsByType( props.type ) }
            className="-striped"
            showPagination={false}
            defaultPageSize={props.data.length}
            style={{ fontSize: '12px' }}
        />
    );
}

const columns_regular = [
    {
        Header: 'Season',
        accessor: 'season',
        Cell: TextCell,
    },
    {
        Header: 'Team',
        accessor: 'Tm',
        Cell: TextCell,
        width: 80
    },    
    {
        Header: 'Games',
        accessor: 'G',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Starts',
        accessor: 'GS',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Minutes',
        accessor: 'MP',
        Cell: TextCell,
        width: 80
    },        
    {
        Header: 'Points',
        accessor: 'PTS',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Rebounds',
        accessor: 'TRB',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Assists',
        accessor: 'AST',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Steals',
        accessor: 'STL',
        Cell: TextCell,
        width: 80
    },    
    {
        Header: 'Blocks',
        accessor: 'BLK',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Turnovers',
        accessor: 'TOV',
        Cell: TextCell,
        width: 80
    },     
    {
        Header: 'Field Goals',
        accessor: 'FG%',
        Cell: PercentCell,
        width: 80
    },    
    {
        Header: '3 Points',
        accessor: '3P%',
        Cell: PercentCell,
        width: 80
    },
    {
        Header: 'Free Throws',
        accessor: 'FT%',
        Cell: PercentCell,
        width: 80
    },        
];

const columns_advanced = [
    {
        Header: 'Season',
        accessor: 'season',
        Cell: TextCell
    },
    {
        Header: 'Team',
        accessor: 'Tm',
        Cell: TextCell,
        width: 80
    },    
    {
        Header: 'Games',
        accessor: 'G',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Minutes',
        accessor: 'MP',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Usage %',
        accessor: 'USG%',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'True Shooting',
        accessor: 'TS%',
        Cell: PercentCell,
        width: 80
    },
    {
        Header: 'Assist %',
        accessor: 'AST%',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Rebound %',
        accessor: 'TRB%',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Steal %',
        accessor: 'STL%',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'Win Shares',
        accessor: 'WS',
        Cell: TextCell,
        width: 80
    },        
    {
        Header: 'Box +/-',
        accessor: 'BPM',
        Cell: TextCell,
        width: 80
    },
    {
        Header: 'PER',
        accessor: 'PER',
        Cell: TextCell,
        width: 80
    },
];

export default StatsTable;