const mongoose = require('mongoose');
const Schema = mongoose.Schema;// este objeto nos ayuda a definir nuestros modelos de mongo.

const AdmintSchema = Schema({//lo que va a requerir nuestra base de datos.
  nameAdmin:{
    type:String,
    required: true
  },//nombre
  paswordAdmin:{
    type:String,
    required:true
  }
},{
  timestamps:true//esto nos proporciona la fecha y hora de la insercion de los datos a la db y la ultima edicion a ellos
})

module.exports = mongoose.model('Admin',AdmintSchema);