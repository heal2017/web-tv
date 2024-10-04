
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

setInterval(fetchData, 1000);

window.onload = fetchData;

