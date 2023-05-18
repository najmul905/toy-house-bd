import { useState } from 'react'


import './App.css'

import HeaderLayOut from './Components/Home/HeaderLayOut/HeaderLayOut'
import Footer from './Components/Home/Footer/Footer'

function App() {


  return (
    < div className=' bg-orange-200'>
      <HeaderLayOut></HeaderLayOut>
     
      <Footer></Footer>
    </div>
  )
}

export default App
