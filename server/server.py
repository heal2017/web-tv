#!/bin/py3
from flask import Flask
from flask import jsonify
from flask_cors import CORS

import json
import random

app = Flask(__name__)

CORS(app)

# 随机数
def getRandomNum():
    return random.randint(1, 100)

# 随机数列表
def getRandomNumList(length):
    random_list = []
    for i in list(range(length)):
      random_list.append(getRandomNum())
    return random_list

template_path = 'json_templates'

@app.route('/data1', methods=['POST'])
def postData():
    # char1
    with open(f'{template_path}/chart1_template.json', 'r') as fo:
      chart1_data = json.load(fo)
    for i in list(range(len(chart1_data['series']))):
      chart1_data['series'][i]['data'] = getRandomNumList(6)
    return jsonify(chart1_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

