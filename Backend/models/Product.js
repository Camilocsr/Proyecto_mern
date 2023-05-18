const mongoose = require('mongoose');
const Schema = mongoose.Schema;// este objeto nos ayuda a definir nuestros modelos de mongo.

const ProductSchema = Schema({//lo que va a requerir nuestra base de datos.
  name:{
    type:String,
    required: true
  },//nombre
  size:{
    type:Number,
    required:true
  },//cantidad
  unitaryPrice:{
    type:Number,
    required:true
  },//precio por unidad
  categoria:{
    type:String,
    required:true
  },
  imgUrl:{
    type:String,
    required:true
  },//ubicacion de nuestra img en nuestro server.
  description:{
    type:String,
    required:true
  }//descripcion
},{
  timestamps:true//esto nos proporciona la fecha y hora de la insercion de los datos a la db y la ultima edicion a ellos
})

module.exports = mongoose.model('Products',ProductSchema);