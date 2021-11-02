import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.data = []
        charFrequency.forEach(function (element) {
            chart.data.push({
                "alphabet": element[0],
                "count": element[1]
            });
        });
        console.log(chart.data);

        var alphabetAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        alphabetAxis.dataFields.category = "Character";
        alphabetAxis.title.text = "Characters";

        var countAxis = chart.yAxes.push(new am4charts.ValueAxis());
        countAxis.title.text = "Character Count";

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "characterCount";
        series.dataFields.categoryX = "character";
        series.name = "singleCharFrequency";

        chart.legend = new am4charts.Legend();
    }

    render = () => {
        return (
            <div>
                <h1>Single char frequency</h1>
                <p>{this.props.fileData}</p>
                <div id="chartdiv"></div>
            </div>
        );
    }
}

export default SingleCharFrequency;