import mongoose from 'mongoose';
import config from 'config';

function connect(){
    mongoose.connect("mongodb://localhost:27017/Json")
    console.log("Connected to mongoDB")
}

export default connect;