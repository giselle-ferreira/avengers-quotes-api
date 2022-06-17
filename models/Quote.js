const mongoose = require('mongoose')

 const QuoteSchema = new mongoose.Schema({
        _id: {
            type: String,
            required: true,
        },
        quote: { 
            type: String,
            required: true,
        },
        character: {
            type: String,
            required: true
        }
    });



module.exports = mongoose.model("Quote", QuoteSchema);