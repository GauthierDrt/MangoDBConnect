import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';
import { nextTick } from 'process';
import { UserDocument } from '../interfaces/userInterface';
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    id: {type:Number, required:false},
    firstName: {type:String, required:false},
    lastName: {type:String, required:false},
    password: {type:String, required:true},
    email: {type:String, required:false},

})

userSchema.pre("save", async function(next: any){
    let user = this as UserDocument;

    if(!user.isModified("password")){
        return next()
    }

    let salt = bcrypt.genSalt(config.get<number>("Salt"))
    let hash = bcrypt.hash(user.password, salt)

    user.password = hash;
})