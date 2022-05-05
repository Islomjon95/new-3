const mongoose = require("mongoose")
const schema = mongoose.Schema

const Test = new schema({
        qiyinlik_darajasi:{
            type:Number,
            required:true


        },
        test_savoli:{
            type:String,
            required:true
        }
})

module.exports = mongoose.model("Test" , Test)