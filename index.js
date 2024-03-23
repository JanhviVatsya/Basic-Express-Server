import express from "express";

const app= express();
const port=3000;

app.get("/",(req, res) => {
    res.send("Hello world, Home Page");
});

app.get("/contact",(req, res) => {
    res.send("Hello world, Contact Page");
});

app.get("/About",(req, res) => {
    res.send("Hello world, About Page");
});

app.listen(port, () => {
    console.log("Server is running, happy coding!");
});