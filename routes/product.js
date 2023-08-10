const express = require("express");
const server = express();


const router = express.Router();

//server attach this to router a

router
.post("/products", productController.createProduct)
.get("/products", productController.getAllProduct)
.get("/products/:id", productController.getProduct)
.put("/products/:id", productController.replceProduct)
.patch("/products/:id", productController.updateProduct)
.delete("/products/:id", productController.deleteProduct)

exports.router = router