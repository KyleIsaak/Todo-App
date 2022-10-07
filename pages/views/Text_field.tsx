import * as React from 'react';
import TextField from '@mui/material/TextField';

import { updateText } from './Submit_button';


export default function Text_field() {

  // creates a name variable with an empty string
  // that gets updated whenever the text is changed
  // whenever the text is changed, it updates the text that
  // the submit button will use for its POST fetch call

  const [name, setName] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("input box updated")
    setName(event.target.value);
    updateText(name)
  };

  // Render textfield using the name variable and the handleChange function
  return (
    <TextField 
      id="input" 
      label="Enter item here" 
      variant="outlined" 
      value={name}
      onChange={handleChange}
    />

  );
}
