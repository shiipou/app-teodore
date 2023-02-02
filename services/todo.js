'use strict'

const apiService = require("./api");

module.exports = {
    all(api) {
        return apiService.executeQuery(api, "todo", {});
    },
    create(api, todo) {
        return apiService.createDoc(api, "todo", todo);
    },
    update(api, todo) {
        return apiService.updateDoc(api, "todo", todo);
    },
    delete(api, todo) {
        return apiService.deleteDoc(api, "todo", todo);
    },
    getRoot(api) {
        // get any item with no parent
        return apiService.executeQuery(api, "todo", { filter: { parent: null } });
    },
    childrenOf(api, todo) {
        // get any item with the given parent
        return apiService.executeQuery(api, "todo", { filter: { parent: todo._id } });
    }
}
