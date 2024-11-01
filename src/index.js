const express = require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    // create Express Object.

    const app = express();
    
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        console.log(process.env)
    });
};

// Call the function to start the server
setupAndStartServer();
 