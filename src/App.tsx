import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      {Array.from(Array(44).keys()).map(key => (
        <img
          key={key}
          alt={`${key}`}
          src={`img/915 Urban${('0' + (key + 1)).slice(-2)}.jpg`}
        />
      ))}
    </div>
  )
}

export default App
