import { useState } from "react";

export const useClima = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const urlBase = `https://api.openweathermap.org/data/2.5/weather`;

  const [dataClima, setDataClima] = useState(null);
  const [error, setError] = useState(null);

  const fetchClima = async (ciudad) => {
    setError(null);
    setDataClima(null);
    try {
      const response = await fetch(
        `${urlBase}?q=${ciudad}&appid=${api_key}&units=metric&lang=es`
      );
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      setError(error.message);
    }
  };
  return {
    dataClima,
    error,
    fetchClima,
  };
};
