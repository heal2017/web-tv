#!/bin/py3
import json

# 模版
charts_template_data = {
}

with open('charts_template.json', 'w', encoding='utf-8') as fo:
  json.dump(charts_template_data, fo, ensure_ascii=False, indent=2)

