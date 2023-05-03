const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
require("./config/database").connect();

//rote import and mount
const user = require("./routes/user")
app.use("/api/v1",user)

//activation
app.listen(PORT,()=>{
  console.log(`App is listening at ${PORT}`);
})


//I added this code
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
