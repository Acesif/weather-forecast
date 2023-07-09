import React, { useContext } from 'react'
import '../Style/OtherStats.css'
import { context, unitContext } from '../App'

const OtherStats = () => {
    const [data,setData] = useContext(context)
    const [unit,setUnit] = useContext(unitContext)
    return (
        <div className='other-stats'>
            <div className='humidity'>
                <span className='title'>Humidity</span>
                <span>{data?.current.humidity}%</span>
            </div>
            <div className='wind-speed'>
                <span className='title'>Wind Speed</span>
                {unit?<span>{data?.current.wind_kph} Km/h</span>:<span>{data?.current.wind_mph} mph</span>}
            </div>
            <div className='pressure'>
                <span className='title'>Pressure</span>
                {unit?<span>{data?.current.pressure_mb} Mb</span>:<span>{data?.current.pressure_in} In</span>}
            </div>
        </div>
    )
}

export default OtherStats