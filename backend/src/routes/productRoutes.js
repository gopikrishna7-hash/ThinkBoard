import express from "express";
import { getAllProduct,createProduct,updatedProduct,deleteProduct } from "../controllers/productcontroller.js";
const router=express.Router();
router.get("/",getAllProduct);
router.post("/:id",createProduct);
router.put("/:id",updatedProduct);
router.delete("/:id",deleteProduct);

export default router;