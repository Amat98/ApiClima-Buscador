import axios from "axios";
import { useEffect, useState } from "react";

const SearchName = ({ onUpdateWeatherData }) => {
  const handleName = async (e) => {
    e.preventDefault();
    const cityName = e.target.nameCountry.value;
    const API_KEY = "a749db7cc43457673f4c52f9a250036f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    

    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data)
      
      // Llama a la función onUpdateWeatherData para actualizar los datos en App.jsx
      onUpdateWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="top-[20px] absolute max-w-[400px] ">
      <form onSubmit={handleName} className="flex text-2xl justify-center">
        <input
          className="text-white p-2 bg-black/50 w-[70%] rounded-l-lg"
          id="nameCountry"
          placeholder="Insert country..."
          type="text"
          autoComplete="off"
        />
        <button className="bg-black p-2 hover:scale-110 transition-transform rounded-r-lg">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchName;