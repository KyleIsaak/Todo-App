"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function patchHandler(ID, newText) {
    if (newText) {
        async function makeRequest(ID, newText) {
            const path1 = "http://localhost:3000/todo/todo/";
            const newPath = path1 + ID;
            fetch(newPath, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    task: newText,
                }),
            });
        }
        makeRequest(ID, newText);
        return;
    }
}
exports.default = patchHandler;
//# sourceMappingURL=patchHandler.js.map