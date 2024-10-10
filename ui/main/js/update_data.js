
// 本地json模版数据
async function fetchLocalData() {
  try {
    const response = await fetch('json_templates/components_template.json');
    if (!response.ok) {
      throw new Error('Response is not ok!');
    }

    const jsonData = await response.json();

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

    // // component4
    // var component4 = echarts.init(document.getElementById('component4'));
    // var component4_data = JSON.parse(JSON.stringify(jsonData))['component4'];
    // component4.setOption(component4_data);

    // // component5
    // var component5 = echarts.init(document.getElementById('component5'));
    // var component5_data = JSON.parse(JSON.stringify(jsonData))['component5'];
    // component5.setOption(component5_data);

    // // component6
    // var component6 = echarts.init(document.getElementById('component6'));
    // var component6_data = JSON.parse(JSON.stringify(jsonData))['component6'];
    // setOption(component6_data);

  } catch (error) {
    console.error('Local Json Error!');
  }
}

// POST请求数据
async function fetchData() {
  try {
    const api_url = 'http://10.136.67.29:5000/data'
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    });

    if (!response.ok) {
      throw new Error('Response is not ok!');
    }

    const jsonData = await response.json();

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

    // // component4
    // var component4 = echarts.init(document.getElementById('component4'));
    // var component4_data = JSON.parse(JSON.stringify(jsonData))['component4'];
    // component4.setOption(component4_data);

    // // component5
    // var component5 = echarts.init(document.getElementById('component5'));
    // var component5_data = JSON.parse(JSON.stringify(jsonData))['component5'];
    // component5.setOption(component5_data);

    // // component6
    // var component6 = echarts.init(document.getElementById('component6'));
    // var component6_data = JSON.parse(JSON.stringify(jsonData))['component6'];
    // setOption(component6_data);

  } catch (error) {
    console.error('Network Json Error!', error);
  }
}

async function run() {
  try {
    window.onload = fetchData;
  } catch (error) {
    console.error('POST请求错误:', error)
  } finally {
    window.onload = fetchLocalData;
  }
  
  await setInterval(fetchData, 120000);
  await fetchLocalData();
  await startCarousel();
}

run();
window.onload = fetchLocalData;

