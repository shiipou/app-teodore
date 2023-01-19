'use strict'

module.exports = (data, props) => {
    return {
        type: "actionable",
        onPressed: {
            action: "checkTodo",
            props
        },
        child: {
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
                "borderRadius": {
                    "topLeft": {
                        x: 4,
                        y: 4
                    },
                    "bottomRight": {
                        x: 4,
                        y: 4
                    },
                    topRight: {
                        x: 4,
                        y: 4
                    },
                    bottomLeft: {
                        x: 4,
                        y: 4
                    }
                },
            },
            child: {
                type: "flex",
                fillParent: true,
                padding: {
                    top: 8,
                    left: 16,
                    right: 16,
                    bottom: 8,
                },
                children: [
                    {
                        type: "text",
                        value: props.body
                    }
                ]
            }
        }
    }
}

