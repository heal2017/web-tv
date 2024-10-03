
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

setBarChart('chart1');
setLineChart('chart2');
setPieChart('chart3');
setLineChart('chart4');
setPie1Chart('chart5');

const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel li').length;
const itemHeight = document.querySelector('.carousel li').clientHeight;
let index = 0;
let isTransitioning = false;

function startCarousel() {
  setInterval(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      index++;

      if (index === totalItems) {
        // 当到达最后一行，先瞬间跳回第一行的上一行，再继续滑动
        index = 0;
        carousel.style.transition = "none"; // 取消动画，瞬间回到第一个
        carousel.style.transform = `translateY(0px)`;

        // 等待一帧再加回动画，保证视觉上无缝
        setTimeout(() => {
          carousel.style.transition = "transform 0.5s ease-in-out";
          isTransitioning = false;
        }, 50); // 延迟一点时间让浏览器完成跳转
      } else {
        carousel.style.transform = `translateY(-${index * itemHeight}px)`;
        isTransitioning = false;
      }
    }
  }, 1000); // 每1秒切换一次
}

startCarousel();

