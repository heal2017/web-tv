
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

    component4
    var component4 = echarts.init(document.getElementById('component4'));
    var component4_data = JSON.parse(JSON.stringify(jsonData))['component4'];
    component4.setOption(component4_data);

    // component5
    // var component5 = echarts.init(document.getElementById('component5'));
    // var component5_data = JSON.parse(JSON.stringify(jsonData))['component5'];
    // component5.setOption(component5_data);

    // component6
    // todo

  } catch (error) {
    console.error('Local Json Error!', error);
  }
}

// POST请求数据
async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:5000/data', {
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

    component4
    var component4 = echarts.init(document.getElementById('component4'));
    var component4_data = JSON.parse(JSON.stringify(jsonData))['component4'];
    component4.setOption(component4_data);

    // component5
    // var component5 = echarts.init(document.getElementById('component5'));
    // var component5_data = JSON.parse(JSON.stringify(jsonData))['component5'];
    // component5.setOption(component5_data);

    // component6
    // todo
  } catch (error) {
    console.error('Network Json Error!', error);
  }
}

try {
  window.onload = fetchData;
} catch (error) {
  console.error('POST请求错误:', error)
} finally {
  window.onload = fetchLocalData;
}

setInterval(fetchData, 1000);
fetchLocalData();

