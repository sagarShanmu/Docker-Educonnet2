const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.json({
    message: "you are visiting root"
    });
});

app.get("/singin", (req, res) => {

    res.json({
    message: "you are visiting signin"
    });
});

app.get("/login", (req, res) => {

    res.json({
    message: "you are visiting login"
    });
});

app.listen(8000, () => {
    console.log("App is running at 8000")

} );