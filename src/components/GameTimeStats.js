import React from 'react';
import ReactTable from 'react-table';
import { TextCell } from '../utils/tableCells';

const gameTimeStats = (props) => {
    return (
    <div style={ props.style }>
        <h5>GameTime Stats</h5>
        <ReactTable
        data={testData}
        columns={columns}
        className="-striped"
        showPagination={false}
        defaultPageSize={testData.length}
        style={tableStyle} />
    </div>);
}

const tableStyle = {
    width: '100%',
}

const columns = [
    {
        Header: 'Points rank',
        accessor: 'pointsRank',
        Cell: TextCell,
    },    
    {
        Header: 'GT Points/game',
        accessor: 'pointsPerGame',
        Cell: TextCell,
    },
    {
        Header: 'Cost per point',
        accessor: 'pricePointRatio',
        Cell: TextCell,
    },
    {
        Header: 'Total Points - Season',
        accessor: 'pointsEarnedSeason',
        Cell: TextCell,
    },
    {
        Header: 'Season projection',
        accessor: 'seasonProjection',
        Cell: TextCell,
    },
    {
        Header: 'Career points',
        accessor: 'pointsEarnedCareer',
        Cell: TextCell,
    },         
];

const testData = [{
    pointsRank: 3,
    pointsPerGame: 42.5,
    pricePointRatio: 0.314,
    pointsEarnedSeason: 241,
    seasonProjection: 3289,
    pointsEarnedCareer: 50000,
}]

export default gameTimeStats;