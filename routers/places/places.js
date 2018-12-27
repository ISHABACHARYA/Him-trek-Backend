const express = require("express");
const placeDetails = require("../../models/");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(placeDetails);
});

router.get("/:location", (req, res) => {
  const locationFound = placeDetails.find(place => {
    if (place.location == req.params.location) return place;
  });
  console.log(req.params);

  if (locationFound) {
    return res.send(locationFound).status(200);
  }
  return res.send("Location Not Found !").status(400);
});
module.exports = router;
