

const path = require('path');
const express = require('express');

const app = express();


//Body parser
app.use(express.json());

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, console.log(`server 🏃 on ${PORT}`));
