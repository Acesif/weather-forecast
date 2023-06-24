import React, { useContext } from 'react'
import '../Style/OtherStats.css'
import { context } from '../App'

const OtherStats = () => {
    const [data,setData] = useContext(context)
    return (
        <div className='other-stats'>
            <div className='humidity'>
                <span className='title'>Humidity</span>
                <span>{data?.current.humidity}</span>
            </div>
            <div className='wind-speed'>
                <span className='title'>Wind Speed</span>
                <span>{data?.current.wind_kph} Km/h</span>
            </div>
            <div className='pressure'>
                <span className='title'>Pressure</span>
                <span>{data?.current.pressure_mb} Mb</span>
            </div>
        </div>
    )
}

export default OtherStats