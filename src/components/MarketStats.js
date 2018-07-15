import React from 'react';
import ReactTable from 'react-table';
import { TextCell, PercentCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const gameTimeStats = (props) => {
    return (
    <div style={ props.style }>
        <h5>Market Stats</h5> 
        <ReactTable
        data={testData}
        columns={columns}
        className="-striped"
        showPagination={false}
        defaultPageSize={testData.length}
        getTdProps={getTdProps}
        getTheadProps={getThProps}
        style={tableStyle} />
    </div>);
}

const tableStyle = {
    width: '100%',
}

const columns = [
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

const getTdProps = ()=>({
    style: {
        fontSize: '18px'
    }
})

const getThProps = ()=>({
    style: {
        color: colors.textLowlight
    }
})

const testData = [{
    priceRank: 5,
    trendDay: 0.0425,
    trendWeek: -0.00314,
    trendMonth: 0.0273,
    trendSeason: 0.233,
    seasonDividends: 3000,
    lifetimeDividends: 104000,
}]

export default gameTimeStats;