"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function deleteHandler(ID) {
    async function makeRequest(ID) {
        const path1 = 'http://localhost:3000/todo/todo/';
        const newPath = path1 + ID;
        fetch(newPath, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
    }
    makeRequest(ID);
    console.log("*** Item ", ID, " deleted! ***");
    return;
}
exports.default = deleteHandler;
//# sourceMappingURL=deleteHandler.js.map