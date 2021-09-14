import  mongoose  from "mongoose";

const sessionSchema = new mongoose.Schema({
    Title:String,
    Description:String,
    User: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    }, 
    mentor: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    Timetostart:Date,
    Timetoend:Date,
    Status:{type:String,
        enum:["Approved","pending","Declined"],
        default:"pending",
    }
});
    sessionSchema.pre(/^find/, function(next){
        this.populate({
            path:"User",
            select:" firstName lastName email phone gender"
        }).populate({
            path:"mentor",
            select:" firstName lastName email phone gender career"
});
    next();
})

const sessionInfo = mongoose.model('session',sessionSchema);

export default sessionInfo;
