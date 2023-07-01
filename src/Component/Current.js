import React, { useContext } from 'react'
import '../Style/Current.css'
import { context } from '../App'

const Current = () => {
    const [data,setData] = useContext(context)
    return (
      <div className='current'>
        <div className="temperature">
            <div id='current-temp'>
                <h2>{data?.current.temp_c}&deg;C</h2>
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