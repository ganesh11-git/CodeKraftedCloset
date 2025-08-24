import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Offers } from '../Components/Offers/Offers'
import { Popular } from '../Components/Popular/Popular'
import { NewCollection } from '../Components/NewCollections/NewCollection'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}