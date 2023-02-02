'use strict'

const apiService = require("../services/api");

module.exports = async (props, event, api) => {
    let counter = await apiService.getDoc(api, "counter", props.id);
    counter.count += 1;
    await apiService.updateDoc(api, "counter", counter);
    return {};
}
