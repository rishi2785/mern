import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <link to='/'>Home</link>
        </li>
        <li>
          <link to='/about'>About</link>
        </li>
        <li>
          <link to='/contact'>Contact</link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar