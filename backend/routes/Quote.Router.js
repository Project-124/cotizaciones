
const express  = require("express");
const { QuoteService } = require("../services/Quota.Services");
const router = express.Router();
const quote = new QuoteService();

router.post("/register", quote.create);

router.delete("/delete/:id", quote.delete);

router.get("/get/:id", quote.get);

router.get("/get/:offset/:limit", quote.getAll);

router.put("/update", quote.update);

module.exports = router;