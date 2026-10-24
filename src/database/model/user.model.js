import mongoose from "mongoose";
   

const userSchema = new mongoose.Schema({

name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
phone:{
   type: String,
    
},
password: {
    type: String,
    required: true,
},
coverImage: {
    type: String,
},
profilePicture: {
    type: String,
},
uniqueAccName:{
    type: String,
    required: true,
    unique: true,
},
role: {
    type: Number,
    default: 0, // 0 for user, 1 for admin
},
isVerified: {
    type: Boolean,
    default: false
},
otp: {
    type: String,
},
isDeleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }


})

const userModel = mongoose.model("users", userSchema);

export default userModel;