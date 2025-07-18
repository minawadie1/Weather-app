
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Location,SetLocation] = useState('')

  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=a8e451036825479554a8d1e7e16d4adf`
  
  const [Data,SetData] = useState({})

  const FetshData = (event)=>{
    if(event.key === 'Enter'){
      axios.get(Url).then(respond => {
        SetData(respond.data)
      })
      SetLocation('')
    }
  }
  
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[url(/image.png)] bg-no-repeat bg-cover flex flex-col justify-between ">
        <div className="flex self-center  mt-20 ">
          <input 
          className='self-center rounded-2xl bg-cyan-950 h-10  text-white pl-4  '
          onKeyDown={FetshData}
          value={Location}
          placeholder='Enter a Location'
          onChange={event => SetLocation(event.target.value)}
          type="text" 
          />
        </div>
        <div className="w-8/10 self-center flex flex-row justify-between max-w-150  ">
          <div className="flex  flex-col ">
            <p className="text-white text-xl capitalize">{Data.name}</p>
            { Data.main? <h1 className="text-5xl">{Data.main.temp.toFixed()}°F</h1> : null }
          </div>
          <div className=" -rotate-92 mt-20">
            { Data.weather? <h1 className="text-white text-2xl capitalize">{Data.weather[0].description}</h1> : null }
          </div>
        </div>
        <div className="flex flex-row text-white w-7/10 max-w-100 h-20 items-center justify-around self-center bg-gray-900 rounded-4xl   ">
          <div className="flex flex-col items-center h-8/10 justify-around">
            { Data.main? <h1 >{Data.main.feels_like.toFixed()}°F</h1> : null }
            <h1 className="">Feels like</h1>
          </div>
          <div className="flex flex-col items-center h-8/10 justify-around">
            { Data.main? <h1>{Data.main.humidity}%</h1> : null }
            <h1 className="">humidity</h1>
          </div>
          <div className="flex flex-col items-center h-8/10 justify-around ">
            { Data.wind? <h1 >{Data.wind.speed}MPH</h1> : null }
            <h1 className="">wind speed</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
