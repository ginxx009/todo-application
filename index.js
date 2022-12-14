const tasks = require("./Routes/tasks");
const connection = require('./database');
const cors = require('cors');
const express = require('express');
const app = express();
require("dotenv").config();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port} ........`));