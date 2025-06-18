

import ratelimit from "../config/Upstash.js";

const ratelimiter =async (req,res,next)=>{
try{
    const {success}= await ratelimit.limit("my-key")
    if(!success){
        res.status(429).json("too many request");
    }
    next();
}
catch(error){
    console.log(error);
    next(error);
}
}

export default ratelimiter