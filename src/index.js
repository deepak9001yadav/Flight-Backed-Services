const express = require("express");

const bodyParser = require("body-paerser");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    // create Express Object.

    const app = express();

    //these below is middlewares of node js.


    app.use(body-bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        
    });
};

// Call the function to start the server
setupAndStartServer();
 