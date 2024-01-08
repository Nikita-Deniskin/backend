const Item = require("../models/item");

// Получаем список предметов
const getItems = (req, res) => {
  return Item.find({})
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим предмет по ID
const getItem = (req, res) => {
  const { item_id } = req.params;
  return Item.findById(item_id)
    .then((item) => {
      if (!item) {
        response.status(404).send("Item not found");
      } else {
        res.status(200).send(item);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Добавляем предмет
const createItem = (req, res) => {
  return Item.create({ ...req.body })
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем список предметов
const updateItem = (req, res) => {
  const { item_id } = req.params;
  Item.findByIdAndUpdate(item_id, { ...req.body })
    .then((item) => {
      if (!item) {
        response.status(404).send("Item not found");
      } else {
        res.status(200).send(item);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем предмет
const deleteItem = (req, res) => {
  const { item_id } = req.params;
  return Item.findByIdAndDelete(item_id)
    .then((item) => {
      if (!item) {
        response.status(404).send("Item not found");
      } else {
        res.status(200).send("Ready");
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};