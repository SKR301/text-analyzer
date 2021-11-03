import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class SingleCharBarChart extends Component {
    constructor(props){
        super(props);
        this.state = {charFrequency: ''};
    }

    plotChart = (charFrequency) => {
        var chart = am4core.create("chartdiv", am4charts.XYChart);
        
        charFrequency.forEach(function (value, key) {
            chart.data.push({
                "character": key,
                "count": value
            });
        });

        console.log(chart.data);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "character";
        categoryAxis.title.text = "Characters";
        categoryAxis.renderer.minGridDistance = 10;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Character Count";

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "count";
        series.dataFields.categoryX = "character";
        series.name = "Single Character Frequency Count";

        series.columns.template.tooltipText = "(count: [{valueY}:bold])[/]";
    }

    render = () => {
        return (
            <div>
                <div id="chartdiv" style={{ width: 1500, height: 500}}></div>
            </div>
        );
    }
}

export default SingleCharBarChart;