
async function getJsonData() {
    try {
      const api_url = 'http://10.136.67.29:5000/data'
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      });

      return response.json();
    } catch (error) {
      const response = await fetch('json_templates/components_template.json');
      if (!response.ok) {
        throw new Error('Response is not ok!');
      }

      return response.json();
    }
}

async function fetchData() {
  const jsonData = await getJsonData();
  console.log(jsonData);
  // component1
  var component1 = echarts.init(document.getElementById('component1'));
  var component1_data = JSON.parse(JSON.stringify(jsonData))['component1'];
  component1.setOption(component1_data);
  
  // component2
  var component2 = echarts.init(document.getElementById('component2'));
  var component2_data = JSON.parse(JSON.stringify(jsonData))['component2'];
  component2.setOption(component2_data);
  
  // component3
  var component3 = echarts.init(document.getElementById('component3'));
  var component3_data = JSON.parse(JSON.stringify(jsonData))['component3'];
  component3.setOption(component3_data);
  
  // component4
  var component4 = echarts.init(document.getElementById('component4'));
  var component4_data = JSON.parse(JSON.stringify(jsonData))['component4'];
  component4.setOption(component4_data);
  
  // component5
  var component5 = echarts.init(document.getElementById('component5'));
  var component5_data = JSON.parse(JSON.stringify(jsonData))['component5'];
  component5.setOption(component5_data);
  
  // component6
  var component6 = echarts.init(document.getElementById('component6'));
  var component6_data = JSON.parse(JSON.stringify(jsonData))['component6'];
  component6.setOption(component6_data);
  
  // // component6
  // var component6 = echarts.init(document.getElementById('component6'));
  // var component6_data = JSON.parse(JSON.stringify(jsonData))['component6'];
  // setOption(component6_data);
}

// fetchData();

async function run() {
  try {
    window.onload = fetchData;
  } catch (error) {
    console.error('POST请求错误:', error)
    window.onload = fetchLocalData;
  } finally {

  }
  
  await setInterval(fetchData, 120000);
  // await startCarousel();
}

function resizeCharts() {
  var charts = document.querySelectorAll('.chart');
  charts.forEach(chart =>  {
    try {
      mychart = echarts.init(chart);
      mychart.resize();
    } catch (error) {
      console.log('不是echart图!')
    }
  });
}

window.addEventListener('resize', function() {
  resizeCharts();
});

run();

