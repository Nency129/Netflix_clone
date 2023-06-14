const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const useRoutes =require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connected");
});

app.use("/api/user",useRoutes);

app.listen(5000,console.log("server started"));