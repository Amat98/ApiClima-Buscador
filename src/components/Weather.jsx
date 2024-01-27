import { useState } from "react";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(1);
  };

  const kelvinToFare = (tempKelvin) => {
    return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1);
  };

  const handleSwitch = () => {
    setIsCelsius(!isCelsius);
  };

  const result = isCelsius
    ? kelvinToCelsius(weatherInfo?.main.temp)
    : kelvinToFare(weatherInfo?.main.temp);


  return (
    <section className="w-[80%] max-w-[750px] text-center mx-auto">
      <h2 className="text-6xl font-bold mb-5">{weatherInfo?.name}</h2>
      <section className="grid gap-3 md:flex">
        <section className="bg-white/20 backdrop-blur-md rounded-2xl p-2 grid grid-cols-2 items-center md:w-[100%]">
          <h4 className="col-span-2 text-5xl">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-4xl sm:text-5xl">
            {result}°{isCelsius ? "C" : "F"}
          </span>
          <div className="mx-auto w-full">
            <img
              className="w-full"
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        <section className="bg-white/20 backdrop-blur-md rounded-2xl p-6 grid grid-cols-3 items-center text-xl md:grid-cols-1 md:w-[220px]">
          <article className="md:flex justify-center">
            <div className="w-[35px] h-[35px] mx-auto my-auto md:mx-0">
              <img src="/wind.png" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="md:flex justify-center">
            <div className="w-[35px] h-[35px] mx-auto md:mx-0">
              <img className="mx-auto" src="/humidity.png" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="md:flex justify-center">
            <div className="w-[35px] h-[35px] mx-auto md:mx-0">
              <img src="/pressure.png" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>
      <button
        onClick={handleSwitch}
        className="bg-red-600 p-3 text-2xl mt-5 rounded-md hover:scale-105 transition-transform"
      >
        {isCelsius ? "Cambiar a Fahrenheit" : "Cambiar a Celsius"}
      </button>
    </section>
  );
};
export default Weather;
