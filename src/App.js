import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Translatebox from './components/Translatebox';
import HashLoader from "react-spinners/HashLoader";


function App() {
  const [Loader, setLoader] = useState(true)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 5000);
    
  }, [])
  return (
    <div className='app'>
 {
  Loader ?
   (
    <HashLoader
    color={"36D7B7"} loading={Loader} css={''} size={80} />
   )
 
   :(<div className='main'>
      <Navbar />
      <Translatebox />
      </div>
      )
 }
    </div>
  )
}

export default App


