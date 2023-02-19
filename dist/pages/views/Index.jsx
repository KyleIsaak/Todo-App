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
exports.Index = void 0;
const React = __importStar(require("react"));
const head_1 = __importDefault(require("next/head"));
const Submit_button_1 = __importDefault(require("./Submit_button"));
const Text_field_1 = __importDefault(require("./Text_field"));
const List_1 = require("./List");
const centeredStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22pt'
};
const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22pt'
};
const Index = props => {
    const { title } = props;
    const ListComponent = <List_1.Todo_List></List_1.Todo_List>;
    const SubmitButton = (0, Submit_button_1.default)(ListComponent);
    return (<div>
            <head_1.default>
                <title>{title}</title>
                
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </head_1.default>

            <div style={titleStyle}>
                Todo:
            </div>

            <div style={centeredStyle}>
                <Text_field_1.default></Text_field_1.default>
                {SubmitButton}             
            </div>

            <div style={centeredStyle}>
                {ListComponent}
            </div>


        </div>);
};
exports.Index = Index;
exports.default = exports.Index;
exports.Index.getInitialProps = res => {
    const { query } = res;
    return Object.assign({}, query);
};
//# sourceMappingURL=Index.jsx.map