import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCOllections/NewCollections'
import NewLetter from '../Components/NewLetter/NewLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div >
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewLetter/>
    </div>
  )
}

export default Shop
