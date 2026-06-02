import ratelimit from "../config/upstach.js";

const rateLimiter = async (req,res,next)=>{
    try{
        //my-limit is id of req
        const {success} =await ratelimit.limit("my-limit-key");
        
        if (!success){
            return res.status(429).json({
                message:"Too many requests,please try again"
            })
        }
        next() 

    }catch(error){
        console.log("Rate limit error",error);
        next(error);
    }
}

export default rateLimiter;