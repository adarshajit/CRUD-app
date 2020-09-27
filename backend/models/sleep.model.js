const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepSchema = new Schema({
    duration :{type: Number}
},{
    timestamps : true
  })

const Sleep = mongoose.model('Sleep', sleepSchema);
module.exports = Sleep;