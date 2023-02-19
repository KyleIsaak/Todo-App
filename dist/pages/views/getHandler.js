"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getHandler() {
    async function makeRequest() {
        return fetch('http://localhost:3000/todo/todo', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((results) => {
            if (results.ok) {
                return results.json();
            }
        })
            .then((data) => {
            let listItems = data;
            return listItems;
        });
    }
    var resultsOfRequest = makeRequest();
    return resultsOfRequest;
}
exports.default = getHandler;
//# sourceMappingURL=getHandler.js.map