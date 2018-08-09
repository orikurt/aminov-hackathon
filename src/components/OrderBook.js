import React from 'react';
import ReactTable from 'react-table';
import { NumberCell } from '../utils/tableCells';
import { colors } from '../utils/uiScheme';

const OrderBook = (props) => {
    return (
        <div>
            <ReactTable 
                data={ props.offers }
                columns={[{ Header: props.header || "Order Book", columns: columns }]}
                showPagination={ false }
                getTheadGroupProps={ () => ({
                    style: {
                        color: props.offers[0].type_ask ? colors.third : colors.green
                    }
                }) }

                className="-striped"
                pageSize={ props.offers.length }
                minRows={ props.rows || 7 }
                style={ props.style }
            />
        </div>
    )
}

const columns = [
    {
        Header: "Price",
        accessor: "price",
        Cell: NumberCell,
        width: 80
    },
    {
        Header: "Shares",
        accessor: "quantity",
        Cell: NumberCell,
        width: 80
    },
    {
        id: "total",
        Header: "Total",
        accessor: (row) => (row.price * row.quantity),
        Cell: NumberCell,
        width: 80
    },
];

export default OrderBook;