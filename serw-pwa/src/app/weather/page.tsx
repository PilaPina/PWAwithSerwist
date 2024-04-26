'use client'
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Link from "next/link";
//import Image from "next/image";

type Location = {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  
  type Condition = {
    text: string;
    icon: string;
    code: number;
  };
  
  type CurrentWeather = {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    wind_dir: string;
    pressure_mb:  number;
    humidity:  number;
    feelslike_c: number;
    // Other data available in weather api
  };
  
  type WeatherData = {
    location: Location;
    current: CurrentWeather;
  };


export default function Weather() {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);



    useEffect(() => {
      const fetchWeather = async () => {
        try {
          // console.log('fetching weather data for city', 'Reykjavik')
          const response = await fetch('/api/weather?city=Reykjavik'); 
          // console.log('Response status:', response.status);

          if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
          
          } else {

          const data = await response.json();
          setWeatherData(data as WeatherData);  //have to assert the type of Data
          console.log('Fetched data:', data);
          
          }

          } catch (error) {
            console.log('Fetching weather failed', error);
            console.error('Error fetching weather data:', error);
        }
    };

    fetchWeather();     
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <main className={styles.main}>
      <div>
        <h1>Current weather</h1>
      </div>    
      {weatherData && (
        <div className={styles.weather}>
          <p>City: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          {/* <Image src={`https:${weatherData.current.condition.icon}`} alt="Weather Icon" /> */}
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
          <p>Wind Direction: {weatherData.current.wind_dir}</p>
          <p>Pressure: {weatherData.current.pressure_mb} mb</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Feels Like: {weatherData.current.feelslike_c}°C</p>
          {/* Add other relevant weather data */}
        </div>
      )}
      {/* <div className={styles.button} onClick={fetchWeather}>Refresh weather</div> */}
      <div className={styles.grid}>
        <Link 
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
          >
          <h2>
              go back <span>-&gt;</span>
          </h2>
          <p>Click here to go back to landing page</p>
        </Link>
      </div>      
    </main>
  );
}
  
