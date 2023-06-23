import React from 'react'

const Search = () => {
  return (
    <div>
        <nav className="navbar pt-4">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Search