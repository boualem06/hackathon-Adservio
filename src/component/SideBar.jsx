import React from 'react'
// import logo from '../../assets/Images/logo_white.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// import Admin from '../../assets/Images/admin.svg'
import { AiOutlineClose } from 'react-icons/ai'
import { RiLogoutCircleRLine } from 'react-icons/ri'
// import { useAuth } from '../../Hooks/Context'
// import { signout } from '../../Firebase/Operation'

export default function SideBar({ open, setOpen }) {
  //   const { user, update } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  React.useEffect(() => {}, [location.pathname])

  return (
    <div
      className={
        open
          ? 'w-1/5 h-screen fixed lg:static z-50 overflow-auto flex flex-col bg-pramery transition transform translate-x-0 bg-[#E1CEB6]'
          : 'md:w-1/5 h-screen fixed lg:static z-50 overflow-auto lg:flex flex-col bg-pramery hidden transition bg-[#E1CEB6]'
      }
    >
      <div className="flex flex-col w-2/3 m-auto mt-4 gap-10">
        <div className="w-full h-4 flex justify-end lg:hidden ">
          <button
            onClick={() => {
              setOpen()
            }}
          >
            <AiOutlineClose size="25px" className="text-white" />
          </button>
        </div>
        
        <div className="w-full m-auto lg:mt-32 flex flex-col items-center gap-4 ">
          <div className="group group1">
            <Link to="/cpanel" className="flex gap-3 text-left w-40 ">
              <p
                className={
                  location.pathname === '/cpanel'
                    ? ' font-font group-hover:text-white text-white text-lg '
                    : ' font-font group-hover:text-white text-gray-500 text-lg '
                }
              >
                Collecteur
              </p>
            </Link>
          </div>

          <div className="group2 group">
            <Link to="/cpanel/Benevole" className="flex gap-3 w-40 text-left ">
              <p
                className={
                  location.pathname.split('/')[1] === 'Collecteur'
                    ? 'font-font group-hover:text-white text-white text-lg'
                    : 'font-font group-hover:text-white text-gray-500 text-lg '
                }
              >
                Bénévole
              </p>
            </Link>
          </div>

          <div className="group6 group">
            <Link to="Entrepot" className="flex gap-3 w-40 text-left ">
              <p
                className={
                  location.pathname.split('/')[1] === 'Entrepot'
                    ? 'font-font group-hover:text-white text-white text-lg '
                    : 'font-font group-hover:text-white text-gray-500 text-lg '
                }
              >
                Dépositaire
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-5/6 m-auto mb-10 gap-[5%] items-center">
        <div className="flex flex-col "></div>
        <button onClick={() => {}}>
          <RiLogoutCircleRLine size="30px" />
        </button>
      </div>
    </div>
  )
}
