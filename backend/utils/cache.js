import redisClient from "../config/redis.js";

export const getCache=async(key)=>{
    try{
    if(!redisClient?.isOpen){
        return null;
    }
    return await redisClient.get(key);
}
catch{
    console.error(`Redis getCache error for key "${key}":`, err?.message || err);
    return null;
}
};

export const setCache=async(key,value,ttlseconds=43200)=>{
    try{
        if(!redisClient.isOpen) return null;
        const payLoad=typeof value==="string"?value:JSON.stringify(value);
        await redisClient.setEx(key,ttlseconds,payLoad);
    }
    catch{
        console.error(`Redis getCache error for key "${key}":`, err?.message || err);
        return null;
    }
};