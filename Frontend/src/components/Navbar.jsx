import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Fitness</h1>
    <div>
        <Link to="/" className='font-white mr-4'>Home</Link>
        <Link to="/auth" className='font-white mr-4'>Login</Link>
        <Link to="/community" className='font-white mr-4'>Community</Link>
        <Link to="/profile" className='font-white mr-4'>Profile</Link>
        <Link to="/workouts" className='font-white mr-4'>Workouts</Link>
    </div>
    </nav>
  )
}

export default Navbar