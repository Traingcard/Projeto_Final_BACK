const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const escalaSchema = new Schema({

  num_user: {
    type: Number,
    unique: true,
    required: [true, "Número do Funcionário"]
  },
  dia_semana:{
      type:String,
      unique: false,
      required: [false, "Dia da semana que não pode trabalhar"],
      default: null
  },
  data:{
      type:Date,
      unique: false,
      required: [false, "Dia em que não pode trabalhar"],
      default: null
  },
  disponivilidade:{
      type:Boolean,
      required: [true, "Número de horas a trabalhar"],
      default: false
  }
})

module.exports = Mongoose.model("escala", escalaSchema);