// Core
import * as React from "react";
import { useCallback } from "react";

// MUI
import Button from "@mui/material/Button";


export default function Submit_button() {
  const handleSubmit = useCallback((newText) => {
    // If input isn't empty, make HTTP POST request to todo.controller functions.
    if (newText) {
      fetch("todo/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: newText,
        }),
      });
    }
  });

  return (
    <Button
      variant="contained"
      onClick={() => {
        handleSubmit(document.getElementById("input").value);
      }}
    >
      Submit
    </Button>
  );
}
