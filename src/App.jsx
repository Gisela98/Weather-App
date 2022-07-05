import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'
import Load from './components/Load'

function App() {

  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [visible, setVisible] = useState(false)
  const [Ocult, setOcult] = useState(true)
  const [Image, setImage] = useState()

  useEffect (() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({ lat, lon })
  }

    navigator.geolocation.getCurrentPosition(success)

  }, [])

  useEffect(() => {
    if(latLon !== undefined) {
    const API_KEY = 'a377c812173e2bf608b11b858cefacaf'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${API_KEY}&units=metric`

    axios.get(URL)
    .then(res => setWeather(res.data))
 
    
  }

  }, [latLon])


	useEffect(() => {
		if (weather?.weather[0].main === 'Atmosphere') {
			setImage('https://www.2634.com.ar/wp-content/uploads/2020/09/maxresdefault.jpg')
		} else if (weather?.weather[0].main === 'Clear') {
			setImage('https://png.pngtree.com/thumb_back/fw800/background/20210416/pngtree-clear-night-sky-gentle-gentle-and-colorful-clouds-background-image_620107.jpg')
		} else if (weather?.weather[0].main === 'Clouds') {
			setImage('https://estaticos.muyinteresante.es/uploads/images/gallery/5f9a9dec5bafe87eb4bbcf9f/1-nubes-en-el-cielo.jpg')
		} else if (weather?.weather[0].main === 'Drizzle') {
			setImage('https://w0.peakpx.com/wallpaper/773/77/HD-wallpaper-raindrops-car-drop-drops-purple-rain-screen-sunset-water-window.jpg')
		} else if (weather?.weather[0].main === 'Rain') {
			setImage('https://w0.peakpx.com/wallpaper/773/77/HD-wallpaper-raindrops-car-drop-drops-purple-rain-screen-sunset-water-window.jpg')
		} else if (weather?.weather[0].main === 'Snow') {
			setImage('https://nuestroclima.com/wp-content/uploads/2021/12/Nieve-rosa.jpg')
		} else if (weather?.weather[0].main === 'Thunderstorm') {
			setImage('https://i.pinimg.com/originals/d7/24/46/d724468bbfe90a86256c62d5ffe68c3e.jpg')
		}

		if (weather !== undefined) {
			setVisible(true)
			setOcult(false)
		}
	}, [weather])

	console.log(weather)

	return (
		<div className="App" style={{
			backgroundImage: `url(${Image})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
			{visible ?
				<Card
					latLon={latLon}
					weather={weather}
				/>
				: null}
			{Ocult ?
				<Load />
				: null}
			
				
		</div>
	)
}

export default App