import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
const Navbar = () => {
  return (
    <>
    <nav className='p-5 flex justify-between' >
        {/* <MenuIcon/> */}
        <MenuIcon/>

        <input className='h-8 w-2/3 ' />
        <span className='w-8'></span>
    </nav>
    </>
  )
}

export default Navbar