import React, { useContext } from 'react'
import '../Style/Current.css'
import { context, unitContext } from '../App'

const Current = () => {
    const [data,setData] = useContext(context)
    const [unit,setUnit] = useContext(unitContext) 
    return (
      <div className='current'>
        <div className="temperature">
            <div id='current-temp'>
                {unit?<h2>{data?.current.temp_c} &deg;C</h2>:<h2>{data?.current.temp_f} &deg;F</h2>}
            </div>
            <div id='current-weather'>{data?.current.condition.text}</div>
            <div id='current-city'>{data?.location.name}</div>
        </div>
        <div className="weather-img">
            <img src={data?.current.condition.icon} width="80px" alt="weather-img"/>
        </div>
    </div>
  )
}

export default Current
