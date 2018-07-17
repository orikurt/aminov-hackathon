import React from 'react';
import ReactTable from 'react-table';
import Collapsable from './Collapsable'
import { NumberCell, RankCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const GameTimeStats = (props) => {
    return (
    <div style={ props.style }>
        <Collapsable  minHeight="26px" expanded={true} style={tableStyle} >
            <ReactTable
                data={gameTimeData}
                columns={gameTimeColumns}
                className="-striped"
                showPagination={false}
                defaultPageSize={gameTimeData.length}
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

const gameTimeColumns = [{
    Header: "GameTime Stats",
    columns: [
    {
        Header: 'Points rank',
        accessor: 'pointsRank',
        Cell: RankCell,
    },    
    {
        Header: 'GT Points/game',
        accessor: 'pointsPerGame',
        Cell: NumberCell,
    },
    {
        Header: 'Cost per point',
        accessor: 'pricePointRatio',
        Cell: NumberCell,
    },
    {
        Header: 'Total Points - Season',
        accessor: 'pointsEarnedSeason',
        Cell: NumberCell,
    },
    {
        Header: 'Season projection',
        accessor: 'seasonProjection',
        Cell: NumberCell,
    },
    {
        Header: 'Career points',
        accessor: 'pointsEarnedCareer',
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

const gameTimeData = [{
    pointsRank: 3,
    pointsPerGame: 42.5,
    pricePointRatio: 0.314,
    pointsEarnedSeason: 241,
    seasonProjection: 3289,
    pointsEarnedCareer: 50000,
}]

export default GameTimeStats;