'use strict'

const { accepts } = require('express/lib/request');
const mongoose = require('mongoose')

class DimgoClass {
    constructor(result) {
        this.name = result.name;
        this.img = result.img;
        this.level = result.level;
    }
}

const dimgoSchema = new mongoose.Schema({
    name: String,
    img: String,
    level: String,
})

const dimgomodel = mongoose.model('dimgo', dimgoSchema)

async function creatData() {
    const data1 = new dimgomodel({
        name: "pok",
        img: "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon",
        level: "5",
    })
    const result = await data1.save();
    console.log(result)
}

module.exports = { DimgoClass, dimgomodel }