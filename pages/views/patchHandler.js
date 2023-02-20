export default async function patchHandler(ID, newText) {
  if (newText) {
      async function makeRequest(ID, newText) {
        const path1 = "http://localhost:3000/todo/todo/";
        const newPath = path1 + ID;

        //console.log("Path: ", newPath)
        //console.log(ID)

        // Make HTTP DELETE request to todo.controller functions
        fetch(newPath, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            task: newText,
          }),
        });
      }

      makeRequest(ID, newText);

      // console.log("*** Item ", ID, " updated! ***"); // Testing
      return;
    }
  }
