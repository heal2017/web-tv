// 定义一个函数用于发送POST请求并更新数据
function fetchData() {
    // 创建一个POST请求
    fetch('http://10.136.59.124:5000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json()) // 解析JSON响应
    .then(data => {
        // 使用API返回的数据更新网页内容
        document.getElementById('data').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('请求错误:', error);
    });
}

// 每隔10秒自动发送一次请求并更新数据
setInterval(fetchData, 1000); // 时间间隔为10秒（10000毫秒）

// 页面加载时立即请求一次
window.onload = fetchData;
