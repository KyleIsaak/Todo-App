// Core:
import * as React from "react";

// MUI:
import {List, ListItem, ListItemText, Box, IconButton,} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

// Local:
import getHandler from "./getHandler";
import deleteHandler from "./deleteHandler";
import patchHandler from "./patchHandler";

export class Todo_List extends React.Component<{}, { listItems: any }> {
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
    return (
      <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper"}}>
        <List sx={{ width: "100%", maxWidth: 500}}>
          {this.state.listItems.map((item) => (
            <ListItem
              sx={{ width: "100%", maxWidth: 400, border: 1, alignSelf: "center", margin: "0 auto", paddingBottom: "5px", marginBottom: "5px"}}
              key={item.todoID}
              secondaryAction={
                <Box>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      patchHandler(
                        item.todoID,
                        (document.getElementById("input") as HTMLInputElement).value
                      );
                    }}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      deleteHandler(item.todoID);
                    }}
                  >
                    <DeleteForeverTwoToneIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText>{item.task}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
}

async function Update_List() {
  async function updateList() {
    let newData = await getHandler();
    return newData;
  }

  const data = await updateList();

  return data;
}