import './App.css';
import {useEffect} from "react"
import axios from "axios"
import url from './api';
import Headers from "./components/Header/header"
import { Route, Routes } from 'react-router';
import Aboutus from './routes/Aboutus/Aboutus';
import Homepage from './routes/Homepage/Homepage';
function App() {
  useEffect(
    () => {
      axios.get(
        url + "/"
      ).then(res => {
        console.log(res.data)
      })
    } , []
  )
  return (
    <div className="App">
      <div className='root'>
        <div className='header'>
          <Headers/>
        </div>
        <div className='context'>
          <Routes>
            <Route path="/" element={(<Homepage/>)} />
            <Route path='/aboutus' element={(<Aboutus/>)} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
