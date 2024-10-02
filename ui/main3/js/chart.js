
function setBarChart(chart_id) {
  var chart = echarts.init(document.getElementById(chart_id));
  var option = {
    color: '#3398DB',
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
    color: '#3398DB',
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
      text: '圆饼图',
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
    series: [
      {
        name: '销量',
        type: 'pie',
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

function TimeControl() {
  $(".message_scroll_box").animate({marginTop: 96}, 800,
    function () {
      $(".message_scroll_box").css({marginTop: 0});    //把顶部的边界清零
      $(".message_scroll_box .message_scroll:first").before($(".message_scroll_box .message_scroll:last"));    //在第一个新闻后面插入最后一个新闻
    });
}

var T = setInterval(TimeControl, 2300);    //开始定时
$(".message_scroll_box").mouseenter(function () {
  clearInterval(T);    //停止定时
})
.mouseleave(function () {
  T = setInterval(TimeControl, 2500);    //再次定时
})

// var myChart4 = echarts.init(document.getElementById('main4'));
// myChart4.setOption(option4);
// var myChart41 = echarts.init(document.getElementById('main41'));
// myChart41.setOption(option41);

// var mySwiper2 = new Swiper('.visual_swiper2', {
//   autoplay: true,//可选选项，自动滑动
//   direction : 'vertical',//可选选项，滑动方向
//   speed:2000,//可选选项，滑动速度
// })

setBarChart('chart1');
setLineChart('chart2');
setPieChart('chart3');
setLineChart('chart4');
setPieChart('chart5');

