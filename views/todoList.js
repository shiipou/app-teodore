'use strict'

module.exports = (data, counter) => {
    return {
        "type": "flex",
        "direction": "vertical",
        "spacing": 16,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": data.map(todo => {
            return {
                "type": "view",
                name: "task",
                props: todo
            }
        })
    }
}

