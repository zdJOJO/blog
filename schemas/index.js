const mongoose = require("mongoose");

module.exports = {
  studentSchema: new mongoose.Schema({
    name: String,
    age: Number,
    gender: Number, // 0-男  1-女
    height: Number, // 单位cm
    weight: Number //单位千克
  })
};