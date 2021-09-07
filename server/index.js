const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/js", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.js"));
});

app.get("/css", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.css"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index2.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index3.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index4.html"));
});

app.get("/css", function (req, res) {
    res.sendFile(path.join(__dirname, "../index2.css"));
});

app.get("/css", function (req, res) {
    res.sendFile(path.join(__dirname, "../index3.css"));
});

app.get("/css", function (req, res) {
    res.sendFile(path.join(__dirname, "../index4.css"));
});

const port = process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
