import UserInfo from "../models/userModel";
import TokenAuth from "../helpers/TokenAuth";

class UserControler {


    static signinUser = async (req, res) => {

        const { email, password } = req.body;


        const user = await UserInfo.findOne({ email: email, password: password });

        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not exist"

            })
        }


        const token = TokenAuth.tokenGenerator({
            id: user._id,
            email: user.email,
            status: user.status,
            role: user.role
        })
        return res.status(200).json({
            status: 200,
            message: "Success login",
            token:token,
            data: user
        })
    }
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

                    static updateUserRole = async(req,res)=>{
                    const data = await UserInfo.findById(req.params.id);
                    let role;
                    
            
                    if(data.role=="user"){
                        role="mentor";}
                        else (role="user")
                        const user= await UserInfo.findByIdAndUpdate(req.params.id,{role:role});
                        if (!user){
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

                    static getAllMentors = async(req,res)=>{
                        const mentors = await UserInfo.find({role:"mentor"});
                
                        if(!mentors){
                            return res.status(400).json({
                                status:400,
                                message:"failed to get all mentors"
                            })
                        }
                
                        return res.status(200).json({
                            status:200,
                            message:"success",
                            data:mentors
                
                        })
                
                        }

                        
    

    }
       
export default UserControler;
