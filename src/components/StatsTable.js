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
        />
    );
}

const columns_regular = [
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
    },    
    {
        Header: 'Games',
        accessor: 'G',
        Cell: TextCell,
    },
    {
        Header: 'Minutes',
        accessor: 'MP',
        Cell: TextCell,
    },
    {
        Header: 'Usage %',
        accessor: 'USG%',
        Cell: TextCell,
    },
    {
        Header: 'True Shooting',
        accessor: 'TS%',
        Cell: PercentCell,
    },
    {
        Header: 'Assist %',
        accessor: 'AST%',
        Cell: TextCell,
    },
    {
        Header: 'Rebound %',
        accessor: 'TRB%',
        Cell: TextCell,
    },
    {
        Header: 'Steal %',
        accessor: 'STL%',
        Cell: TextCell,
    },
    {
        Header: 'Win Shares',
        accessor: 'WS',
        Cell: TextCell,
    },        
    {
        Header: 'Box +/-',
        accessor: 'BPM',
        Cell: TextCell,
    },
    {
        Header: 'PER',
        accessor: 'PER',
        Cell: TextCell,
    },
];

export default StatsTable;