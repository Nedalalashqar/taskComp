"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

try {
    mongoose.connect(
        "mongodb://localhost:27017/dataDoc",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => console.log("connected")
    );
} catch (error) {
    console.log("could not connect" + error);
}

app.use(cors());
app.use(express.json());

const {
    getAllDataFromAPI,
    crateDataREQ,
    getAllDataREQ,
    updateDigmoREQ,
    deleteREQ,
} = require("./controllers/digimon.controller");

app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/getData", getAllDataFromAPI);
app.get("/REQ", getAllDataREQ);
app.post("/createREQ", crateDataREQ);
app.put("/updateREQ/:id", updateDigmoREQ);
app.delete("/deleteREQ/:idx", deleteREQ);

app.listen(port, () => console.log(`server is running ob port ${port}`));