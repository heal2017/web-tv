// 图表的配置
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // 图表类型：柱状图
    data: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月'], // X轴标签
        datasets: [{
            label: '销量',
            data: [12, 19, 3, 5, 2, 3], // 数据集
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 // 边框宽度
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Y轴从零开始
            }
        }
    }
});
