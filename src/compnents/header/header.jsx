import React,{useState,useEffect} from 'react';
import './header.css';

const header = () => {

  // Menu Open Close //
  const[isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu =() =>{
    setisMenuOpen(!isMenuOpen);
  }
  return <div>
    <div className="header">
      <div className="nav container">
        {/* Logo */}
        <a href="#" className="logo">
          LeChair
          </a>
          {/*Nav */}
          <div className={`navbar ${isMenuOpen ? "open-menu" :""}`}>
            <a href="#" className="nav-link">
              Furniture
            </a>
            <a href="#" className="nav-link">
              Projects
              </a>
            <a href="#" className="nav-link">
              Products
              </a>
            <a href="#" className="nav-link">
              About Us
              </a>
              <a href="#" className="register-btn btn">
              Register
              </a>
          </div>
          {/* Menu Icon */}
          <div className={`menu-icon${isMenuOpen ? "move": ""}`}
                onClick={toggleMenu}
          
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        
          </div>
      </div>
    </div>
  </div>
    

  
  
};

export default header
