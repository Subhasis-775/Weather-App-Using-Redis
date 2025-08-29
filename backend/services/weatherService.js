import axios from "axios";
const fetchWeatherApi=async(city)=>{
    const base=process.env.WEATHER_API_URL;
    const key=process.env.WEATHER_API_KEY;

if(!base || !key){
    throw new Error("weather api not configured");
}
const url=`${base}/${encodeURIComponent(city)}?unitGroup=metric&key=${encodeURIComponent(key)}&contentType=json`;

try{
    const res=await axios.get(url,{timeout:10000});
    return res.data;
}catch(err){
    console.error(`error fetching api`);
    // res.status(500).json({message:err.message});
    throw err;
}
};
export default fetchWeatherApi;