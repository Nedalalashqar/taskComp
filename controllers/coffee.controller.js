'use strict'
const axios = require('axios')

const { DimgoClass, dimgomodel } = require('../models/coffee.model')

// https://digimon-api.vercel.app/api/digimon

// get data
function getAllDataFromAPI(req, res) {
    axios.get(`https://digimon-api.vercel.app/api/digimon`).then(response => {
        const result = response.data.map(item => {
            return new DimgoClass(item)
        })
        res.send(result)
    }).catch(error => console.log('OOPs don\'t data'))
}


//create data FAV
function crateDataFAV(req, res) {
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

//get data FAV 

function getAllDataFAv(req, res) {
    dimgomodel.find({}, (error, data) => {
        res.send(data)
    })
}

//update FAV
function updateDigmoFAv(req, res) {
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

//delete

function deleteFAV(req, res) {
    const { idx } = req.params;
    dimgomodel.remove({ _id: idx }, (error, data) => {
        dimgomodel.find({}, (error, data) => {
            res.send(data)
        })
    })
}


module.exports = { getAllDataFromAPI, crateDataFAV, getAllDataFAv, updateDigmoFAv, deleteFAV }