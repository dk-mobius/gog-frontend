Hi there! Thank you for taking the time to review this solution to the provided challenge.

This prototype is up and running here: https://gog-test.netlify.com/

Devin Kendall | devin@dkportfolio.com

#Stack

* The UI is running on React. 
* Express JS is powering the backened and can be found here: https://github.com/dk-mobius/gog-backend
* Express is connecting to a MongoDB database to retrieve product info, retrieve user, and store user session.

#Notes

* Used all function components thanks to React's new hooks. State management is being handled by React's useContext hook. 
* Used BEM as a naming convention. 
* Placeholder elements will display until child components mount.
* Serving images from a CDN.

#Local

If you wish to run the front end locally, make sure you have nodejs installed on your machine: https://nodejs.org/ 

Then just clone the repo then:

``cd gog-frontend``

``npm install``

``npm run start``

This will still utilize the express backend on heroku.

