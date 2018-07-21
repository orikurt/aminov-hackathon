import React from "react";
import { XYPlot, LineSeries, HorizontalGridLines, XAxis, YAxis, AreaSeries, Hint } from "react-vis";
import { chartData } from "../utils/mockData";
import { colors } from "../utils/uiScheme";

const PriceTrend = (props) => (
    <div>
        <h4>Price Trend</h4>
        <XYPlot height={300} width={800} >
            <XAxis style={ gridStyle } xType={'time'} tickTotal={10} />
            <YAxis style={ gridStyle } />
            <HorizontalGridLines style={ gridStyle } />
            <LineSeries 
                data={data} 
                color={ colors.third } />
            <AreaSeries opacity={0.4} data={data} yDomain={[0, 200]} />
            <Hint value={data[10]} />
        </XYPlot>
    </div>
);

const gridStyle = {
    stroke: colors.darkGray
}

const data = chartData();

export default PriceTrend;