const { message, statusCode } = require('../utils/message');
const studentServices = require('../services/studentServices');


const addStudent = async(req,res) =>{
    if(!req.body.name){
        return res.status(statusCode.badRequest).json({ message:"name is require", status: statusCode.badRequest });
    }
    if(!req.body.email){
        return res.status(statusCode.badRequest).json({ message:"email is require", status: statusCode.badRequest });
    }
    if(!req.body.mobile){
        return res.status(statusCode.badRequest).json({ message:"mobile is require", status: statusCode.badRequest });
    }
    if(!req.body.address){
        return res.status(statusCode.badRequest).json({ message:"address is require", status: statusCode.badRequest });
    }
    
    if(!req.body.education){
        return res.status(statusCode.badRequest).json({ message:"education is require", status: statusCode.badRequest });
    }
    if(!req.body.source){
        return res.status(statusCode.badRequest).json({ message:"source is require", status: statusCode.badRequest });
    }
      
    try{
     const datas = {
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile, 
        address:req.body.address,
        education:req.body.education, 
        source:req.body.source
        // createdAt:, 
        // updatedAt:
    }
    const result = await studentServices.createstudent(datas);
    return res.status(statusCode.success).json({ message: "save student details", status: statusCode.success, data: result });

}catch(err){
    // console.log(err, 'error');
    return res.status(statusCode.badRequest).json({ message: err, status: statusCode.badRequest });
    }


}


module.exports = { 
    addStudent
}
