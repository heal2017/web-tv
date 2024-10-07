#!/bin/py3
from flask import Flask
from flask import jsonify
from flask_cors import CORS

import json
import random

if __name__ == '__main__':
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
    
    template_path = '../ui/main/json_templates'
    
    @app.route('/data', methods=['POST'])
    def postData():
        with open(f'{template_path}/components_template.json', 'r') as fo:
          component_data = json.load(fo)
    
        # component1
        for i in list(range(len(component_data['component1']['series']))):
          component_data['component1']['series'][i]['data'] = getRandomNumList(3) + [0] + getRandomNumList(4)
    
        # component2
        for i in list(range(len(component_data['component2']['series']))):
          component_data['component2']['series'][i]['data'] = getRandomNumList(3) + [0] + getRandomNumList(4)
    
        # component3
        for i in list(range(len(component_data['component3']['series']))):
          component_data['component3']['series'][i]['data'] = getRandomNumList(3) + [0] + getRandomNumList(4)
    
        # component4
        for i in list(range(len(component_data['component4']['series']))):
          for j in list(range(len(component_data['component4']['series'][i]['data']))):
            component_data['component4']['series'][i]['data'][j]['value'] = getRandomNum()
    
        # component5
        for i in list(range(len(component_data['component5']['series']))):
          for j in list(range(len(component_data['component5']['series'][i]['data']))):
            component_data['component5']['series'][i]['data'][j]['value'] = getRandomNum()
    
        # component6
        component_data['component6'] = []
        for i in list(range(10)):
          dic = {}
          dic['name'] = f'Item{i}'
          dic['value'] = getRandomNumList(2)
          component_data['component6'].append(dic)
    
        return jsonify(component_data)

    app.run(host='0.0.0.0', port=5000, debug=True)

