import React from 'react';
import './styles/Navbar.css';
import newsLogo from '../images/newsLogo.png';
import menuImg from '../images/menuImg.png';

export default function Navbar({ onCategoryChange }) {
  return (
    <>
      <div className="navbar flex h-16 items-center bg-gray-800 bg-opacity-25 shadow-md backdrop-blur-md">
        <a href="/">
          <img src={newsLogo} className="navbarLogo w-36 xl:w-48" />
        </a>
        <div className="navbarText flex item-center">
          <a className="aboutText hidden xl:block font-inter font-bold text-black ml-2 text-2xl hover:text-gray-700" href="/about">About</a>
          <a className="contactText hidden xl:block font-inter font-bold text-black ml-6 text-2xl hover:text-gray-700" href="/contact">Contact</a>
          <select className='categorySelection appearance-none absolute w-11 xl:w-60 h-11 xl:h-10 right-7 xl:right-10 top-2.4 xl:top-3 bg-gray-500 bg-opacity-20 rounded-xl border-none text-center font-inter font-bold text-xs xl:text-lg backdrop-blur-md' onChange={onCategoryChange}>
            <option value="all">All</option>
            <option value="national">National</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="world">World</option>
            <option value="politics">Politics</option>
            <option value="technology">Technology</option>
            <option value="startup">Startup</option>
            <option value="entertainment">Entertainment</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="hatke">Hatke</option>
            <option value="science">Science</option>
            <option value="automobile">Automobile</option>
          </select>
          <div className="phoneMenuIcon xl:hidden flex items-center ml-[32vw] bg-gray-500 bg-opacity-25 shadow-md backdrop-blur-md rounded-xl">
            <img src={menuImg} className="h-7 m-2"/>
            <div className="phoneMenuItems font-inter hidden absolute -space-y-5 pt-3 right-12 text-center flex-col h-14 w-36 bg-gray-900 bg-opacity-25 shadow-md rounded-xl">
              <a className='no-underline font-bold text-black text-xl -mt-2.5 mb-4' href="/about">About</a>
              <a className='no-underline font-bold text-black text-xl' href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
