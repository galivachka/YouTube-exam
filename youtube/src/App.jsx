import './App.css'
import {Routes, Route } from 'react-router-dom'


import Home from './components/Home/Home'
// import Error from './components/Error/Error'
import Registration from './components/Register/Registration.jsx'
import Login from './Login/Login'
import Channelpage from './components/channelpage/Channelpage'


function App() {

  return (
    <>

      <Routes>
        <Route element={<Channelpage/>} path="news/:id"></Route>
        <Route element={<Registration/>} path='/Registration'></Route>
        <Route element={<Login/>} path='/Login'></Route>
<Route element={<Home/>} path = "/"></Route>

   </Routes>
   </>
  )
}

export default App
