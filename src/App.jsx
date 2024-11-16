import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BuyCredit from './Pages/BuyCredit'
import Result from './Pages/Result'
import Home from './Pages/HOME'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {


  
  return (
    <>
    <div className='min-h-screen bg-slate-50'>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Result" element={<Result/>} />
    <Route path="/Buy" element={ <BuyCredit/>} />


    </Routes>
<Footer/>
</div>

    </>
  )
}

export default App