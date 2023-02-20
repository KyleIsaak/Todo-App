export default async function patchHandler(ID, newText) {
  if (newText) {
      async function makeRequest(ID, newText) {
        const path1 = "http://localhost:3000/todo/todo/";
        const newPath = path1 + ID;

        // Make HTTP PATCH request to todo.controller functions
        fetch(newPath, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            task: newText,
          }),
        });
      }

      makeRequest(ID, newText);

      return;
    }
  }
