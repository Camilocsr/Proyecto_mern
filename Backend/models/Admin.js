const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdmintSchema = Schema({
  nameAdmin:{
    type:String,
    required: true
  },
  paswordAdmin:{
    type:String,
    required:true
  },
  emailAdmin:{
    type:String,
    required:true
  },
  rolAdmin:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Admin',AdmintSchema);