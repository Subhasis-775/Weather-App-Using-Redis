import { useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>
      
      <div className="flex mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-3 rounded-l-lg border-none focus:outline-none text-black w-64"
        />
        <button
          onClick={getWeather}
          className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-r-lg font-bold text-black"
        >
          Get Weather
        </button>
      </div>

      {loading && <p className="text-white font-semibold mb-4">Loading...</p>}
      {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

      {weather && (
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.city}</h2>
          <p className="text-lg mb-2">Source: {weather.source}</p>
          <div className="text-left">
            <p><strong>Temperature:</strong> {weather.data.days[0].temp} °C</p>
            <p><strong>Humidity:</strong> {weather.data.days[0].humidity} %</p>
            <p><strong>Condition:</strong> {weather.data.days[0].conditions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
