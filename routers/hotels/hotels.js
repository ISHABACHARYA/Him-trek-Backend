const hotelsDetails = require("../../models/hotelsdb");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(hotelsDetails).status(200);
  return;
});

router.get("/:location", (req, res) => {
  const locationFound = hotelsDetails.find(hotel => {
    if (hotel.location == req.params.location) return hotel;
  });
  console.log(req.params);

  if (locationFound) {
    return res.send(locationFound).status(200);
  }
  return res.send("Location Not Found !").status(400);
});

module.exports = router;
