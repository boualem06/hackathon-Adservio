import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavbarCpanel from './NavbarCpanel'

const Layout = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <SideBar
        open={open}
        setOpen={() => {
          setOpen(!open)
        }}
      />
      <div className="relative z-40 w-full lg:w-4/5 p-3 pt-0 lg:ml-[20%]">
        <NavbarCpanel
          setOpen={() => {
            setOpen(!open)
          }}
        />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
