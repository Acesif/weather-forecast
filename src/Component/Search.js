import React, { useContext, useState } from 'react'
import { context } from '../App'

const Search = () => {
  const [data,setData] = useContext(context)
  const [searchInput,setSearchInput] = useState("london")
  const getData = async (city) => {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=643a62b99a514ecca3f165949230706&q=${city}&days=1&aqi=no&alerts=no`)
    const response = await data.json()
    if(await response.error?.code === 1006){
      alert("Error")
      document.querySelector("input").value = ""
      setSearchInput("london")
    }
    else{
      setData(response)
      document.querySelector("input").value = ""
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
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Search