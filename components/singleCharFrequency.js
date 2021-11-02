import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    componentDidUpdate = () => {
        var string = this.props.fileData;
        var charFrequency = new Map();
        string.split('').forEach(function(ch) {
            charFrequency.has(ch) ? charFrequency.set(ch, charFrequency.get(ch)+1) : charFrequency.set(ch, 1) ;
        });
        
        charFrequency = [...charFrequency.entries()].sort((a, b) => b[1] - a[1]);

        this._plotChart(charFrequency);
    }

    _plotChart = (charFrequency) => {
        var chart = am4core.create("chartdiv", am4charts.XYChart);
        charFrequency.forEach(function (element) {
            chart.data.push({
                "character": element[0],
                "count": element[1]
            });
        });

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "character";
        categoryAxis.title.text = "Characters";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Character Count";

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "count";
        series.dataFields.categoryX = "character";
        series.name = "Single Character Frequency Count";
    }

    render = () => {
        return (
            <div>
                <h1>Single char frequency</h1>
                <p>{this.props.fileData}</p>
                <div id="chartdiv" style={{flex: 1}}></div>
            </div>
        );
    }
}

export default SingleCharFrequency;