import express from "express";

const server = express();

const PORT = 3500;

server.get("/", (req, res) => {
    res.end("Welcome to the Books store e-commerce application");
})

server.listen(PORT, () => {
    console.log("The server is listening on the port 3500");
})