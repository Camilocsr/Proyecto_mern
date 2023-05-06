const mongoose = require('mongoose');
const Schema = mongoose.Schema;// este objeto nos ayuda a definir nuestros modelos de mongo.

const ProductSchema = Schema({//lo que va a requerir nuestra base de datos.
  name:String,//nombre
  size:Number,//cantidad
  unitaryPrice:Number,//precio por unidad
  imgUrl:String,//ubicacion de nuestra img en nuestro server.
  description:String//descripcion
},{
  timestamps:true//esto nos proporciona la fecha y hora de la insercion de los datos a la db y la ultima edicion a ellos
})

module.exports = mongoose.model('Products',ProductSchema);