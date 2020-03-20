google.load('visualization', '1', { packages: ['corechart', 'controls'] });
google.setOnLoadCallback(drawVisualization)
function drawVisualization() 
{

    var options = {
        title: "",
        width: '100%',
        height: '100%',
        axisTitlesPosition: 'out',
        'isStacked': true,
        pieSliceText: 'percentage',
        colors: ['#0598d8', '#f97263'],
        chartArea: {
            left: "25%",
            top: "3%",
            height: "80%",
            width: "100%"
        },
        vAxis: {
            title: ""
        },
        hAxis: {
            title: "Total Results"
        }
    };


   $.get("../graphs/mundialNoChina.csv", function(csvString) {
      // transform the CSV string into a 2-dimensional array
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

      // this new DataTable object holds all the data
      var data = new google.visualization.arrayToDataTable(arrayData);
      // CAPACITY - En-route ATFM delay - YY - CHART
      var mundial_no_china = new google.visualization.ChartWrapper({
         chartType: 'LineChart',
         containerId: 'mundial-no-china',
         dataTable: data,
         options:{
            width: '100%', height: '120%',
            // title: 'Casos COVID-19 em Países ao longo dos dias',
            titleTextStyle : {color: 'black', fontSize: 18},
            scaleType: 'log',
            vAxis: {
                viewWindow: {
                    min: 0,
                    max: 10000
                },
                ticks: [0, 2500, 5000, 7500, 10000] // display labels every 25
            },
         }
      });
      mundial_no_china.draw();
      // Create and draw the visualization.
      // new google.visualization.LineChart(document.getElementById('mundial-no-china')).
      // draw(data,options);
   });
}
$(window).on("throttledresize", function (event) {
    drawVisualization();
});