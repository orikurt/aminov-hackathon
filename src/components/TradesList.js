import React from 'react';
import ReactTable from 'react-table';
import { NumberCell, DateCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const TradesList = (props) => {
    return (
    <div>
        <ReactTable 
            data={ props.trades }
            columns={[{ Header: props.header || "Trades", columns: columns }]}
            showPagination={ false }
            getTheadGroupProps={ getTheadGroupProps }
            className="-striped"
            pageSize={ props.trades.length }
            minRows={ props.rows || 7 }
            style={ props.style }
        />
    </div>)
}

const columns = [
    {
        Header: "Price",
        accessor: "price",
        Cell: NumberCell,
        width: 90
    },
    {
        Header: "Shares",
        accessor: "quantity",
        Cell: NumberCell,
        width: 90
    },
    {
        Header: "Time",
        accessor: "date",
        Cell: DateCell,
        width: 90
    },
];

const getTheadGroupProps = () => ({
    style: {
        color: colors.blue
    }
})

export default TradesList;