const express = require("express");
const todoDetails = require("../../models/tododb");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(todoDetails);
});

router.get("/:location", (req, res) => {
  const locationFound = todoDetails.find(place => {
    if (place.destination === req.params.location) {
      return place;
    }
  });
  if (locationFound) {
    return res.send(locationFound);
  }
});

module.exports = router;
