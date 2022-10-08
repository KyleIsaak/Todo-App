import * as React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton, Box, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

import getHandler from "./getHandler";
import deleteHandler from "./deleteHandler"


export class Todo_List extends React.Component<{}, {listItems: any}> {
  constructor(props) {
    super(props);
    this.state = { 
      listItems: []
    };
  }

  updateList(){
    const fetchListItems = async () => {
      const listItems = await Update_List();
      this.setState({
        listItems
      });
    };
    fetchListItems();
  }

  componentDidMount() {
    const fetchListItems = async () => {
      const listItems = await Update_List();
      this.setState({
        listItems
      });
    };
    fetchListItems();
  }

  render() {
    this.updateList();
    return (
      <Box
        sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>

        <List
        sx={{ width: '100%', maxWidth: 360}}
        >
          {this.state.listItems.map(item => (
                  <ListItem
                    sx={{ width: '100%', maxWidth: 360, border: 1 }}
                    key = {item.todoID}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete"
                        onClick={() => {
                          //alert('clicked');
                          deleteHandler(item.todoID); // This is where deletion happens
                          // this.updateList(); // This is done automatically by componentDidMount()
                      }}
                      >
                        <DeleteIcon />
                      </IconButton>
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


async function Update_List(){

  async function updateList() {

    let newData = await getHandler();
    //console.log("data = ", data);
  
    newData.forEach(element => {
      // console.log("todoID: ", element.todoID)
      // console.log("task: ", element.task)
      // dataList.push(element)
    });
  
    return newData
  }

  const data = await updateList()
  //console.log("data = ", data)

  return data

}

/*
{tasks.map(item =>(
        <ListItem
          key = {item.task}
        >
        </ListItem>
      ))}
*/