const {member,memberDetails} = require("../../models");
var jwt = require('jsonwebtoken');
const Login = async (req, res, next) => {
    try {
        const {userId,password} = req.body;
        
        if(!(userId && password)) {
            res.status(400).send("All input is required");
        }
        
        const UserLogIn = await member.findOne({ where:{userLog:userId} });
        const UserDetailsInfo = await memberDetails.findOne({ where:{userId:UserLogIn.id} });
        
        if ((password==UserLogIn.password) && (userId==UserLogIn.userLog)) {
            
            const token = jwt.sign({ 
                    userId: UserLogIn.id, 
                    userName:UserDetailsInfo.name,
                    userEmail:UserLogIn.email, 
                },process.env.TOKEN_KEY,{
                  expiresIn: "10s",
                });
           
            res.status(201).json({userId:UserLogIn.id,userName:UserDetailsInfo.name,userType:UserLogIn.accountType,token});
            
        }else{
            res.status(400).json({
                error: "Invalid Credentials"
            });
        }
    } catch (err) {
        res.status(400).json({
            error: "data do not submit"
        });
    }

}

module.exports = Login;