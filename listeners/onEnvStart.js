'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let counters = await apiService.executeQuery(api, "counter", {
        "user": "global"
    })

    if (counters.length == 0) {
        await apiService.createDoc(api, "counter", {
            "count": 0,
            "user": "global"
        });
    }
}
