import  Mongoose  from "mongoose";

const UserSchema = new Mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    age:Number,
});

const UserInfo = Mongoose.model('User',UserSchema);

export default UserInfo;
