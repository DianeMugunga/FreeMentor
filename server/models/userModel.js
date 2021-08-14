import  Mongoose  from "mongoose";

const UserSchema = new Mongoose.Schema({
    firstName:{type:String,required:[true,"firstName is required"]},
    lastName:{type:String,required:[true,"lastName is required"]},
    email:{type:String,Unique:true},
    password:{type:String,default:["12345"]},
    phone:String,
    gender:{type:String,
        enum:["male","female"]
    },
    age:Number,
    role:{type:String,
        enum:["user","admin","mentor"],
        default:"user"
    }  



}); 

const UserInfo = Mongoose.model('User',UserSchema);

export default UserInfo;
