var options = {
  series: [15,25,60],
  chart: {
  width: '80%',
  type: 'pie',
},
labels: ["Icp", "Eth", "Btc"],
colors: ["#7F7947"],
theme: {
  monochrome: {
    color: '#7F7947',
    enabled: true,
    shadeTo: 'light',
    shadeIntensity: 0.4
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  
},
dataLabels: {
  
  formatter(val, opts) {
    const name = opts.w.globals.labels[opts.seriesIndex]
    return [name, val.toFixed(1) + '%']
  }
},
legend: {
  show: false,
  position: 'bottom',
  fontFamily:"Montserrat Alternates"
}
};

  var chart = new ApexCharts(document.querySelector(".chart-2"), options);
  chart.render();
