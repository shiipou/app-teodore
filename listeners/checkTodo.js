'use strict'

const todoService = require("../services/todo");


module.exports = async (props, event, api) => {
    props.inProgress = !props.inProgress;
    return todoService.update(api, props)
}
