import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    product: {
        type: String,
        require: true
    }
})

export default mongoose.model("User",userSchema);
