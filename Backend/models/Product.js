const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name:{
    type:String,
    required: true
  },
  size:{
    type:Number,
    required:true
  },
  unitaryPrice:{
    type:Number,
    required:true
  },
  categoria:{
    type:String,
    required:true
  },
  color:{
    type:String,
    required:true
  },
  imgUrl:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Products',ProductSchema);