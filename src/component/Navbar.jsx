<<<<<<< HEAD
import React from "react"

function Navbar() {
  const [open,setOpen]=React.useState(false)
  
=======
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation();

>>>>>>> d6f200e2ec9395f548e6c8e9ee96cb901c66ca1a
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800 w-full">
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                    </a>
                    <div className="flex lg:hidden">
                        <button onClick={()=>setOpen(prev=>!prev)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
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
                <div className={`${open ? 'translate-x-0 opacity-100': 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                    <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                        <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Join Slack</a>
                        <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Topics</a>
                        <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Random Item</a>
                        <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</a>
                    </div>

                    <div className="flex items-center mt-4 lg:mt-0">
                        <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                            </div>

                            <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
=======
        {/* 'opacity-0 -translate-x-full' */}
        <div className="translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div className="flex flex-col md:flex-row md:mx-6 p-2">
            {/* Navbar item with an underline (using the 'before' pseudo-element) when active */}
            <Link
              className={`my-2 text-gray-700 duration-300 transform dark:text-gray-200 p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
              to="/"
            >
              About
            </Link>
            
            <Link
              className={`my-2 text-gray-700 duration-300 transform dark:text-gray-200 p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/signup" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
              to="/signup"
            >
              Sign Up
            </Link>

            <Link
              className={`my-2 text-gray-700 duration-300 transform dark:text-gray-200 p-2 rounded-lg hover:bg-[#E1CEB6] md:mx-4 md:my-0 transition-all ${location.pathname === "/login" ? "before:absolute before:inset-x-0 before:bottom-0 before:h-[3px] before:bg-[#E1CEB6] hover:before:opacity-0 before:rounded-sm before:mt-[-1px]" : ""}`}
              to="/login"
            >
              Log In
            </Link>
            
          </div>
        </div>
      </div>
>>>>>>> d6f200e2ec9395f548e6c8e9ee96cb901c66ca1a
    </nav>
  )
}

export default Navbar
