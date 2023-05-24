var options = {
    colors : ['#FFF37A'],
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1]
  }],
    chart: {
    height: 150,
    type: 'bar',
  },
  plotOptions: {
    bar: {
        
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#FFF37A"],
      fontFamily:"Montserrat Alternates"
    }
  },
  
  xaxis: {
    
    categories: ["Jan", "Feb", "Mar", "Apr"],
    labels:{
        show:false,
       
    },
    
    
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: false,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
     
      show: false,
      
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#FFF37A'
    }
  }
  };

  var chart = new ApexCharts(document.querySelector(".chart-3"), options);
  chart.render();
