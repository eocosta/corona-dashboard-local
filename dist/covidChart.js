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


   $.get("ifr.csv", function(csvString) {
      // transform the CSV string into a 2-dimensional array
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

      // this new DataTable object holds all the data
      var data = new google.visualization.arrayToDataTable(arrayData);
      // CAPACITY - En-route ATFM delay - YY - CHART
      var curve_chart = new google.visualization.ChartWrapper({
         chartType: 'LineChart',
         containerId: 'curve_chart',
         dataTable: data,
         options:{
            width: '100%', height: '300px',
            title: 'Casos COVID-19 em Países ao longo dos dias',
            titleTextStyle : {color: 'grey', fontSize: 11},
         }
      });
      curve_chart.draw();
      // Create and draw the visualization.
      // new google.visualization.LineChart(document.getElementById('curve_chart')).
      // draw(data,options);
   });
}
$(window).on("throttledresize", function (event) {
    drawVisualization();
});




// function drawVisualization() {

//     var options = {
//         title: "",
//         width: '100%',
//         height: '100%',
//         axisTitlesPosition: 'out',
//         'isStacked': true,
//         pieSliceText: 'percentage',
//         colors: ['#0598d8', '#f97263'],
//         chartArea: {
//             left: "25%",
//             top: "3%",
//             height: "80%",
//             width: "100%"
//         },
//         vAxis: {
//             title: ""
//         },
//         hAxis: {
//             title: "Total Results"
//         }
//     };



//     // Create and populate the data table.
//     var data = google.visualization.arrayToDataTable([
//         ['State', 'Male', 'Female'],
//         ['Alaska', 500, 400],
//         ['Alabama', 300, 200],
//         ['California', 1500, 650],
//         ['Colorado', 1200, 470],
//         ['Illinois', 1000, 700],
//         ['Tennesse', 500, 400],
//         ['Texas', 1300, 500],
//         ['Utah', 176, 55],
//         ['Vermont', 310, 240],
//         ['Wyoming', 500, 400]
//     ]);

//     // Create and draw the visualization.
//     new google.visualization.BarChart(document.getElementById('visualization')).
//     draw(data,options);
// }