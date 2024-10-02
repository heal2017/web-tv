var maxData = 200;
option4 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "晋城",
          "太旧",
          "太原",
          "吕梁",
          "长治",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "O",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "O",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 5
      }
    ]
};
function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}

var maxData = 200;
option41 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "朔州",
          "大同",
          "运城",
          "忻州",
          "临汾",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "O",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "O",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 5
      }
    ]
};
