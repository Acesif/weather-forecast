import { createContext, useState } from 'react';
import './App.css';
import Current from './Component/Current';
import Search from './Component/Search';
import OtherStats from './Component/OtherStats';
import DayForecast from './Component/DayForecast';

export const context = createContext()

function App() {
  const [data,setData] = useState()
  return (
    <div className="App">
      <context.Provider value={[data,setData]}>
        <Search/>
        <Current/>
        <OtherStats/>
        <DayForecast/>
      </context.Provider>
    </div>
  );
}
export default App;
