
// 本地json模版数据
async function fetchLocalData() {
  try {
    const response = await fetch('json_templates/chart1_template.json');
    if (!response.ok) {
      throw new Error('Response is not ok!');
    }

    const jsonData = await response.json();

    var chart1 = echarts.init(document.getElementById('chart1'));
    var chart1_data = JSON.parse(JSON.stringify(jsonData));
    chart1.setOption(chart1_data);
  } catch (error) {
    console.error('Local Json Error!');
  }
}

// POST请求数据
function fetchData() {
    fetch('http://127.0.0.1:5000/data1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })

    .then(response => response.json())
    .then(data1 => {
        var chart1 = echarts.init(document.getElementById('chart1'));
        var chart1_data = JSON.parse(JSON.stringify(data1));
        chart1.setOption(chart1_data);
    })

    .catch(error => {
        console.error('请求错误:', error);
    });
}

try {
  window.onload = fetchData;
} catch (error) {
  console.error('POST请求错误:', error)
} finally {
  window.onload = fetchLocalData;
}

setInterval(fetchData, 1000);

