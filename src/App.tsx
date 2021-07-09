import React, { FC } from 'react'
import './App.scss'

const App: FC = () => (
  <div className='App'>
    <h1>House for rent: 915 Urban Ave., Durham, NC 27701</h1>

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
      bathrooms, washer, dryer, dishwasher, built-in shelves, and a gas fireplace. Outside, there's
      a patio in the front and another in the back, abundant tree cover, and off-street parking for
      two cars.
    </p>

    <div className='images'>
      {Array.from(Array(44).keys()).map(key => (
        <img key={key} alt={`${key}`} src={`img/915 Urban${('0' + (key + 1)).slice(-2)}.jpg`} />
      ))}
    </div>
  </div>
)

export default App
