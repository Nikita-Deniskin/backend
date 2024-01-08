const router = require("express").Router();
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

router.get("/items", getItems);
router.get("/items/:item_id", getItem);
router.post("/items", createItem);
router.patch("/items/:item_id", updateItem);
router.delete("/items/:item_id", deleteItem);

module.exports = router;