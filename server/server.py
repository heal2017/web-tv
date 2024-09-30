#!/bin/py3
from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)

CORS(app)

@app.route('/data', methods=['POST'])
def random_number():
    random_number1 = random.randint(1, 100)
    return jsonify({"data": random_number1})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

