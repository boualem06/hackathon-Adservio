// import React from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
// import useDateChart from '../../Zustand/Store'

// eslint-disable-next-line react/prop-types
export default function NavbarCpanel({ setOpen }) {
  const location = useLocation()

  return (
    <div className="flex w-full lg:w-10/12 gap-2 pt-2 items-center justify-between p-1 fixed z-40 //backdrop-filter //backdrop-blur-md //backdrop-brightness-100 pb-3">
      <div className="w-1/12 lg:hidden">
        <button
          onClick={() => {
            setOpen()
          }}
        >
          <FaBars size="25px" />
        </button>
      </div>
    </div>
  )
}
