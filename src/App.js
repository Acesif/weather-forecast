import { createContext, useState } from 'react';
import './App.css';
import Current from './Component/Current';
import Search from './Component/Search';
import OtherStats from './Component/OtherStats';
import DayForecast from './Component/DayForecast';
import Loading from 'react-loading';

export const context = createContext()
export const unitContext = createContext()
export const loadContext = createContext()
function App() {
  const [data,setData] = useState()
  const [unit,setUnit] = useState(true)
  const [load,setLoad] = useState(false)
  return (
    <div className="App">
      <loadContext.Provider value={[load,setLoad]}>
      <unitContext.Provider value = {[unit,setUnit]}>
        <context.Provider value={[data,setData]}>
          <Loading/>
          <Search/>
          <Current/>
          <OtherStats/>
          <DayForecast/>
        </context.Provider>
      </unitContext.Provider>
      </loadContext.Provider>
    </div>
  );
}
export default App;
