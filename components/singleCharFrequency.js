import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class SingleCharFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {fileData: ''};
    }

    componentDidUpdate = () => {
        var string = this.props.fileData.replace(/\s/g, '');
        var charFrequency = new Map();
        string.split('').forEach(function(ch) {
            charFrequency.has(ch) ? charFrequency.set(ch, charFrequency.get(ch)+1) : charFrequency.set(ch, 1) ;
        });
        
        //sorting map by value
        charFrequency = [...charFrequency.entries()].sort((a, b) => b[1] - a[1]);

        this._plotChart(charFrequency);
    }

    _plotChart = (charFrequency) => {
        console.log(charFrequency);

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

        series.columns.template.tooltipText = "\n({categoryX},{valueY})";
        chart.tooltip.background.fill = am4core.color("#67b7dc");
        chart.tooltip.label.fontSize = 20;
        chart.tooltip.label.textAlign = "middle";
    }

    render = () => {
        return (
            <div>
                <h1>Single char frequency</h1>
                <div id="chartdiv" style={{ width: 1500, height: 500}}></div>
            </div>
        );
    }
}

export default SingleCharFrequency;