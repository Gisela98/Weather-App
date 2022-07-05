import React from 'react'
import { useState, useEffect } from 'react'


const Card = ({ latLon, weather   }) => {

  let [Temperature, setTemperature] = useState('°C')
  let [tempInfo, setTempInfo] = useState('°F')
  let [changeTemp, setChangeTemp] = useState(1)
  let [constFarenheit, setConstFarenheit] = useState(0)


  const toggleTemp = () => {

    if (Temperature === '°C') {
      Temperature = setTemperature('°F')
      tempInfo = setTempInfo('°C')
      changeTemp = setChangeTemp(1.8)
      constFarenheit = setConstFarenheit(32)
    }
    else {
      Temperature = setTemperature('°C')
      tempInfo = setTempInfo('°F')
      changeTemp = setChangeTemp(1)
      constFarenheit = setConstFarenheit(0)
    }
  }


  return (
    <div className='container'>
      <div className='country'>
        {weather?.sys.country}, {weather?.name}
      </div>
      <div className='section'>
        <div className='picture'>
          <img className='wheater' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="weather icon" />
        </div>

        <div className='informacion'>
          <div className='car'>
            <div className='temperature'>{(weather?.main.temp * changeTemp + constFarenheit).toFixed(1)} {Temperature}</div>
            <div className='title'>{weather?.weather[0].main}, {weather?.weather[0].description}</div>
          </div>

          <div className='data'>
            <div className='card__hover card__data'>
              <i className='bx bxs-cloud' ></i>
              <span>Clouds:</span> <b>{weather?.clouds.all}<span>%</span></b></div>

            <div className='card__hover card__data'>
              <i className='bx bxs-chevrons-down'></i>
              <span>Pressure:</span> <b>{weather?.main.pressure}<span> mb</span></b></div>

            <div className='card__hover card__data'>
              <i className='bx bx-wind'></i>
              <span>Wind speed:</span> <b>{weather?.wind.speed.toFixed(1)}<span> m/s</span></b></div>
          </div>


        </div>

      </div>

      <div className='button'>
        <button className='button' onClick={toggleTemp}>
          Degrees {tempInfo}
        </button>
      </div>

    </div>
  )
}

export default Card