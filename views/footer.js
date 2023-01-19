'use strict'

module.exports = (data, counter) => {
    return {
        type: "flex",
        mainAxisAlignment: "center",
        children: [
            {
                type: "form",
                onSubmit: {
                    action: "addTodo",
                },
                child: {
                    type: "container",
                    "constraints": {
                        "minWidth": 200,
                        "maxWidth": 600,
                    },
                    "padding": {
                        top: 16,
                        "bottom": 16,
                    },
                    child: {
                        type: "flex",
                        spacing: 8,
                        crossAxisAlignment: "center",
                        children: [
                            {
                                type: "flexible",
                                child: {
                                    type: "textfield",
                                    value: "",
                                    name: "todoBody"
                                },
                            },
                            {
                                type: "button",
                                size: "large",
                                text: "Add",
                                submit: true
                            }
                        ]
                    }
                }

            }]
    }
}

