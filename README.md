Hi there! Thank you for taking the time to review this solution to the provided challenge.

This prototype is up and running here: https://gog-test.netlify.com/

My goal is to make clean reusable code that can be expanded upon.
For this reason I chose to build with React and use a BEM style naming convention in components.
The front end is completely decoupled from the backend allowing for the rapid development.
Please reach out if you have any questions.

Thanks! 

Devin Kendall | devin@dkportfolio.com

# Stack

* The UI is running on React. 
* Express JS is powering the backened and can be found here: https://github.com/dk-mobius/gog-backend
* Express is connecting to a MongoDB database to retrieve product info, retrieve user, and store user session.

# Notes

* Used all function components thanks to React's new hooks. State management is being handled by React's useContext hook. 
* Sessions are cookied and stored in the DB with the cart items
* Used BEM naming convention. 
* Placeholder elements will display until child components mount.
* Serving images from a CDN.

# Local

If you wish to run the front end locally, make sure you have nodejs installed on your machine: https://nodejs.org/ 

Then just clone the repo then:

``cd gog-frontend``

``npm install``

``npm run start``

This will still utilize the express backend on heroku.

