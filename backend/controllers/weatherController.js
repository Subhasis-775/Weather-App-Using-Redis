import { getCache,setCache } from "../utils/cache.js";
import fetchWeatherApi from "../services/weatherService.js";
const normalize=(raw)=>{
    return String(raw || "").trim().toLowerCase().replace(/\s+/g,"-");
}
const getWeather=async(req,res,next)=>{
    try{
    const rawCity=req.params.city;
    if(!rawCity || !rawCity.trim()){
        return res.status(400).json({error:"city parameter required"});
    }
    const cityKey=normalize(rawCity);
    const cached=await getCache(cityKey);
    if(cached){
        return res.json({source:"cache",city:rawCity,data:JSON.parse(cached)});
    }

    const data=await fetchWeatherApi(rawCity);
    const ttl=Number.parseInt(process.env.CACHE_TTL_SECONDS,10)||43200;
    await setCache(cityKey,data,ttl);
    return res.json({source:"api",city:rawCity,data});
}
catch(err){
    return next(err);
}
};
export default getWeather;