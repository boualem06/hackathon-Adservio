
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from '/src/assets/logo.png'

function Navbar() {
  const [open,setOpen]= useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [score, setScore] = useState(10);

  const location = useLocation();
  const isUserLoggedIn = !['', '/', '/signup', '/login', '/market-place', '/market-place/Manteau'].includes(location.pathname)

  return (
    <nav className="relative z-[1000] bg-white font-bold w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
    {
      isUserLoggedIn
      ?
      <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img className="h-auto sm:h-7" src={Logo} alt="logo" />
                </Link>
                
                <div className="flex lg:hidden">
                  <button onClick={()=>setOpen(prev=>!prev)} type="button" className="text-black  hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                      {
                        open 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                      }
                  </button>
                </div>
            </div>
            <div className={`${open ? 'translate-x-0 opacity-100': 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                    <Link to="#" className=" group flex justify-evenly gap-3 fill-[#838383] text-[#838383] hover:text-white font-['Montserrat', sans-serif] px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-[#E1CEB6] border border-[#838383] rounded-[20px]">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z"/>
                        <path d="M19.3046 20.0019C19.1278 20.0019 18.9511 19.9367 18.8115 19.7972L16.9509 17.9365C16.6811 17.6667 16.6811 17.2202 16.9509 16.9504C17.2207 16.6806 17.6672 16.6806 17.937 16.9504L19.7977 18.811C20.0675 19.0808 20.0675 19.5274 19.7977 19.7972C19.6581 19.9367 19.4814 20.0019 19.3046 20.0019Z"/>
                      </svg>
                      <span className="group-hover:text-white font-normal text-[#838383]">Ask Chat Bot</span>
                    </Link>
                    <Link to="/cpanel/donate" className="px-3 py-2 mx-3 mt-2 text-white bg-[#5FB9FA] transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#4a90c2]">Donate</Link>
                </div>

                <div className="flex items-center mt-4 lg:mt-0">
                    <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:flex lg:items-end lg:gap-2 hover:text-gray-700 focus:text-gray-700 focus:outline-none" aria-label="show notifications">
                        <p className="h-full text-end align-text-bottom">{score}</p>
                        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 18.4847L21.034 23L18.902 14.49L26 8.76421L16.653 8.02579L13 0L9.347 8.02579L0 8.76421L7.098 14.49L4.966 23L13 18.4847Z" fill="#FAFF00"/>
                        </svg>
                    </button>

                    <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-gray-700 focus:text-gray-700 focus:outline-none" aria-label="show notifications">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                        </div>

                        <h3 className="mx-2 text-gray-700 lg:hidden">Khatab wedaa</h3>
                    </button>
                </div>
            </div>
          </div>
      </div>
      :
      <div className="translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:justify-end md:items-center">
        <div className="flex flex-col md:flex-row md:justify-end md:mx-6 p-2">
          {/* Navbar item with an underline (using the 'before' pseudo-element) when active */}
          <Link
            className={`my-2 text-gray-700 duration-300 transform p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
            to="/"
          >
            Home
          </Link>

          <Link
            className={`my-2 text-gray-700 duration-300 transform p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/market-place" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
            to="/market-place"
          >
            Marketplace
          </Link>
          
          <Link
            className={`my-2 text-gray-700 duration-300 transform p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/signup" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
            to="/signup"
          >
            Sign Up
          </Link>

          <Link
            className={`my-2 text-gray-700 duration-300 transform p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/login" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
            to="/login"
          >
            Log In
          </Link>
          
        </div>
      </div>
    }
    </nav>
    
  )
}

export default Navbar
