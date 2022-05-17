const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const usersSchema = new Schema({

  num_user: {
    type: Number,
    unique: true,
    required: [true, "Número de Funcionário"]
  },
  nome_user: {
    type: String,
    required: [true, "Nome do Funcionário"]
  },
  password_user:{
    type:String,
    required: [true, "Password necessária"]
  },
  morada_user: {
    type: String,
    default: null
  },
  data_nascimento_user: {
    type: String,
    default: null
  },
  tele_user: {
    type: String,
    required: [true, "Contacto necessário"],
    default: null
  },
  email_user: {
    type: String,
    default: null
  },
  is_admin:{
    type: Boolean,
    default: false
  }
});
module.exports = Mongoose.model("User", usersSchema);