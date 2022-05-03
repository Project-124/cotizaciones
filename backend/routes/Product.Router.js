
const express  = require("express");
const { ProductService } = require("../services/Product.Services");
const router = express.Router();
const product = new ProductService();

router.post("/register", product.create);

router.delete("/delete/:id", product.delete);

router.get("/get/:id", product.get);

router.get("/get/:offset/:limit", product.getAll);

router.put("/update", product.update);

module.exports = router;