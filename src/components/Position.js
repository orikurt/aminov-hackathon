import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { colors } from '../utils/uiScheme';
import { numberFormat, percentFormat, rankFormat } from '../utils/format';
import { TextCell } from '../utils/tableCells';
import SignUpButton from './SignUpButton';

class Position extends Component {
    state = {
        portfolio: {}   
    }

    componentWillReceiveProps(props){
        let portfolioObject = {};
        props.user.data.portfolio.reduce((holdings, portfolioObject) => {
            portfolioObject[holdings.uid] = holdings;
            return portfolioObject;
        }, portfolioObject)
        this.setState({
            portfolio: portfolioObject
        })
    }
    render(){
        if (! this.props.user.lastUpdated){
            return (
            <div>
                <h4>Position</h4>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '10px' }}>
                    <SignUpButton />
                </div>
                <p>
                    to receive <span style={{ color: colors.third }}>FREE</span> startup bankroll and build your portfolio
                </p>
                <p>
                    If you already have an account, 
                    <Link to="/login"> Login</Link>              
                </p>
            </div>);
        }
        else {
            return (
            <div>
                <h4>Position</h4>
                <div style={ rowStyle }>
                    <label >
                        <span style={{ fontSize: '14px', color: colors.textLowlight }}>Team Rank </span>
                        <span style={{ fontSize: '16px', color: colors.third }}>{ rankFormat( positionData[0].rank ) }</span>
                    </label>
                    <label >
                        <span style={{ fontSize: '14px', color: colors.textLowlight }}>Role </span>
                        <span style={{ fontSize: '16px', color: colors.third }}>{ positionData[0].role }</span>
                    </label>                
                </div>
                <PositionTable columns={columnsA} />
                <PositionTable columns={columnsB} />
                <PositionTable columns={columnsC} />
                                
            </div>
            );
        }
    }
}

const PositionTable = (props) => (
    <ReactTable
        data={positionData}
        columns={props.columns}
        getTheadProps={getTxProps}
        getTableProps={getTxProps}
        getTdProps={getTxProps}
        getTrGroupProps={getTxProps}
        getTheadThProps={getTheadProps}
        defaultPageSize={positionData.length}
        showPagination={false}
        style={{ border: 'none' }} />
    );

const columnsA = [
    {
        Header: 'Shares',
        accessor: 'shares',
        Cell: TextCell,
    },
    {
        Header: 'Equity',
        accessor: 'equity',
        Cell: TextCell,
    },    
    {
        Header: 'Avg. Cost',
        accessor: 'avgBuyPrice',
        Cell: TextCell,
    },
];

const columnsB = [
    {
        Header: 'Point Production',
        accessor: 'points.perGame',
        Cell: TextCell,
    },
    {
        Header: 'Season Points',
        accessor: 'points.season',
        Cell: TextCell,
    },
    {
        Header: 'Lifetime Points',
        accessor: 'points.lifetime',
        Cell: TextCell,
    },
];

const columnsC = [
    {
        Header: 'Dividend Rate',
        accessor: 'dividends.perDay',
        Cell: TextCell,
    },    
    {
        Header: 'Season Dividends',
        accessor: 'dividends.season',
        Cell: TextCell,
    },
    {
        Header: 'Lifetime Dividends',
        accessor: 'dividends.lifetime',
        Cell: TextCell,
    },
]

const getTxProps = () => ({
    style: {
        border: 'none',
        boxShadow: 'none'
    }
})

const getTheadProps = () => ({
    style: {
        color: colors.textLowlight,
        fontSize: '14px',
        border: 'none',
        boxShadow: 'none'
    }
})

const rowStyle = { 
    display: 'flex', 
    justifyContent: 'space-evenly' 
}

const positionData = [{
    rank: 2, 
    role: 'Starter',
    shares: 420000,
    equity: 1.72,
    points: {season: 721, lifetime: 8667, perGame: 113.9}, 
    dividends: {season: 124000, lifetime: 966667, perDay: 18600}, 
    avgBuyPrice: 30,
}]

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Position);