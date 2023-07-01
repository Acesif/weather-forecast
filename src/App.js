import { createContext, useState } from 'react';
import './App.css';
import Current from './Component/Current';
import Search from './Component/Search';
import OtherStats from './Component/OtherStats';
import DayForecast from './Component/DayForecast';

export const context = createContext()
export const unit = createContext()
function App() {
  const [data,setData] = useState()
  const [unit,setUnit] = useState(true)
  return (
    <div className="App">
      <unitContext.Provider value = {[unit,setUnit]}>
        <context.Provider value={[data,setData]}>
         <Search/>
         <Current/>
         <OtherStats/>
         <DayForecast/>
        </context.Provider>
      <unitContext.Provider>
    </div>
  );
}
export default App;
