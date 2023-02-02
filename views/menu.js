'use strict'

module.exports = (data, props) => {
  let children = [
    {
      "type": "container",
      "constraints": {
        "minWidth": 32,
        "minHeight": 32,
        "maxWidth": 32,
        "maxHeight": 32,
      },
      "child": {
        "type": "image",
        "src": "logo.png"
      },
    },
    {
      "type": "flexible",
      "child": {
        "type": "container",
        "child": {
          "type": "text",
          "value": "Teodore",
          "textAlign": "center",
          "style": {
            "fontWeight": "bold",
            "fontSize": 24,
          },
        }
      }
    }
  ]

  if (data[0]?.currentList != null) {
    children.splice(1, 0, {
      "type": "actionable",
      "onPressed": {
        action: "navigateTo",
        props: { _id: data.currentTask }
      },
      "child": {
        "type": "container",
        "constraints": {
          "minWidth": 32,
          "minHeight": 32,
          "maxWidth": 32,
          "maxHeight": 32,
        },
        "decoration": {
          "color": 0xFFFFFFFF,
          "boxShadow": {
            "blurRadius": 8,
            "color": 0x1A000000,
            "offset": {
              "dx": 0,
              "dy": 1
            }
          },
          "borderRadius": {
            "topLeft": {
              "x": 4,
              "y": 4
            },
            "bottomRight": {
              "x": 4,
              "y": 4
            },
            "topRight": {
              "x": 4,
              "y": 4
            },
            "bottomLeft": {
              "x": 4,
              "y": 4
            }
          },
        },
        "child": {
          "type": "flex",
          "fillParent": true,
          "padding": {
            "top": 8,
            "left": 16,
            "right": 16,
            "bottom": 8,
          },
          "children": [
            {
              "type": "text",
              "value": "←"
            }
          ]
        }
      }
    })
  }
  return {
    "type": "container",
    "decoration": {
      color: 0xFFFFFFFF,
      boxShadow: {
        blurRadius: 8,
        color: 0x1A000000,
        offset: {
          dx: 0,
          dy: 1
        }
      },
    },
    "padding": {
      top: 16,
      bottom: 16,
      left: 32,
      right: 32,
    },
    "child": {
      "type": "flex",
      "fillParent": true,
      "mainAxisAlignment": "spaceBetween",
      "crossAxisAlignment": "center",
      "padding": { right: 32 },
      "children": children
    },
  }
}
