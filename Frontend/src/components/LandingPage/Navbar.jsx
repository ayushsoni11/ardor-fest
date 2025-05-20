import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/userSlice.js';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector(state => state.user);

  const token = localStorage.getItem("token");
  // const loggedInUser=localStorage.getItem("loginuser");
  const storedUser = localStorage.getItem("loginuser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }



  return (
    <div>
      <header className="header " id="header" >
        <nav className="nav container">

          <div className="nav__menu" id="nav-menu">
            <div>
              <a href="/" className="nav__logo">
                <img className='utsavya-logo' src='/images/utsavya-logo.png'></img> </a>
            </div>

            <div >
              <ul className="nav__list" >

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
                  <a href='#about-us' className="nav__link">
                    About Us
                  </a>
                </li>

                <li className="nav__item">
                  <a href='#contact-us' className="nav__link">
                    Contact Us
                  </a>
                </li>

                {token && loggedInUser && loggedInUser.role === "event-head" && (
                  <>
                    <li className="nav__item">
                      <Link to={'/my-event-panel'} className="nav__link">
                        My Event Panel
                      </Link>
                    </li>
                  </>
                )}

                {token && loggedInUser && loggedInUser.role == "Super Admin" && (
                  <>
                    <li className="nav__item">
                      <Link to={'/admin-dashboard'} className="nav__link">
                        Dashboard
                      </Link>
                    </li>
                  </>
                )}

                {!token ? (
                  <>
                    <Link to={'/sign-up'} className="button button--ghost nav__link">Login</Link>

                    <Link to={'/sign-up'} className="button button--ghost nav__link">Sign Up</Link>
                  </>
                ) : (
                  <>
                    <Link to={"/my-profile"} className="nav__link">My Profile</Link>

                    <button onClick={() => { handleLogout() }} className="button button--ghost">Logout</button>
                  </>
                )}



              </ul>
            </div>

              
          </div>
            
        </nav>
      </header>
    </div>
  )
}

export default Navbar