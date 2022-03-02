import React from 'react'
import logo from "./asserts/logo.jpg";
import"./css/Header.css";
import {Link as ScrollLink } from 'react-scroll';


function Header() {
    return (
      <>
        
        <div className="nav1 header">
          <div className="nav1 inner_header">
            <div className="left_head">
              <div className="logo">
                <img
                  src={logo}
                  alt="Kasowitz Benson torres"
                  className="logo_svg"
                />
              </div>
            </div>
            <div className="nav1 right_head">
              <div className="navigation">
                <ul className="menu_list">
                  <li className="items">
                    <ScrollLink
                      to="banner"
                      spy={true}
                      smooth={true}
                      className="item_Link triangle"
                    >
                      GLIMPSES
                    </ScrollLink>
                    
                  </li>
                  <li className="items">
                    {/* <a href="/clients" className="item_Link triangle">
                      FEATURED SPOTLIGHTS
                    </a> */}
                    <ScrollLink
                      to="featured"
                      spy={true}
                      smooth={true}
                      className="item_Link triangle"
                    >
                      FEATURED SPOTLIGHTS
                    </ScrollLink>
                  </li>
                  <li className="items">
                    
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      className="item_Link triangle"
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li className="items">
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      className="item_Link triangle"
                    >
                      Contact
                    </ScrollLink>
                    
                  </li>
                  
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </>
    );
}

export default Header
