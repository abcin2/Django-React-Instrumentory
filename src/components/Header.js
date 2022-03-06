import React from 'react'

function Header() {
  return (
    <div className='page'>
        <h1 className='color-primary'>Header</h1>
        <button className='button-success button'>Click Me!</button>
        <button className='button-primary button'>Click Me!</button>
        <button className='button-danger button'>Click Me!</button>
        <button className='button-warning button'>Click Me!</button>
        <div className='card'>This is some content in a card.</div>
    </div>
  )
}

export default Header