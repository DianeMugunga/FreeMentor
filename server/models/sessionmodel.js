import  mongoose  from "mongoose";

const sessionSchema = new mongoose.Schema({
    Title:String,
    Description:String,
    User:String,
    Mentor:String,
    Timetostart:String,
    Timetoend:String,
    Status:{type:String,
        enum:["Approved","pending","Declined"],
        default:"pending",
    },
    
});

const sessionInfo = mongoose.model('session',sessionSchema);

export default sessionInfo;
