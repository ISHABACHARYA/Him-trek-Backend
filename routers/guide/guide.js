const express = require("express");
const router = express.Router();
const guideDetails = require("../../models/guidedb");

router.get("/", (req, res) => {
  res.send(guideDetails.status(200));
  return;
});
router.get("/:location", (req, res) => {
  const locationFound = guideDetails.find(guide => {
    if ((guide.location = req.param.location)) return guide;
  });
  console.log(req.param);

  if (locationFound) {
    req.send(locationFound).status(200);
  }
  return res.send("the guide of the given location not found").status(400);
});

module.exports = router;
