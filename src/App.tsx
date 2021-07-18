import React, { FC, useEffect, useState } from 'react'
import './App.scss'

const App: FC = () => {
  // Load 12 pics at first, wait 5 seconds, then lazyload the rest when the user scrolls
  const [numPics, setNumPics] = useState(12)

  useEffect(() => {
    const timer = setTimeout(() => setNumPics(44), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='App'>
      <h1>
        House For Rent
        <br />
        915 Urban Ave.
        <br />
        Durham, NC 27701
      </h1>

      <ul>
        <li>3 bd</li>
        <li>2 ba</li>
        <li>1,699 sqft</li>
        <li>Unfurnished</li>
        <li>$2,300/month</li>
        <li>Available August 7, 2021</li>
      </ul>

      <p>
        This house in Durham's sought-after Trinity Park neighborhood is two blocks from Duke's East
        Campus and is in the priority zone for George Watts Elementary School, which is one block
        away. It features an open floor plan, recently renovated kitchen, 3 bedrooms, 2 full
        bathrooms, washer, dryer, dishwasher, built-in shelves, and a gas fireplace. Outside,
        there's a patio in the front and another in the back, abundant tree cover, and off-street
        parking for two cars.
      </p>

      <p style={{ textAlign: 'center' }}>
        <a href='mailto:rent915urbanave@danbock.net'>rent915urbanave@danbock.net</a>
      </p>

      <div className='images'>
        <>
          <img alt='map' src='img/map.jpg' />
          {Array.from(Array(numPics).keys()).map(key => (
            <img
              key={key}
              alt={`${key}`}
              src={`img/915 Urban${('0' + (key + 1)).slice(-2)}.jpg`}
              loading='lazy'
            />
          ))}
        </>
      </div>
    </div>
  )
}

export default App
