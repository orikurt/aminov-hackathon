import React from 'react';
import { Label } from 'react-bootstrap';
import { colors } from '../utils/uiScheme';
import { numberFormat, percentFormat, rankFormat } from '../utils/format';

const DashboardItem = (props) => {
    return (
        <Label style={{ ...labelStyle, ...props.style }}>
            <span style={{ color: colors.darkGray }}>{ props.name }</span>
            { props.children }
        </Label>
        )
}

export const DashboardNumberItem = (props) => (
    <DashboardItem {...props } >
        <span style={{ fontSize: '16px' }}>{ numberFormat(props.value) }</span>
    </DashboardItem>)

export const DashboardMoneyItem = (props) => (
    <DashboardItem {...props } >
        <span style={{ fontSize: '16px' }}>${ numberFormat(props.value) }</span>
    </DashboardItem>)

export const DashboardPercentItem = (props) => (
    <DashboardItem {...props } >
        <span style={{ fontSize: '16px' }}>{ percentFormat(props.value) }%</span>
    </DashboardItem>)

export const DashboardSharesItem = (props) => (
    <DashboardItem {...props } style={{ ...mainStyle, ...props.style }}>
        <span style={{ fontSize: '16px' }}>{ numberFormat(props.value) }</span>
        <span style={{ fontSize: '10px', color: colors.text }}>${ numberFormat(props.secondary) }</span>
    </DashboardItem>)
    
export const DashboardEquityItem = (props) => (
    <DashboardItem {...props } style={{ ...mainStyle, ...props.style }}>
        <span style={{ fontSize: '16px' }}>{ percentFormat(props.value) }%</span>
        <span style={{ fontSize: '10px', color: colors.text }}>{ rankFormat(props.secondary) }</span>
    </DashboardItem>)
    
export const DashboardCostItem = (props) => (
    <DashboardItem {...props } style={{ ...mainStyle, ...props.style }}>
        <span style={{ fontSize: '16px' }}>${ numberFormat(props.value) }</span>
        <span style={{ fontSize: '12px', color: (props.secondary >= 0) ? colors.green : colors.red }}>
            { props.secondary > 0 ? '+' : null }{ percentFormat(props.secondary) }%
        </span>
    </DashboardItem>)    

const mainStyle = { 
    borderColor: colors.third, 
    color: colors.third 
}

const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '70px',
    width: '120px',
    border: `1px solid ${colors.darkGray}`,
    backgroundColor: colors.black,
    borderRadius: 0,
    marginBottom: '5px'
}
