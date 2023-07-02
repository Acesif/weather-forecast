import React, { useContext, useState } from 'react'
import { context, loadContext, unitContext } from '../App'

const Search = () => {
  const [data,setData] = useContext(context)
  const [unit,setUnit] = useContext(unitContext)
  const [load,setLoad] = useContext(loadContext)

  const [searchInput,setSearchInput] = useState("Dhaka")
  const unitChange = (e) => {
    e.preventDefault()
    const toggledUnit = !unit
    setUnit(toggledUnit)
  }
  const setBG = (bg) => {
    const backgnd = document.querySelector(".App")
    if(bg.toLowerCase().includes("cloudy")){
      backgnd.classList.add("cloudy")
    }
    else if(bg.toLowerCase().includes("rain" || "rainy")){
      backgnd.classList.add("rainy")
    }
    else if(bg.toLowerCase().includes("sunny")){
      backgnd.classList.add("sunny")
    }
    if(bg.toLowerCase().includes("thunder")){
      backgnd.classList.remove("rainy")
      backgnd.classList.add("thunder")
    }
  }
  const getData = async (city) => {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=643a62b99a514ecca3f165949230706&q=${city}&days=1&aqi=no&alerts=no`)
    const response = await data.json()
    if(await response.error?.code === 1006){
      alert("Invalid City Name")
      document.querySelector("input").value = ""
      setSearchInput("Dhaka")
    }
    else{
      setData(response)
      setBG(await response.current.condition.text)
      document.querySelector("input").value = ""
      setLoad(true)
    }
  }
  const HandleSearch = (e) => {
    e.preventDefault()
    try {
      getData(searchInput)
    } catch (error) {
    }
  }
  window.addEventListener("load",()=>{
    setLoad(true)
    getData(searchInput)
  })
  return (
    <div>
        <nav className="navbar pt-4">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" onChange={(e)=>setSearchInput(e.target.value)} type="search" placeholder="Enter City" />
                  <button 
                    onClick={(e)=>HandleSearch(e)} 
                    className="btn btn-outline-success" 
                    type="submit"
                    >
                    Search
                  </button>
                  <button 
                    className="btn btn-outline-success toggle-unit" 
                    onClick={(e)=>unitChange(e)}
                  >
                    {
                      unit? <p>&deg;C</p>:<p>&deg;F</p>
                    }
                  </button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Search