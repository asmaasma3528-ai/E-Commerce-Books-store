import path from "path";
import ProductModel from "../model/products.model.js";

export default class ProductController {
  getProducts(req, res) {
    const products = ProductModel.get();
    console.log(products);
   
     res.render("products", {products:products});

    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }
}
