var options = {
  series: [50, 30, 20],
  chart: {
  width: 230,
  type: 'polarArea',
  
},
labels: ['Social media', 'Search engine', 'Ads'],
fill: {
  opacity: 1
},
dataLabels:{
  enabled:true
},
stroke: {
  width: 1,
  colors: undefined
},
yaxis: {
  show: false
},
legend: {
  position: 'bottom',
  fontFamily:"Montserrat Alternates"
},

plotOptions: {
  polarArea: {
    rings: {
      strokeWidth: 0
    },
    spokes: {
      strokeWidth: 0
    },
  }
},
theme: {
  monochrome: {
    color: '#7F7947',
    enabled: true,
    shadeTo: 'light',
    shadeIntensity: 0.6
  }
}
};

var chart = new ApexCharts(document.querySelector(".traffic-info"), options);
chart.render();
