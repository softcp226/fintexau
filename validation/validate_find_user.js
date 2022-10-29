const Joi=require("joi")

const validate_find_user=(req)=>{
const schema = Joi.object({
  // admin:Joi.string().required().max(1000),
   user:Joi.string().required().max(1000)
  });

  const result = schema.validate({
    // admin:req.admin,
    user:req.user
  });
  if (result.error) return result.error.message;
  return true;
}
module.exports=validate_find_user