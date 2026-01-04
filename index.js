import express from "express";
import ProductController from "./src/controller/products.controller.js";
import path from "path";

const server = express();

const PORT = 3500;

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// server.get("/", (req, res) => {
//     res.end("Welcome to the Books store e-commerce application");
// })

//Creating an instance of the product controller
const productController = new ProductController()

server.get("/", productController.getProducts);

server.use(express.static("src/views"));

server.listen(PORT, () => {
    console.log("The server is listening on the port 3500");
})