const Quote = require('../models/Quote');
const { v4: uuid } = require('uuid')

module.exports = {
    async getAllQuotes(req, res) {
        try {
            const quotes = await Quote.find();
            return res.status(200).json({ quotes })
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    },


    async createQuote(req, res) {        
        const { quote, character } = req.body

        if(!quote || !character) {
            return res.status(400).json({ error: "Missing quote or character" })                
        }  

        const newQuote = new Quote({ _id: uuid(), quote, character })

        try {   
            await newQuote.save();
            return res.status(201).json({ message: "Quote created successfully" })
        } 
        catch(err) {
            return res.status(400).json({ error: err.message })   
        } 
       
    },


    async getQuote(req, res) {
        const _id = req.params;   
        
        if(!_id) {
            return res.status(400).json({ error: "Invalid ID" })                
        } 

        const quote = await Quote.findById(_id);
       
        try {            
            return res.status(200).json({ quote });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    


    async updateQuote(req, res) {
        const { _id, quote, character } = req.body
        
        if(!quote && !character) {
            return res.status(400).json({ error: "You need to inform a new Quote and its Character" })                
        } 

        await Quote.findByIdAndUpdate(_id, { quote, character });

        try {
            return res.status(200).json({ message: "Quote updated successfully" });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },


    async deleteQuote(req, res) {
        const _id  = req.params;

        if(!_id) {
            return res.status(400).json({ error: "Invalid ID" })                
        } 
  
        await Quote.findOneAndDelete(_id)    

        try {            
            return res.status(200).json({ message: "Quote deleted successfully" });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

};



