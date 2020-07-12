

const path = require('path');
const express = require('express');
snippet

const app = express();


//Body parser
app.use(express.json());

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`server 🏃 on ${PORT}`));


// Global error handler
server.on('unhandledRejection' , (err , promise) => {
    console.log(`Error ${err.message}`);

    server.close(() => process.exit(1));
});