import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/userSlice.js';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div>
      <header className="header " id="header" >
        <nav className="nav container">
          <a href="#" className="nav__logo"> Utsavya </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">

              <li className="nav__item">
                <Link to={'/'} className="nav__link  active-link">
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link to={'/events'} className="nav__link">
                  Events
                </Link>
              </li>

              <li className="nav__item">
                <Link to={'/gallery'} className="nav__link">
                  Gallery
                </Link>
              </li>

              <li className="nav__item">
                <Link to={'/Team'} className="nav__link">
                  Team
                </Link>
              </li>

              <li className="nav__item">
                <Link to={'/about-us'} className="nav__link">
                  About Us
                </Link>
              </li>

              <li className="nav__item">
                <Link to={'/contact-us'} className="nav__link">
                  Contact Us
                </Link>
              </li>

              {isAuthenticated && user && user.role === "event-head" && (
                <>
                  <li className="nav__item">
                    <Link to={'/my-event-panel'} className="nav__link">
                      My Event Panel
                    </Link>
                  </li>
                </>
              )}

              {isAuthenticated && user && user.role == "Super Admin" && (
                <>
                 <li className="nav__item">
                    <Link to={'/admin-dashboard'} className="nav__link">
                      Dashboard
                    </Link>
                  </li>
                </>
              )}

              {!isAuthenticated ? (
                <>
                <Link to={'/sign-up'} className="button button--ghost nav__link">Login</Link>

                <Link to={'/sign-up'} className="button button--ghost nav__link">Sign Up</Link>
                </>
              ) : (
                <>
                  <button onClick={()=>{handleLogout()}} className="button button--ghost">Logout</button>
                </>
              )}
        
    
        
      </ul>
            <div className="nav__close" id="nav-close">
              <i className='bx bx-x'></i>
            </div>
            <img src="https://assets.codepen.io/7773162/nav-img.png" alt="" className="nav__img" />
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-grid-alt'></i>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar