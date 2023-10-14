import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavbarCpanel from './NavbarCpanel'
import Navbar from './Navbar'

const Layout = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      {/* <SideBar
        open={open}
        setOpen={() => {
          setOpen(!open)
        }}
      />
      */}
      <div className="relative z-40 w-full  p-3 pt-0 ">
        {/* <NavbarCpanel
          setOpen={() => {
            setOpen(!open)
          }}
        />  */}
         <Navbar /> 
        <Outlet />
      </div> 
    </>
  )
}

export default Layout
