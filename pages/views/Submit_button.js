// Core
import * as React from 'react';
import { useCallback } from 'react'

// MUI
import Button from '@mui/material/Button';

// Local
// import getHandler from "./getHandler"
// import Todo_List from './List'
// import deleteHandler from "./deleteHandler" // FOR TESTING ONLY


// The text that will be sent in the POST request
// This variable is updated by the text field
// whenever its contents are changed.
var textToAdd;

export default function Submit_button(listComponent){

  // handleSubmit is called whenver the submit button is clicked
   const handleSubmit = useCallback((e) => {
    if (textToAdd != ("" || null)){
    // Make HTTP POST request to todo.controller functions.
    // This request uses the textToAdd variable 
      fetch('todo/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "task": textToAdd
        }),

      })
    }
  }) 


  return(  
    
    <Button variant="contained"
      onClick={() => {
        handleSubmit();
        
        //alert('clicked');
        //deleteHandler(textToAdd); // ** DO NOT ENABLE, THIS IS TO TEST DELETING **
      }}
    >
      Submit
    </Button>
  );
}

// updateText is called by the text field to update
// the text that is sent to the database when
// the submit button is pressed
export function updateText(newText){
  textToAdd = newText;
  //console.log("updated text to: ", textToAdd)
}