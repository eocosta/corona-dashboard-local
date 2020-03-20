google.load('visualization', '1', { packages: ['corechart', 'controls'] });
google.setOnLoadCallback(drawVisualization)
function drawVisualization() 
{

   $.get("../graphs/brasil-confirmed-death4.csv", function(csvString) 
   {
      // transform the CSV string into a 2-dimensional array
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

      // this new DataTable object holds all the data
      var data = new google.visualization.arrayToDataTable(arrayData);
      // CAPACITY - En-route ATFM delay - YY - CHART
      var brasil_confirmed_death = new google.visualization.ChartWrapper({
         chartType: 'LineChart',
         containerId: 'brasil-confirmed-death',
         dataTable: data,
         options:{
            width: '100%', height: '120%',
            // title: 'Casos COVID-19 em Países ao longo dos dias',
            titleTextStyle : {color: 'black', fontSize: 18},
            // scaleType: 'log',
         }
      });
      brasil_confirmed_death.draw();
      // Create and draw the visualization.
      // new google.visualization.LineChart(document.getElementById('mundial-no-china')).
      // draw(data,options);
   });
}
// $(window).on("throttledresize", function (event) {
//     drawVisualization();
// });