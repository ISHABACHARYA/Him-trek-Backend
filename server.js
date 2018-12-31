const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./startups/router")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running in ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("photo"));
