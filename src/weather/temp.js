// http://api.openweathermap.org/data/2.5/weather?q=sukkur&appid=ef53c2134a33a6798753c1c3ff17d79c
import React from 'react';
import './style.css';

const Temp = () => {
  return (
    <>
      <div className="wrap">
         <div className="search">
            <input 
               type="search"
               placeholder='search...'
               autoFocus
               id='search'
               className='searchTerm'
            />
            <button className="searchButton" type='button'>
               Search
            </button>
         </div>
      </div>

      {/* Tem Card */}
      <article className="widget">
         <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
         </div>

         <div className="weatherInfo">
            <div className="temperature">
               <span>30.2&deg;</span>
            </div>

            <div className="description">
               <div className="weatherCondition">Sunny</div>
               <div className="place">Sukkur, Pakistan</div>
            </div>
         </div>

         <div className="date"> { new Date().toLocaleString() } </div>

         {/* 4 column sec */}
         <div className="extra-temp">
            <div className="temp-info-minmax">
               <div className="two-sided-section">
                  <p><i className={"wi wi-sunset"}></i></p>
                  <p className="extra-info-leftside"> 19:19 PM <br /> Sunset</p>
               </div>
               <div className="two-sided-section">
                  <p><i className={"wi wi-humidity"}></i></p>
                  <p className="extra-info-leftside"> 19:19 PM <br /> Humidity</p>
               </div>
            </div>

            <div className="weather-extra-info">
               <div className="two-sided-section">
                  <p><i className={"wi wi-rain"}></i></p>
                  <p className="extra-info-leftside"> 19:19 PM <br /> Pressure</p>
               </div>
               <div className="two-sided-section">
                  <p><i className={"wi wi-strong-wind"}></i></p>
                  <p className="extra-info-leftside"> 19:19 PM <br /> Speed</p>
               </div>
            </div>
         </div>
      </article>
    </>
  )
}

export default Temp;
