import { useState } from "react"

export const Home = () => {
  return (
    <section>
      <HomeNav />
      <Zengoh />
      <SearchQuery />
      {/* <Wheather /> */}
    </section>
  )
}

export const HomeNav = () => {

  return (
    <header className="p-3 bg-dark">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <button className="btn btn-info me-3">Login</button>
          <button className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </header>
  )
}

export const Wheather = () => {

  const wheatherdata = [
    {
      country: "NewYork",
      temperature: "22C",
      humadity: "xy",
      possibilities: "relative"
    },
    {
      country: "Australia",
      temperature: "28C",
      humadity: "xy",
      possibilities: "specific"
    },
    {
      country: "Japan",
      temperature: "32C",
      humadity: "xy",
      possibilities: "absolute"
    },
    {
      country: "USA",
      temperature: "34C",
      humadity: "xy",
      possibilities: "high"
    }
  ]

  const [searchLs, SetSearchLs] = useState(wheatherdata)
  const [searchValue, setSearchValue] = useState("")

  const handleSearchVal = (sv) => {
    setSearchValue(sv)
    const filterdata = wheatherdata.filter((item) => { return Object.values(item).join('').toLowerCase().includes(sv.toLowerCase()) })
    SetSearchLs(filterdata)
    console.log("filterarr", filterdata);

  }

  return (
    <section className="container w-75">
      <h6 className="mt-4">Wheather</h6>
      <label htmlFor="searchinput"></label>
      <input value={searchValue} id="searchinput" onChange={(e) => handleSearchVal(e.target.value)} className="form-control mt-4 mb-4" type="search" placeholder="Search Weather" />
      <table className="table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Temperature</th>
            <th>Humadity</th>
            <th>Possibilities</th>
          </tr>
        </thead>
        <tbody>
          {searchLs.length === 0 && <p className="alert alert-danger w-100 mt-5 text-center" role="alert">No result found</p>}
          {
            searchLs?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.country}</td>
                  <td>{item.temperature}</td>
                  <td>{item.humadity}</td>
                  <td>{item.possibilities}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export const Zengoh = () => {

  const weather_data = {

    "NewYork": {
      temperature: "22°C",
      humadity: "moisture",
      possibilities: "high"
    },
    "Jermany": {
      temperature: "32°C",
      humadity: "dry",
      possibilities: "high"
    },
    "Australia": {
      temperature: "28°C",
      humadity: "Rainy",
      possibilities: "low"
    }
  }

  const [searchLs, setSearchLs] = useState(weather_data)
  const [searchVal, setSearchVal] = useState("")

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value)
  }

  const filteredCities = Object.keys(weather_data).filter((city) => city.toLowerCase().includes(searchVal.toLowerCase()))

  return (
    <section className="container">
      <div className="row">
        <div className="col-8 w-75">
          <div>
            <input value={searchVal} onChange={handleSearchVal} autoFocus placeholder="Enter City name for find the weather status" style={{ borderRadius: '18px' }} className="form-control shadow-sm mt-5 mb-4" type="search" />
          </div>
          {/* {searchLs.length === 0 && <p className="alert alert-danger w-100 mt-5 text-center" role="alert">No result found</p>} */}
          <table className="table">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Humadity</th>
                <th>Possibilities</th>
              </tr>
            </thead>
            <tbody>
              {/* {searchLs.length === 0 && <p className="alert alert-danger w-100 mt-5 text-center" role="alert">No result found</p>} */}
              {
                filteredCities.map((city) => {
                  return (
                    <tr key={city}>
                      <td>{city}</td>
                      <td>{searchLs[city].temperature}</td>
                      <td>{searchLs[city].humadity}</td>
                      <td>{searchLs[city].possibilities}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-4"></div>
      </div>

    </section >
  )
}

export const SearchQuery = () => {

  return (
    <section className="container">
      <p></p>
    </section>
  )
}


{/* {
                Object.keys(searchLs).map((city) => {
                  return (
                    <tr key={city}>
                      <td>{city}</td>
                      <td>{searchLs[city].temperature}</td>
                      <td>{searchLs[city].humadity}</td>
                      <td>{searchLs[city].possibilities}</td>
                    </tr>
                  )
                })
              } */}