# Todo-App
I am still working on it as my building had a power outage today, but I have most of the functionality completed. See below for setup instructions


Follow these steps to run the web app:

1. Ensure node.js is installed on your operating system
2. Install MongoDB (along with MongoDB compass if you would like to manually edit the database)
4. Clone repo and open a shell within the Todo-App folder
5. Install dependencies by running the following command: yarn install
6. Run the local server using yarn start or yarn start:dev if you would like it to restart on file changes
7. Open a browser and navigate to http://localhost:3000/
8. Enter text into the text field, and you should see them appear in a list below. They will also be added to the database
9. Click on the delete buttons to remove items from the database. The list should update automatically.



note: There is a known bug where the last letter of the input field does not get detected. I am currently working on this, but it seems that this is the only issue currently.
