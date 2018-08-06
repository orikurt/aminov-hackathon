import React from "react";
import { numberFormat } from "../utils/format";
import { colors } from "../utils/uiScheme";

const openOrders = (props) => {
    return (
        <div {...props }>
            <h5 style={ titleStyle }>Open Orders</h5>
            <ul style={ ulStyle }>
                <li style={{ ...liStyle, ...headerStyle }}>
                    <span style={ spanStyle} >Price</span>
                    <span style={ spanStyle} >Shares</span>
                    <span style={ spanStyle} >Total</span>
                    <span style={ spanStyle} >Remove</span>
                </li>            
                { props.orders.map( order => (
                    <li style={ liStyle }>
                        <span style={ spanStyle} >{ numberFormat(order.price) }</span>
                        <span style={ spanStyle} >{ numberFormat(order.quantity) }</span>
                        <span style={ spanStyle} >{ numberFormat(order.quantity * order.quantity) }</span>
                        <span style={ spanStyle} >x</span>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

const titleStyle = {
    padding: 'none',
    textAlign: 'center'
}

const ulStyle = {
    textDecoration: 'none'
}

const liStyle = {
    display: 'flex',
    minWidth: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${colors.darkGray}`,
    padding: '5px 0'
}

const headerStyle = {
    borderTop: 'none',
    color: colors.darkGray
}

const spanStyle = {
    textAlign: 'center',
    minWidth: '40px'
}

export default openOrders;