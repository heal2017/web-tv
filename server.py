#!/bin/py3
from flask import Flask, jsonify
from flask_cors import CORS
import random

# 创建 Flask 应用
app = Flask(__name__)

# 启用 CORS，允许所有来源访问
CORS(app)

# 创建一个 GET 路由，返回随机数
@app.route('/data', methods=['POST'])
def random_number():
    random_number1 = random.randint(1, 100)
    return jsonify({"data": random_number1})

# 启动 Flask 服务器
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
