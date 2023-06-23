import { createContext, useState } from 'react';
import './App.css';
import Current from './Component/Current';
import Search from './Component/Search';

export const context = createContext()

function App() {
  const [data,setData] = useState()
  return (
    <div className="App">
      <context.Provider value={[data,setData]}>
        <Search/>
        <Current/>
      </context.Provider>
    </div>
  );
}
export default App;
