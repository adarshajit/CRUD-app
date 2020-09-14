const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addSchema = new Schema({
    ename :{
        type: String,
        required : true,
        unique: true,
        trim : true,
        minlength : 3
        },
    },
    {
    timestamps : true,
    }
);

const employee = mongoose.model('employee', addSchema );
module.exports = employee;