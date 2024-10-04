

// 条形图
function setBarChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    // color: '#3398DB',
    title: {
      text: '条形图',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    tooltip: {},
    legend: {
      data: [{
          name: '销量',
          textStyle: {
            color: '#FFFFFF',
            fontSize: '16'
          }
      }]
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      }

    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      }
    },
    series: [
      {
        color: '#3398DB',
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      },
      {
        color: '#FFFF95',
        name: '销量',
        type: 'bar',
        data: [15, 210, 32, 130, 120, 210]
      }
    ]
  };

  chart.setOption(option);
}

// 折线图
function setLineChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    color: '#3398DB',
    title: {
      text: '折线图',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    tooltip: {},
    legend: {
      data: [{
          name: '销量',
          textStyle: {
            color: '#FFFFFF',
            fontSize: '16'
          }
      }]
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      }

    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#FFFFFF'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  chart.setOption(option);
}

// 圆饼图
function setPieChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));

  var option = {
    title: {
      text: '圆饼图',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    tooltip: {},
    legend: {
      bottom: '0%',
      left: 'center',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    series: [
      {
        name: '销量',
        type: 'pie',
        itemStyle: {
          borderRadius: 10,
          borderColor: '#FFFFFF',
          borderWidth: 2
        },
        data: [
          { value: 1048, name: '衬衫' },
          { value: 735, name: '羊毛衫' },
          { value: 580, name: '雪纺衫' },
          { value: 484, name: '裤子' },
          { value: 300, name: '高跟鞋' },
          { value: 111, name: '袜子' }
        ]
      }
    ]
  };

  chart.setOption(option);
}

// 圆饼图1
function setPie1Chart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));

  var option = {
    title: {
      text: '圆饼图1',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    tooltip: {},
    legend: {
      bottom: '0%',
      left: 'center',
      textStyle: {
        color: '#FFFFFF'
      }
    },
    series: [
      {
        name: '销量',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#FFFFFF',
          borderWidth: 2
        },

        data: [
          { value: 1048, name: '衬衫' },
          { value: 735, name: '羊毛衫' },
          { value: 580, name: '雪纺衫' },
          { value: 484, name: '裤子' },
          { value: 300, name: '高跟鞋' },
          { value: 111, name: '袜子' }
        ]
      }
    ]
  };

  chart.setOption(option);
}

setBarChart('chart1');
setLineChart('chart2');
setPieChart('chart3');
setLineChart('chart4');
setPie1Chart('chart5');

