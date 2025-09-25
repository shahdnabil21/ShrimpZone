import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';

export default function Nav() {
    const { cart } = useContext(CartContext);
  return (
    <>
<nav className="bg-amber-50 border-gray-200  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className=' font-bold  text-[#fb571d]  text-3xl'><i className="fa-solid fa-shrimp text-[#fb571d] text-3xl"></i> ShrimpZone </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-amber-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
  <li> 
    <Link to="/" className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-[#fb571d] text-2xl">Home</Link>
  </li>
  <li> 
    <Link to="/menu" className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-[#fb571d] text-2xl">Menu</Link>
  </li>
 <li> 
  <a href="#contact" className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-[#fb571d] text-2xl">
    Contacts
  </a>
</li>
  <li> 
    <Link to="/cart" className="relative block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-[#fb571d] text-2xl">
      <i className="fa-solid fa-cart-plus text-[#fb571d] text-2xl"></i>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-700 text-white text-xs px-2 py-1 rounded-full">
          {cart.length}
        </span>
      )}
    </Link>
  </li>

</ul>
    </div>
  </div>
</nav>

    </>
  )
}

