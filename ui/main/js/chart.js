var myChart1 = echarts.init(document.getElementById('chart1'));
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
myChart1.setOption(option);

var myChart2 = echarts.init(document.getElementById('chart2'));
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
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
myChart2.setOption(option);

var myChart3 = echarts.init(document.getElementById('chart3'));
var option = {
  title: {
    text: '条形图'
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
myChart3.setOption(option);
