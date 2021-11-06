import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {charFreq: ''};
    }

    plotChart = (charFreq) => {
        var chart = am4core.create("chartdiv", am4charts.PieChart);

        charFreq.forEach(function (value, key) {
            chart.data.push({
                "character": key,
                "count": value
            });
        });

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "count";
        pieSeries.dataFields.category = "character";
    }

    render = () => {
        return (
            <div>
                <div id="chartdiv" style={{ width: 1500, height: 500}}></div>
            </div>
        );
    }
}

export default PieChart;