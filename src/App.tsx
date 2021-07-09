import React from 'react'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <h1>For Rent: 915 Urban Ave.</h1>

      <div className='images'>
        {Array.from(Array(44).keys()).map(key => (
          <img
            key={key}
            alt={`${key}`}
            src={`img/915 Urban${('0' + (key + 1)).slice(-2)}.jpg`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
