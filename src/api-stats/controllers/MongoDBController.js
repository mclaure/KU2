'use strict';

const mongodb = require("../config/MongoDBdatabase");
const Kudos = require("./schema/Kudos");
const mongoose = require("mongoose");

exports.deleteAllKudos = (id) => {
               
    Kudos.deleteMany({idRemitente: id})
        .exec()
        .then(docs => {
            console.log(" [x] Kudos from id: %d where deleted", id);
        })
        .catch(err => {
            console.log(err);
        });
};