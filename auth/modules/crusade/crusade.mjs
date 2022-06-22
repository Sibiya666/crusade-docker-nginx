import mongoose  from "mongoose";

const crusadeSchema = new mongoose.Schema({
    name: String
})

export const Crusade = mongoose.model('Crusade', crusadeSchema);
