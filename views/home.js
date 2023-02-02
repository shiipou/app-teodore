'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 4,
        "crossAxisAlignment": "center",
        "children": [
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


    {
        type: "container",
        "constraints": {
            "minWidth": 200,
            "maxWidth": 600,
        },
        child: {
            "type": "flex",
            "direction": "vertical",
            "spacing": 16,
            "mainAxisAlignment": "spaceEvenly",
            "crossAxisAlignment": "center",
            "children": [
                {
                    type: "view",
                    name: "todoList",
                    coll: "todo",
                    query: {
                        parent: data.currentTask,
                        archived: false,
                        user: "@me"
                    }
                }
            ]
        }
    }
}
