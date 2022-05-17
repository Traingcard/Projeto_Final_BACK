const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const escalaSchema = new Schema({

    title: {
      type: String
    },
    
    start:{
      type:String
    }, 
    end:{
      type:String
    },
    allDay:{
      type:Boolean
    },
    disponibilidade:{
      type:Boolean,
      default:true
    }
})

module.exports = Mongoose.model("evento", escalaSchema);