'use strict'

module.exports = (data, props) => {
  return {
    "type": "flex",
    "direction": "vertical",
    "spacing": 4,
    "crossAxisAlignment": "center",
    "children": [
      {
        "type": "view",
        "name": "menu",
        "coll": "users",
        "query": {
          "id": "@me"
        }
      },
      {
        type: "flexible",
        child: {
          "type": "view",
          "name": "home",
          "coll": "users",
          "query": {
            "id": "@me"
          }
        },
      },
      {
        type: "view",
        name: "footer"
      }
    ]
  }
}
