import React from 'react'
import Navbar from '../components/Navbar'
import banner from '../assets/banner.jpg'
import WorkoutCard from '../components/WorkoutCard'

function Home () {
  return (
    <div>
      <Navbar/>
    <div name='banner' className=''> 
    
    <img src={banner} className='h-96 w-screen flex flex-row shadow-2xl inset-0'>
    </img>
    
    <h1 className='text-white'>some text</h1>
    </div>

    <div name='cards' className='inse'>
      <WorkoutCard/>
    </div>
    </div>
  )
}

export default Home