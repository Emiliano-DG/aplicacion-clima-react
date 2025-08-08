import { useState } from "react";
import { useClima } from "./hooks/useClima";

export const WeatherApp = () => {
  const [ciudad, setCiudad] = useState("");
  const { dataClima, error, fetchClima } = useClima();

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima(ciudad);
  };

  return (
    <div className="contenedor">
      <h1>Aplicacion del clima</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperatura: {parseInt(dataClima.main.temp)}ºC</p>
          <p>Description: {dataClima.weather[0].description.toUpperCase()}</p>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
          />
        </div>
      )}
    </div>
  );
};
