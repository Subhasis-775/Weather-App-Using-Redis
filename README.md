# 🌤 Weather App

A modern **full-stack Weather App** built with **React** (frontend) and **Node.js/Express** (backend).  
It fetches real-time weather data from the **Visual Crossing Weather API**, displays **temperature, humidity, and conditions**, and uses **Redis caching** for faster responses.  

---

## **Features**
- Fetch real-time weather by city  
- Clean and responsive UI with **Tailwind CSS**  
- Loading and error handling states  
- Redis in-memory caching with **12-hour expiration**  
- Easy configuration via environment variables  
- Backend-ready for deployment  




## **Technologies Used**
- **Frontend:** React, Tailwind CSS, Axios  
- **Backend:** Node.js, Express, Redis  
- **External API:** Visual Crossing Weather API  

---

## **Getting Started**

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/Subhasis-775/Weather-App-Using-Redis.git 
cd weather-app

setup backend
cd backend
npm install
cp .env.example .env
# Fill in your WEATHER_API_KEY in .env
npm run dev



setup Frontend
cd frontend
npm install
npm start

Environment Variables
.env.example
PORT=5000
WEATHER_API_KEY=YOUR_API_KEY_HERE
WEATHER_API_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
REDIS_URL=redis://localhost:6379
CACHE_TTL_SECONDS=43200


Folder Structure
weather-app/
├─ backend/
│  ├─ controllers/
│  ├─ routes/
│  ├─ services/
│  ├─ server.js
│  └─ package.json
├─ frontend/
│  ├─ src/
│  ├─ public/
│  └─ package.json
├─ .gitignore
├─ .env.example
└─ README.md

Usage

Enter a city name in the input box.

Click Get Weather.

View temperature, humidity, and conditions in a clean UI.

License

This project is open-source under the MIT License.