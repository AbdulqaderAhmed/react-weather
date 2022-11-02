import React, { useEffect, useState } from "react";
import "./assets/css/app.css";
import { APIKEY } from "./api/apiKey";
import { http } from "./api/http";

export default function App() {
  const [data, setData] = useState({} | null);
  const [bg, setBg] = useState(null);
  const [name, setName] = useState("");

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      const res = await http(
        `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${name}`
      );
      setData(res.data);
      setBg(res.data.current.temp_c);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`${
        bg && (bg <= 15 ? "bg-cloudy" : "bg-sunny")
      } ease-linear duration-700 flex flex-col space-y-3 justify-center items-center h-screen`}
    >
      <h1 className="text-4xl text-white font-bold">Weather</h1>
      <div>
        <input
          type="text"
          placeholder="Type city..."
          className="rounded-md p-2 bg-gray-300 text-lg border-gray-800 border-2"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={fetchData}
        />
      </div>
      <div className="flex flex-col space-y-10 items-center bg-gray-700 rounded-md p-5 w-80 h-1/2 text-white">
        <div>
          <h3 className="text-4xl font-bold pt-2">
            {data && data.location.country}
          </h3>
          <p className="text-xl text-center font-small pt-2">
            {data && data.location.name}
          </p>
        </div>
        <div className="pt-10 text-center">
          <h3 className="text-2xl font-medium">
            {data && data.current.condition.text}
          </h3>
          <p className="text-md font-medium">
            {data && data.current.temp_c} &deg;c
          </p>
          <img
            src={data && data.current.condition.icon}
            alt="sunny weather"
            className="w-10 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
