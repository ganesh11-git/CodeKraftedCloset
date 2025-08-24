import React from 'react'
import './Newsletter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on E-mail</h1>
        <p>Subscribe to our newsletter & stay updated!!</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subsscribe</button>
        </div>
    </div>
  )
}
