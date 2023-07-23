"use client";
import Link from 'next/link'
import Image from 'next/image';
import logo from './logo.png'
// import React, { useEffect, useState } from 'react'


const Navbar = () => {



 



    // const [open, setOpen] = React.useState(false);
    // const [flyer, setFlyer] = React.useState(false);
    // const [flyerTwo, setFlyerTwo] = React.useState(false);

    // const [theme, setTheme] = useState('light');

    // useEffect (() => {
    //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark')
    //       } else {
    //         document.documentElement.classList.remove('dark')
    //       }
    // })



    // useEffect (() => {
    //     if (theme === 'dark') {
    //         document.body.classList.add('dark')
    //     } else {
    //         document.body.classList.remove('dark')
    //     }
    // },[theme])

    // const handlethemeswitch = () => {
    //     if (theme === 'light') {
    //         setTheme('dark')
    //     } else {
    //         setTheme('light')
    //     }
    // }
    
  return (

   
    <header className="st-site-header st-style1 st-sticky-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <a className="st-site-branding" href="/"><Image src={logo} alt="Mokhter Ahmad"/></a>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav">
                  <li><Link href="/" className="st-smooth-move">Home</Link></li>
                  {/* <li><Link href="/about" className="st-smooth-move">About</Link></li> */}
                    {/* Submenu  */}
                        {/* <span className="dropdown relative st-smooth-move me-5">
                          <li className="rounded inline-flex items-center me-1"><Link href="/lecture" className="st-smooth-move">MEDIA</Link></li>
                          <i class="bi bi-chevron-down"></i>
                          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className=""><Link className="st-smooth-move rounded-t bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block" href="/lecture">LECTURES</Link></li>
                            <li className=""><Link className="st-smooth-move bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block" href="/podcast">PODCAST</Link></li>
                            <li className=""><Link className="st-smooth-move rounded-b bg-gray-200 hover:bg-[#FEC544] py-2 px-4 block" href="/gallery">GALLERY</Link></li>
                          </ul>
                        </span> */}
                    {/* Submenu  */}          
                  {/* <li><Link href="/consultancy" className="st-smooth-move">CONSULTENCY</Link></li>
                  <li><Link href="/blog" className="st-smooth-move">Blog</Link></li> */}
                </ul>
                <div className="sp-phone">
                  <div className="st-hero-btn">
                      <Link href="/" className="st-btn st-style1 st-color1 st-smooth-move">Apply Program</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       


      </div>
    </header>
    


  )
}

export default Navbar






{/* <div className="relative bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Workflow</span>
                <h1 className='dark:text-red-800'>Mokhter Ahmad</h1>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                Heroicon name: outline/menu

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900"> Home </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900"> About </Link>
              <Link href="/academic" className="text-base font-medium text-gray-500 hover:text-gray-900"> Academic </Link>
              <Link href="/lecture" className="text-base font-medium text-gray-500 hover:text-gray-900"> Lecture </Link>
              <Link href="/consultancy" className="text-base font-medium text-gray-500 hover:text-gray-900"> Consultancy </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900"> Contact </Link>   
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="applyProgram"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
               Apply Program
              </Link>

              <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-4" onClick={handlethemeswitch}> Dark </button>

            </div>
          </div>
        </div>

        Mobile menu, show/hide based on mobile menu state.

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
         >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <h1>Mokhter Ahmad</h1>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>

                    Heroicon name: outline/x

                   <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> Home </span>
                  </Link>
                  <Link href="/about" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> About </span>
                  </Link>
                  <Link href="/academic" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> Academic </span>
                  </Link>
                  <Link href="/lecture" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> Lecture </span>
                  </Link>
                  <Link href="/consultancy" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> Consultancy </span>
                  </Link>
                  <Link href="/contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"> 
                    <span className="ml-3 text-base font-medium text-gray-900"> Contact </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link
                  href="applyProgram"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                 Apply Program
                </Link>
                  <button className="text-indigo-600 hover:text-indigo-500" onClick={handlethemeswitch}> Dark </button>
              </div>
            </div>
          </div>
        </div>
</div>  */}