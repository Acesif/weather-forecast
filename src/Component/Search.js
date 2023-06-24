import React, { useContext, useState } from 'react'
import { context } from '../App'

const Search = () => {
  const [data,setData] = useContext(context)
  const [searchInput,setSearchInput] = useState("london")
  const getData = async (city) => {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=643a62b99a514ecca3f165949230706&q=${searchInput}&days=1&aqi=no&alerts=no`)
    const response = await data.json()
    setData(response)
  }
  const HandleSearch = async (e) => {
    e.preventDefault()
    try {
      getData()
    } catch (error) {
      console.log(error)
    }
  }
  window.addEventListener("load",()=>{
    getData()
  })
  return (
    <div>
      {console.log(data)}
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
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Search