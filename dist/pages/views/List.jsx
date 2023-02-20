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
exports.Todo_List = void 0;
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const DeleteForeverTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteForeverTwoTone"));
const getHandler_1 = __importDefault(require("./getHandler"));
const deleteHandler_1 = __importDefault(require("./deleteHandler"));
const patchHandler_1 = __importDefault(require("./patchHandler"));
class Todo_List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
        };
    }
    updateList() {
        const fetchListItems = async () => {
            const listItems = await Update_List();
            this.setState({
                listItems,
            });
        };
        fetchListItems();
    }
    componentDidMount() {
        const fetchListItems = async () => {
            const listItems = await Update_List();
            this.setState({
                listItems,
            });
        };
        fetchListItems();
    }
    render() {
        this.updateList();
        return (<material_1.Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <material_1.List sx={{ width: "100%", maxWidth: 360 }}>
          {this.state.listItems.map((item) => (<material_1.ListItem sx={{ width: "100%", maxWidth: 360, border: 1 }} key={item.todoID} secondaryAction={<material_1.Box>
                  <material_1.IconButton edge="end" aria-label="delete" onClick={() => {
                        (0, patchHandler_1.default)(item.todoID, document.getElementById("input").value);
                    }}>
                    <Edit_1.default />
                  </material_1.IconButton>

                  <material_1.IconButton edge="end" aria-label="delete" onClick={() => {
                        (0, deleteHandler_1.default)(item.todoID);
                    }}>
                    <DeleteForeverTwoTone_1.default />
                  </material_1.IconButton>
                </material_1.Box>}>
              <material_1.ListItemText>{item.task}</material_1.ListItemText>
            </material_1.ListItem>))}
        </material_1.List>
      </material_1.Box>);
    }
}
exports.Todo_List = Todo_List;
async function Update_List() {
    async function updateList() {
        let newData = await (0, getHandler_1.default)();
        newData.forEach((element) => {
        });
        return newData;
    }
    const data = await updateList();
    return data;
}
//# sourceMappingURL=List.jsx.map