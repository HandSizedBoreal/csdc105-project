import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  deleteCustomer,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
router.delete('/customers/:id', deleteCustomer);

export default router;
