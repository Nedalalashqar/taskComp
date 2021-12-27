'use strict'
const axios = require('axios')

const { DimgoClass, dimgomodel } = require('../models/digimon.model')

function getAllDataFromAPI(req, res) {
    axios.get(`https://digimon-api.vercel.app/api/digimon`).then(response => {
        const result = response.data.map(item => {
            return new DimgoClass(item)
        })
        res.send(result)
    }).catch(error => console.log('OOPs don\'t data'))
}

function crateDataREQ(req, res) {
    const { name, img, level } = req.body;

    dimgomodel.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            console.log("this also");
        } else {
            let newDigmo = new dimgomodel({
                name: name,
                img: img,
                level: level
            });
            newDigmo.save();
            console.log(newDigmo);
        }
    });
}

function getAllDataREQ(req, res) {
    dimgomodel.find({}, (error, data) => {
        res.send(data)
    })
}

function updateDigmoREQ(req, res) {
    const { id } = req.params;
    const { name, img, level } = req.body;

    dimgomodel.findOne({ _id: id }, (error, item) => {
        item.name = name;
        item.img = img;
        item.level = level
        item.save().then(() =>

            dimgomodel.find({}, (error, item) => {
                res.send(item)
            })
        )
    })
}

function deleteREQ(req, res) {
    const { idx } = req.params;
    dimgomodel.remove({ _id: idx }, (error, data) => {
        dimgomodel.find({}, (error, data) => {
            res.send(data)
        })
    })
}

module.exports = { getAllDataFromAPI, crateDataREQ, getAllDataREQ, updateDigmoREQ, deleteREQ }