'use strict';

var mysqlConn = require("../config/MySQLdatabase");

exports.updateUserKudos = (id, operation) => {
    let sql = "UPDATE user\
               SET kudosQTY = (kudosQTY " + operation + " 1) \
               WHERE id = ?;";
               
    let params = [id];

    mysqlConn.query(sql, params, function (error, rows, fields) {
        if (error) 
            return console.log(err);
        else 
            return console.log(" [x] kudosQTY updated for id: %d", id);
    });    
};