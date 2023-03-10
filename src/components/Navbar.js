import React from 'react';
import './styles/Navbar.css';
import newsLogo from '../images/newsLogo.png';
import menuImg from '../images/menuImg.png';

export default function Navbar({ onCategoryChange }) {
  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src={newsLogo} className="navbarLogo" />
        </a>
        <div className="navbarText">
          <a className="aboutText" href="/about">About</a>
          <a className="contactText" href="/contact">Contact</a>
          <select className='categorySelection' onChange={onCategoryChange}>
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
          <div className="phoneMenuIcon">
            <img src={menuImg} />
            <div className="phoneMenuItems">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
