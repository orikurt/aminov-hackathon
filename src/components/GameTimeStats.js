import React from 'react';
import ReactTable from 'react-table';
import { TextCell, PercentCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const gameTimeStats = (props) => {
    return (
    <div style={ props.style }>
        <ReactTable
            data={gameTimeData}
            columns={gameTimeColumns}
            className="-striped"
            showPagination={false}
            defaultPageSize={gameTimeData.length}
            getTrProps={getTrProps}
            getTdProps={getTdProps}
            getTheadProps={getThProps}        
            style={tableStyle} />
        <ReactTable
            data={marketData}
            columns={marketColumns}
            className="-striped"
            showPagination={false}
            defaultPageSize={marketData.length}
            getTrProps={getTrProps}
            getTdProps={getTdProps}
            getTheadProps={getThProps}
            style={tableStyle} />
    </div>);
}

const tableStyle = {
    width: '100%',
}

const gameTimeColumns = [{
    Header: "GameTime Stats",
    columns: [
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
]
}];

const marketColumns =[{
    Header: "Market Stats",
    columns: [
    {
        Header: 'Price rank',
        accessor: 'priceRank',
        Cell: TextCell,
    },    
    {
        Header: '1D Trend',
        accessor: 'trendDay',
        Cell: PercentCell,
    },
    {
        Header: '1W Trend',
        accessor: 'trendWeek',
        Cell: PercentCell,
    },
    {
        Header: '1M Trend',
        accessor: 'trendMonth',
        Cell: PercentCell,
    },
    {
        Header: 'Season Trend',
        accessor: 'trendSeason',
        Cell: PercentCell,
    },    
    {
        Header: 'Season Dividends',
        accessor: 'seasonDividends',
        Cell: TextCell,
    },
    {
        Header: 'Lifetime Dividends',
        accessor: 'lifetimeDividends',
        Cell: TextCell,
    },     
]
}];

const getTrProps = ()=>({
    style: {
        borderRadius: '3px',
        height: '50px',
        lineHeight: '40px',
    }
})

const getTdProps = ()=>({
    style: {
        fontSize: '18px',
    }
})

const getThProps = ()=>({
    style: {
        borderRadius: '3px',
        backgroundColor: colors.darkGray,
    }
})

const gameTimeData = [{
    pointsRank: 3,
    pointsPerGame: 42.5,
    pricePointRatio: 0.314,
    pointsEarnedSeason: 241,
    seasonProjection: 3289,
    pointsEarnedCareer: 50000,
}]

const marketData = [{
    priceRank: 5,
    trendDay: 0.0425,
    trendWeek: -0.00314,
    trendMonth: 0.0273,
    trendSeason: 0.233,
    seasonDividends: 3000,
    lifetimeDividends: 104000,
}]

export default gameTimeStats;