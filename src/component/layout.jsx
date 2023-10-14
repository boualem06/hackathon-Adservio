import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavbarCpanel from './NavbarCpanel'
import Navbar from './Navbar'

const Layout = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className='relative h-screen flex flex-col'>

      <Navbar /> 

      <div className="relative z-40 w-full h-full flex justify-between pt-0 ">
        {/* <NavbarCpanel
          setOpen={() => {
            setOpen(!open)
          }}
        />  */}

        <SideBar
          open={open}
          setOpen={() => {
            setOpen(!open)
          }}
        />

        <Outlet />
      </div> 
    </div>
  )
}

export default Layout
