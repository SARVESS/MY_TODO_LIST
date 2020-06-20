const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    card: {
        type: String
    }
}, {
    timestamps: true
});

const TODO = mongoose.model("TODO", todoSchema);

module.exports = TODO;