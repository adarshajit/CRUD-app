const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema(
    {
        ename : {
            type : String,
            required : true},
        jobtitle :{
            type: String,
            required : true
        },
        hours :{
            type : Number,
            required : true
        },
        date :{
           type: Date,
           required : true
       }
    },
    {
        timestamps : true
    });

const EmpInfo = mongoose.model('Empinfo', infoSchema);
module.exports = EmpInfo;