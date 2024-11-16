import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Count from './count'
import LightCursor from '../cursorEffect'
import Faq from './faq'
import Footer from './footer'
import BarAnimation from './barAnimation'
import ImageSwitcher from './imageStw'

const HeaderElement = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };
  
  return (
    <div className='min-h-screen w-screen flex flex-col place-items-center bg-elliptical-gradient scroll-smooth'>
         {/* Header Section */}
      <LightCursor/>
      <div >
      <nav class=" fixed  backdrop-blur-md bg-[#1D2B2C] shadow-md bg-opacity-50 w-full z-20 top-0 start-0 my-5 mt-0 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex item-start space-x-3 rtl:space-x-reverse">
      <span class="self-center text-4xl font-serif font-semibold whitespace-nowrap dark:text-white">FOCS</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-Green-700 hover:bg-Green-800 focus:ring-4 focus:outline-none focus:ring-Green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Book a meet</button>
      <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMenu} // Toggle the menu on button click
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen} // Update aria-expanded based on menu state
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-green rounded md:bg-transparent md:text-green md:p-0 md:dark:text-green" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0 md:dark:hover:text-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/Login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0 md:dark:hover:text-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
            </li>
            <li>
              <Link to="/Searvices" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0 md:dark:hover:text-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
            </li>
            <li>
              <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0 md:dark:hover:text-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>
            <li>
              <Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0 md:dark:hover:text-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
            </li>
          </ul>
        </div>
  </div>
</nav>
      </div>


      {/* Input Section */}
      <div className='w-full mt-[6rem] mb-5 md:mt-48 sm:mt-32'>
      <div className="flex justify-center items-center w-full h-[150px] my-6 sm:my-8 md:my-10 lg:my-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[url('https://cdn.prod.website-files.com/668f8a8a2e706f5af78990a3/668fed4847a97a5f4362dda5_Vector%20(15).png')] bg-center bg-cover sm:bg-[length:80%] md:bg-[length:70%] lg:bg-cover">
      <input
          type="text"
          className="w-full max-w-[900px] h-16 rounded-xl border-4 focus:outline-none hover:border-BrightLightBlue pl-5"
          placeholder="Provide a brief overview of your project"
      />
      </div>
      </div>
      <div className='flex justify-center m-4 mt-0'>
        <Link to="/questions">
        <button
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Let's Start
        </button>
        </Link>
      </div>

      {/* Title and Subtitle Section */}
      <div className="w-full max-w-[1237px] h-auto mt-5  mb-10 mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-center flex flex-col gap-2">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-BrightLightBlue">
           Define It, Let AI Design It.
      </span>
      <br />
      <span className="text-sm sm:text-base text-white -mt-6">
           Controlled Freelance environment which helps businesses get work done efficiently
      </span>
      </div>


      {/* Information Banner */}
      <div className="w-full max-w-[1447px] my-5 mx-4 sm:mx-8 md:mx-16 lg:mx-32 mb-10 sm:mb-16 bg-transparent h-auto shadow-top-bottom flex text-slate-200 tracking-widest justify-center p-3">
      <span className="text-center text-sm sm:text-base">
          Project &bull; Product Outsourcing &bull; Talent Sourcing &bull; Workflow &bull; Quality Freelancers &bull; Timely Delivery
      </span>
      </div>

      <div className='w-full max-w-[1447px] mx-4'>
        <Count/>
      </div>

      <div className='mb-20'>
        <BarAnimation/>
      </div>
      
      <div>
        <ImageSwitcher/>
      </div>
      
      {/* <div className='my-14'>
        <Portfolio/>
      </div> */}

      <div>
        <Faq/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default HeaderElement