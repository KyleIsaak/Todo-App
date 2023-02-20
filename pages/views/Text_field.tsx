// Core
import * as React from "react";

// MUI
import TextField from "@mui/material/TextField";

export default function Text_field() {
  // Creates a name variable with an empty string that gets updated whenever the text is changed
  // This name variable is then accessed by the submit and edit buttons to send POST and PATCH requests

  const [name, setName] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
