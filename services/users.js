'use strict'

const apiService = require("./api");

module.exports = {
    all(api) {
        return apiService.executeQuery(api, "users", {});
    },
    one(api, id) {
        return apiService.executeQuery(api, "users", { id: id } );
    },
    create(api, user) {
        return apiService.createDoc(api, "users", user);
    },
    update(api, user) {
        return apiService.updateDoc(api, "users", user);
    }
}
