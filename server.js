const express = require("express");
const joi = require("joi");
const placesDetails = require("./routers/places");
const bodyParser = require("body-parser");
const hotelDetails = require("./routers/hotels");
const todoDetails = require("./routers/todos");

const app = express();
// const schema = {
//   name: joi
//     .string()
//     .min(3)
//     .required(),
//   password: joi
//     .string()
//     .min(6)
//     .required()
// };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/places", placesDetails);
app.use("/hotels", hotelDetails);
app.use("/todos", todoDetails);
// app.get("/", (req, res) => {
//   res.send({ message: { data: { name: "himtrek" } } });
// });
// app.post("/register", (req, res) => {
//          const validation = joi.validate(schema, req.body)
//          if(validation){
//                    res.send({status:200, message:{'Login sucessfully!'}})
//          }
// });
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running in ${port}`));
