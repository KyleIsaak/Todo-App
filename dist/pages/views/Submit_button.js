"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateText = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const Button_1 = __importDefault(require("@mui/material/Button"));
var textToAdd;
function Submit_button(listComponent) {
    const handleSubmit = (0, react_1.useCallback)((e) => {
        if (textToAdd != ("" || null)) {
            fetch('todo/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "task": textToAdd
                }),
            });
        }
    });
    return (<Button_1.default variant="contained" onClick={() => {
            handleSubmit();
        }}>
      Submit
    </Button_1.default>);
}
exports.default = Submit_button;
function updateText(newText) {
    textToAdd = newText;
}
exports.updateText = updateText;
//# sourceMappingURL=Submit_button.js.map