const express = require("express");
// const router = express.Router();
const { Image } = require("../models/images");

module.exports = {
  findAll: async (req, res) => {
    const images = await Image.findAll();
    res.json(images);
  },
  findOne: async (req, res) => {
    const image = await Image.findByPk(req.params.id)
    if (image) {
      res.json(image);
    } else {
      res.status(404).send("Image not found");
    }
  },
  create: async (req, res) => {
    const newImage = await Image.create(req.body);
    res.json(newImage);
  },
  update: async (req, res) => {
    const updatedImage = await Image.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedImage[0] === 0) {
      res.status(404).send("Image not found");
    } else {
      res.json(updatedImage);
    }
  },
  remove: async (req, res) => {
    const deletedImage = await Image.destroy({
      where: { id: req.params.id },
    });
    if (deletedImage === 0) {
      res.status(404).send("Image not found");
    } else {
      res.status(204).send();
    }
  },
};

// module.exports = router;
