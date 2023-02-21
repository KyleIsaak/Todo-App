# Todo-App
Still a work in progress, but have most of the functionality is completed. See below for setup instructions


Follow these steps to run the app locally:

1. Ensure node.js is installed on your operating system - https://nodejs.org/en/download/
2. Install MongoDB (along with MongoDB compass if you would like to manually edit the database) - https://www.mongodb.com/docs/manual/installation/
4. Clone repo and open a shell within the Todo-App folder
5. Install yarn via npm with the following command: npm install --global yarn
6. Install dependencies by running the following command: yarn install
7. Run the local server using yarn start or yarn start:dev if you would like it to restart on file changes
8. Open a browser and navigate to http://localhost:3000/
9. Enter todo items into the text field, and you should see them appear in a list below once the submit button has been clicked. They will also be added to the database.
10. Click on the delete buttons to remove items from the database. The list should update automatically.
