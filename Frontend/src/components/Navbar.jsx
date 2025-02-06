import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Fitness</h1>
    <div>
        <Link to="/" className='bg-blue-400 mr-4'>Home</Link>
    </div>
    </nav>
  )
}

export default Navbar