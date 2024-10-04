#!/bin/py3
import json

# 模版
chart1_template_data = {
  'title': {
    'text': '条形图',
    'textStyle': {
      'color': '#FFFFFF'
    }
  },
  'tooltip': {},
  'legend': {
    'data': [{
        'name': '销量',
        'textStyle': {
          'color': '#FFFFFF',
          'fontSize': '16'
        }
    }]
  },
  'xAxis': {
    'data': ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    'axisLine': {
      'lineStyle': {
        'color': '#FFFFFF'
      }
    }

  },
  'yAxis': {
    'axisLine': {
      'lineStyle': {
        'color': '#FFFFFF'
      }
    }
  },
  'series': [
    {
      'color': '#3398DB',
      'name': '销量',
      'type': 'bar',
      'data': [5, 20, 36, 10, 10, 20]
    },
    {
      'color': '#FFFF95',
      'name': '销量',
      'type': 'bar',
      'data': [15, 210, 32, 130, 120, 20]
    }
  ]
}

with open('chart1_template.json', 'w', encoding='utf-8') as fo:
  json.dump(chart1_template_data, fo, ensure_ascii=False, indent=2)

