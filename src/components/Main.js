import React, {useState, useEffect} from 'react'

function Main() {
    const [placename, setPlacename] = useState(null);
    const [search, setSearch] = useState('Thimphu');

    useEffect(()=>{
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2898bac53d275097240d2ee00538cf9`
            const response = await fetch(url);
            const resJson = await response.json();
            setPlacename(resJson.main)
        }
        fetchAPI();
    })
  return (
    <div>
        <h1>Weather App</h1>
        <input type="search" placeholder="placename" onChange={(event)=>setSearch(event.target.value)}/>
        <h3>{search}</h3>
        {placename?<h4>{placename.temp} degree Celcius</h4>:<p>no data found</p>}
        
    </div>
  )
}

export default Main