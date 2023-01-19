'use strict'

const todoService = require("../services/todo");


module.exports = async (props, event, api) => {
    props.inProgress = false;
    return todoService.update(api, props)
}