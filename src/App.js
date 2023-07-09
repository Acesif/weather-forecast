import { createContext, useState } from 'react';
import './App.css';
import Current from './Component/Current';
import Search from './Component/Search';
import OtherStats from './Component/OtherStats';
import DayForecast from './Component/DayForecast';
import Loading from './Component/Loading'

export const context = createContext()
export const unitContext = createContext()
export const loadContext = createContext()
function App() {
  const [data,setData] = useState()
  const [unit,setUnit] = useState(true)
  const [load,setLoad] = useState(true)
  return (
    <div className="App">
      <unitContext.Provider value = {[unit,setUnit]}>
        <context.Provider value={[data,setData]}>
          <loadContext.Provider value={[load,setLoad]}> 
            {load&&<Loading/>} 
            <Search/>
            <Current/>
            <OtherStats/>
          <DayForecast/>
          </loadContext.Provider>  
        </context.Provider>
      </unitContext.Provider>
    </div>
  );
}
export default App;
