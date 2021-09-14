import sessionInfo from "../models/sessionmodel.js";
class sessionControler{
static sessionRegister = async(req,res)=>{
    const session = await sessionInfo.create(req.body);




    if(!session){
        return res.status(400).json({
            status:400,
            message:"failed to register"
        })
    }

    return res.status(200).json({
        status:200,
        message:"success",
        data:session

    })

    }

    static getAllSession = async(req,res)=>{
        const sessions = await sessionInfo.find();

        if(!sessions){
            return res.status(400).json({
                status:400,
                message:"failed to get all users"
            })
        }

        return res.status(200).json({
            status:200,
            message:"success",
            data:sessions

        })

        }

        static getOneSession = async(req,res)=>{
            const session = await sessionInfo.findById(req.params.id);
    
            if(!session){
                return res.status(400).json({
                    status:400,
                    message:"failed to get one user"
                })
            }
    
            return res.status(200).json({
                status:200,
                message:"success",
                data:session
    
            })
    
            }
        

             static updateSessionStatusAproved = async(req,res)=>{
                 
                    const data = await sessionInfo.findById(req.params.id);
                    let Status;
                    
            
                    if(data.Status=="pending"){
                        Status="Approved";}
                        else (Status="pending")
                        const session= await sessionInfo.findByIdAndUpdate(req.params.id,{Status:Status});
                        if (!session){
                             return res.status(400).json({
                            Status:400,
                            message:"failed to update a Session Status"
                            })
                        

                         }
                    const update = await sessionInfo.findById (req.params.id);
                    return res.status(200).json({
                        status:200,
                        message:"success",
                        data:update
            
                    })
            
                    }

                    static updateSessionStatusDeclined = async(req,res)=>{
                    const data = await sessionInfo.findById(req.params.id);
                    let Status;
                    
            
                    if(data.Status=="pending"){
                        Status="Declined";}
                        else (Status="pending")
                        const session= await sessionInfo.findByIdAndUpdate(req.params.id,{Status:Status});
                        if (!session){
                             return res.status(400).json({
                            status:400,
                            message:"failed to update a Session Status"
                            })
                        

                         }
                    const update = await sessionInfo.findById (req.params.id);
                    return res.status(200).json({
                        status:200,
                        message:"success",
                        data:update
            
                    })
            
                    }

                    static updateOneSession = async(req,res)=>{
                        const session = await sessionInfo.findByIdAndUpdate(req.params.id,req.body);
                
                        if(!session){
                            return res.status(400).json({
                                status:400,
                                message:"failed to update a user"
                            })
                        }
                            const update = await sessionInfo.findById (req.params.id);
                        return res.status(200).json({
                            status:200,
                            message:"success",
                            data:update
                
                        })
                
                        }

                        static DeleteOneSession = async(req,res)=>{
                            const session = await sessionInfo.findByIdAndDelete(req.params.id);
                    
                            if(!session){
                                return res.status(400).json({
                                    status:400,
                                    message:"failed to delete one session"
                                })
                            }
        
                            return res.status(200).json({
                                status:200,
                                message:"success",
                                data:session
                    
                            })
                    
                            }
                            static sessionRequest = async (req, res) => {
                                console.log(req.user);
                                req.body.user= req.user.id;
                                const session = await sessionInfo.create(req.body);
                        
                                if (!session) {
                                    return res.statu(400).json({
                                        status: 400,
                                        message: "failed to make request"
                                    })
                                }
                        
                                return res.status(200).json({
                                    statu: 200,
                                    message: "success",
                                    data: session
                                })
                            }
                        }


export default sessionControler;