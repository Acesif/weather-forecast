import React, { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../Style/DayForecast.css'
import { context } from '../App';

const DayForecast = () => {
    const [data,getData] = useContext(context)
    return (
        <div className='forecast'>
            <div className='day-temp'>
                <DarkModeIcon/>
                <p>{data?.forecast.forecastday[0].hour[0].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[0].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[2].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[2].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[4].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[4].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <WbSunnyIcon/>
                <p>{data?.forecast.forecastday[0].hour[6].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[6].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[8].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[8].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[10].time.slice(-5,-3)} AM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[10].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <WbSunnyIcon/>
                <p>{data?.forecast.forecastday[0].hour[12].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[12].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[14].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[14].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[16].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[16].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <WbTwilightIcon/>
                <p>{data?.forecast.forecastday[0].hour[18].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[18].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[20].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[20].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <MoreVertIcon/>
                <p>{data?.forecast.forecastday[0].hour[22].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[22].temp_c))}&deg; C</p>
            </div>
            <div className='day-temp'>
                <DarkModeIcon/>
                <p>{data?.forecast.forecastday[0].hour[23].time.slice(-5,-3)} PM</p>
                <p>{Math.round(Number(data?.forecast.forecastday[0].hour[23].temp_c))}&deg; C</p>
            </div>
        </div>
    )
}

export default DayForecast