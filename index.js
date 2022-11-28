Morris.Bar({
    element: 'graph',
    data: [
      {x: 'Nov', y: '1.025.187'},
      {x: 'Dec', y: '2.253.017'},
      {x: 'Jan', y: '3.145.756'},
      {x: 'Feb', y: '3.751.694'},
      {x: 'Mar', y: '5.321.821'},
      {x: 'Apr', y: '3.751.693'}
    ],
    xkey: 'x',
    ykeys: 'y',
    labels: ["$"],
    grid: false,
    axes: false,
    barSizeRatio: .8,
  
    barColors: function (row, series, type) {
      if (type === 'bar') {
        var aqua = Math.ceil(0 * row.y / this.ymax);
        return 'rgb(' + aqua + '25,192,204)';
      }
      else {
        return '#2253DD';
      }
    },
  });
hideHover: true;




new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2018', value: 20 },
    { year: '2019', value: 50 },
    { year: '2020', value: 35 },
    { year: '2021', value: 15 },
    { year: '2022', value: 98 }
  ],

  labelColor: 'linear-gradient(90deg, rgba(28,146,210,1) 0%, rgba(250,145,17,1) 35%, rgba(25,192,204,1) 100%)',
  axes : false,
  grid :false,
  resize:true,
  
  
  lineColors:[
      '#19C0CC ',
      '#FA9111',
      
      
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
  
});

Morris.Donut({
  element: 'Donut',
  data: [
    {value: 48, label: 'Occupied'},
    {value: 39, label: 'Vacant'},
    {value: 13, label: 'Maintenance'},
  ],
  resize:true,
  labelColor: '#11383d',
  colors: [
    '#2253DD',
    '#FA9111',
    '#19C0CC'
    
  ],
  formatter: function (x) { return x + "%"}
});