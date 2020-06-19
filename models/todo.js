const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    card: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const TODO = mongoose.model("TODO", todoSchema);

module.exports = TODO;