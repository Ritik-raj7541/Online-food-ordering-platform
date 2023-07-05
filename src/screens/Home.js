import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Staters from '../helpers.js/Staters'
import Items from '../helpers.js/Items'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* carousel */}
      <Staters/>
      <Items/>
      <Footer/>
    </div>
  )
}
