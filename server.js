const express = require("express");

const fs = require("fs");
const app = express();
const routes = require("./routes");

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3001);
