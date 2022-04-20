import React from 'react'

const HomeHeder = () => {
  return (
    <div> 
        <nav className='flex md:flex-1 text-2xl md:text-3xl p-10 navbar' >
            <div className='absolute left-16 top-6' >Note-Ed</div>
            <button className='absolute right-24 top-4 p-2 px-6 md:p-3 md:px-8 shadow-md text-xl md:text-2xl text-white rounded-full bg-cyan-600' >Download Extension</button>
        </nav>


    </div>
  )
}

export default HomeHeder