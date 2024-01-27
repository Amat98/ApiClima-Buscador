import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";
import SearchName from "./components/SearchName";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  // Función para actualizar los datos de clima
  const updateWeatherData = (data) => {
    setWeatherInfo(data);
  };

  // Función para obtener la ubicación del usuario y cargar los datos del clima inicial
  const getWeatherByLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const API_KEY = "a749db7cc43457673f4c52f9a250036f";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        try {
          const response = await axios.get(url);
          const data = response.data;
          updateWeatherData(data);
        } catch (error) {
          console.error(error);
        }
      });
    }
  };

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
    <main className="bg-black h-screen bg-[url(/bg-3.jpg)] bg-cover bg-center text-white font-lato flex justify-center items-center flex-col gap-2">
      <SearchName onUpdateWeatherData={updateWeatherData} />
      {weatherInfo ? <Weather weatherInfo={weatherInfo} /> : (
        <span className="font-bold text-4xl">Cargando...</span>
      )}
    </main>
  );
}

export default App;
