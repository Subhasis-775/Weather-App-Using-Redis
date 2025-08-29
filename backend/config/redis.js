import { createClient } from "redis";
const redisUrl=process.env.REDIS_URL||"redis://localhost:6379";
const redisClient=createClient({url:redisUrl});
redisClient.on("error",(err)=>{
    console.error("redis error",err?.message||err);
});

(async()=>{
    try {
        if(!redisClient.isOpen){
            await redisClient.connect();
            console.log(`redis connected successfully`);
        }
    } catch (error) {
        console.err("failed to connect",error?.message||error);
    }
})();
export default redisClient;