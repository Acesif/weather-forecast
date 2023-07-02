import React, { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../Style/DayForecast.css'
import { context, unitContext } from '../App';

const DayForecast = () => {
    const [data,getData] = useContext(context)
    const [unit,setUnit] = useContext(unitContext)
    return (
        <div className='forecast'>
            <div className='day-temp'>
                <p><DarkModeIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[0].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[0].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[0].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[2].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[2].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[2].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[4].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[4].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[4].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p><WbSunnyIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[6].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[6].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[6].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[8].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[8].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[8].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[10].time.slice(-5,-3)%12} AM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[10].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[10].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p><WbSunnyIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[12].time.slice(-5,-3)%12+12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[12].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[12].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[14].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[14].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[14].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[16].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[16].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[16].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p><WbTwilightIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[18].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[18].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[18].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[20].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[20].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[20].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p className='hide-on-wide'><MoreVertIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[22].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[22].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[22].temp_f))}&deg; F</p>}
            </div>
            <div className='day-temp'>
                <p><DarkModeIcon/></p>
                <p className='time-block'>{data?.forecast.forecastday[0].hour[23].time.slice(-5,-3)%12} PM</p>
                <p>---</p>
                {unit?<p>{Math.round(Number(data?.forecast.forecastday[0].hour[23].temp_c))}&deg; C</p>:
                      <p>{Math.round(Number(data?.forecast.forecastday[0].hour[23].temp_f))}&deg; F</p>}
            </div>
        </div>
    )
}

export default DayForecast