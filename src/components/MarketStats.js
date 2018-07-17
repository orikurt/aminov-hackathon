import React from 'react';
import ReactTable from 'react-table';
import Collapsable from './Collapsable'
import { NumberCell, StockCell, RankCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const MarketStats = (props) => {
    return (
    <div style={ props.style }>
        <Collapsable minHeight="26px" expanded={true} style={tableStyle} >
            <ReactTable
                data={marketData}
                columns={marketColumns}
                className="-striped"
                showPagination={false}
                defaultPageSize={marketData.length}
                getTrProps={getTrProps}
                getTdProps={getTdProps}
                getTheadProps={getThProps}
                getTheadGroupProps={getTheadGroupProps} />
        </Collapsable>
    </div>);
}

const tableStyle = {
    width: '100%',
}

const marketColumns =[{
    Header: "Market Stats",
    columns: [
    {
        Header: 'Price rank',
        accessor: 'priceRank',
        Cell: (props) => (<RankCell {...props} threshold={6}/>),
    },    
    {
        Header: '1D Trend',
        accessor: 'trendDay',
        Cell: StockCell
    },
    {
        Header: '1W Trend',
        accessor: 'trendWeek',
        Cell: StockCell,
    },
    {
        Header: '1M Trend',
        accessor: 'trendMonth',
        Cell: StockCell
    },
    {
        Header: 'Season Trend',
        accessor: 'trendSeason',
        Cell: StockCell
    },    
    {
        Header: 'Season Dividends',
        accessor: 'seasonDividends',
        Cell: NumberCell,
    },
    {
        Header: 'Lifetime Dividends',
        accessor: 'lifetimeDividends',
        Cell: NumberCell,
        last: true
    },     
]
}];

const getTrProps = ()=>({
    style: {
        borderRadius: '3px',
        height: '50px',
        lineHeight: '40px',
        backgroundColor: colors.black,
    }
})

const getTdProps = (_state, _rowInfo, column) =>{
    return {
        style: {
            fontSize: '15px',
            borderRight: `1px solid ${column.last ? colors.black : colors.darkGray}`
        }
    }
}

const getThProps = ()=>({
    style: {
        borderRadius: '3px',
        fontSize: '12px',
        backgroundColor: colors.darkGray,
    }
})

const getTheadGroupProps = () => ({
    style: {
        borderRadius: '3px',
        fontSize: '14px',
        // backgroundColor: colors.black,
    }
})

const marketData = [{
    priceRank: 5,
    trendDay: 0.0425,
    trendWeek: -0.00314,
    trendMonth: 0.0273,
    trendSeason: 0.233,
    seasonDividends: 3000,
    lifetimeDividends: 104000,
}]

export default MarketStats;