'use strict'

module.exports = (data, props) => {
    return {
        type: "actionable",
        onPressed: {
            action: "navigateTo",
            props
        },
        child: {
            "type": "container",
            "decoration": {
                color: props.inProgress ? 0xFFFFFFFF : 0xFFE0E0E0,
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
