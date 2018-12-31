const placesDetails = require("../routers/places");
const bodyParser = require("body-parser");
const hotelDetails = require("../routers/hotels");
const todoDetails = require("../routers/todos");
const guideDetails = require("../routers/guide");

function router(app) {
  app.use("/places", placesDetails);
  app.use("/hotels", hotelDetails);
  app.use("/todos", todoDetails);
  app.use("/guides", guideDetails);
}

module.exports = router;
