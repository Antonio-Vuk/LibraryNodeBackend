const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => console.log("Backend se vrti na portu: " + port));
