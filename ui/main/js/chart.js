
function setBarChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    title: {
      text: '条形图'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  chart.setOption(option);
}

function setLineChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    title: {
      text: '折线图'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
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

function setPieChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    title: {
      text: '圆饼图'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    series: [
      {
        name: '销量',
        type: 'pie',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  chart.setOption(option);
}

setBarChart('chart1');
setLineChart('chart2');
setPieChart('chart3');
setBarChart('chart4');
setBarChart('chart5');
setBarChart('chart6');

