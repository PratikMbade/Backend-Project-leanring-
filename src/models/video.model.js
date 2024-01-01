import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true, //eliminate leading and trailing whitespaces
      required: true,
      index: true,
      lowercae:true,
    },
    email: {
      type: String,
      unique: true,
      required: true,

    },
    fullName: {
      type: String,
      index: true,
      lowercae:true,
    },
    avatar: {
      type: String,
      required:true,
    },
    coverImage:{
        type:String,
        required:true,
        
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
