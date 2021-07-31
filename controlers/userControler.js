import UserInfo from "./models/userModel";

class UserControler {
    //function to register a user

    static signupUser = async(req,res)=>{
        const user = await UserInfo.create(req.body);

        if(!user){
            return res.status(400).json({
                status:400,
                message:"failed to register"
            })
        }

        return res.status(200).json({
            status:200,
            message:"success",
            data:user

        })

        }
        static getAllUser = async(req,res)=>{
            const users = await UserInfo.find();
    
            if(!users){
                return res.status(400).json({
                    status:400,
                    message:"failed to get all users"
                })
            }
    
            return res.status(200).json({
                status:200,
                message:"success",
                data:users
    
            })
    
            }

            static getOneUser = async(req,res)=>{
                const user = await UserInfo.findById(req.params.id);
        
                if(!user){
                    return res.status(400).json({
                        status:400,
                        message:"failed to get one user"
                    })
                }
        
                return res.status(200).json({
                    status:200,
                    message:"success",
                    data:user
        
                })
        
                }

                static updateOneUser = async(req,res)=>{
                    const user = await UserInfo.findByIdAndUpdate(req.params.id,req.body);
            
                    if(!user){
                        return res.status(400).json({
                            status:400,
                            message:"failed to update a user"
                        })
                    }
                        const update = await UserInfo.findById (req.params.id);
                    return res.status(200).json({
                        status:200,
                        message:"success",
                        data:update
            
                    })
            
                    }

                    static deleteOneUser = async(req,res)=>{
                        const user = await UserInfo.findByIdAndDelete(req.params.id);
                
                        if(!user){
                            return res.status(400).json({
                                status:400,
                                message:"failed to delete one user"
                            })
                        }
    
                        return res.status(200).json({
                            status:200,
                            message:"success",
                            data:user
                
                        })
                
                        }
    

    }
       
export default UserControler;
