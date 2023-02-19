"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEditText = void 0;
var currentText;
function updateEditText(newText) {
    currentText = newText;
}
exports.updateEditText = updateEditText;
async function patchHandler(ID, newText) {
    async function makeRequest(ID, currentText) {
        const path1 = 'http://localhost:3000/todo/todo/';
        const newPath = path1 + ID;
        fetch(newPath, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "task": currentText
            }),
        });
    }
    makeRequest(ID, currentText);
    console.log("*** Item ", ID, " deleted! ***");
    return;
}
exports.default = patchHandler;
//# sourceMappingURL=patchHandler.js.map