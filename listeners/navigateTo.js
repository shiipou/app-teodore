'use strict'

const userService = require("../services/users");


module.exports = async (props, event, api) => {
    const res = await userService.one(api, { id: '@me' })
    const user = res.data[0]
    console.log(props, user)
    user.currentTask = props._id
    return userService.update(api, user)
}
