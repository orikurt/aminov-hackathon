import React from "react";
import { XYPlot, LineSeries, HorizontalGridLines, XAxis, YAxis, AreaSeries, Hint } from "react-vis";
import { colors } from "../utils/uiScheme";
import TrendData from "./TrendData";

const PriceTrend = (props) => (
    <div style={ props.style }>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TrendData trend={ props.trend }/>
            <XYPlot height={ props.width || 250 } width={ props.width || 600 } yDomain={[0, 50]}>
                <XAxis style={ gridStyle } xType={'time'} tickTotal={10} />
                <YAxis style={ gridStyle } tickTotal={5} orientation="left" />
                <HorizontalGridLines style={ gridStyle } />
                <LineSeries 
                    data={ props.data } 
                    color={ colors.third } />
                <AreaSeries opacity={0.4} data={ props.data } yDomain={[0, 200]} />
                {/* <Hint value={data[10]} /> */}
            </XYPlot>
        </div>
    </div>
);

const gridStyle = {
    stroke: colors.darkGray
}

export default PriceTrend;