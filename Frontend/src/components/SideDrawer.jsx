import { logout } from '@/store/slices/userSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import { BsCalendar2EventFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const SideDrawer = () => {
    const [show, setShow] = useState(false);

    const { isAuthenticated, user } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <>
            <div onClick={() => setShow(!show)} className='fixed right-5 top-5 p-2 text-3xl rounded-md bg-[var(--greenbg)] text-[var(--creambg)] lg:hidden'>
                <GiHamburgerMenu />
            </div>

            <div className={`w-[100%] sm:w-[20vw] bg-[var(--greenbg)] h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"}  transition-all duration-200 p-4 border-r-[1px] border-[var(--brownbg)] flex flex-col justify-between  `}>

                <div className='relative'>
                    <Link to={'/'}>
                        <h4 className='text-3xl text-[var(--creambg)]'>Utsavya</h4>
                    </Link>

                    <ul className='flex flex-col gap-3 mt-5'>
                        <li><Link to={'/events'}
                            className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150'>
                            <BsCalendar2EventFill />Events</Link>
                        </li>

                        <li><Link to={'/team'}
                            className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150'>
                            <IoPeopleSharp />Team</Link>
                        </li>

                        <li><Link to={'/gallery'}
                            className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150'>
                            <FaImages />Gallery</Link>
                        </li>

                        <li><Link to={'/contactUs'}
                            className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150'>
                            <RiContactsFill />
                            Contact Us</Link>
                        </li>

                        {isAuthenticated && user && user.role == "Head" &&(
                          <>
                            <li><Link to={'/manageEvents'}
                                className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150 '>
                                <FaHandPointUp />
                                Manage Events</Link>

                            </li>

                            <li><Link to={'/participants'}
                                className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150 '>
                                <FaUsersLine />
                                Participants</Link>
                            </li>
                            </>

                            )}  


                            {isAuthenticated && user && user.role == "Super Admin" &&(
                          <>
                            <li><Link to={'/dashboard'}
                                className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150 '>
                                <MdDashboard />
                                Dashboard</Link>

                            </li>
                            </>

                            )}    
                    </ul>

                    {!isAuthenticated ? (
                        <>
                        <div className='flex flex-row gap-4 my-4  '>
                        <Link className='text-xl font-semibold text-[var(--greenbg)] bg-[var(--creambg)] rounded-3xl px-2 py-1' to={'/login'}>Login
                        </Link>
                        <Link className='text-xl font-semibold text-[var(--greenbg)] bg-[var(--creambg)] rounded-3xl px-2 py-1 ' to={'/sign-up'}>Sign Up
                        </Link>
                        </div>
                       
                        </>
                    ) : (
                        <>
                        <div className='my-4' onClick={()=>{handleLogout}}>
                            <button className='text-xl font-semibold text-[var(--greenbg)] bg-[var(--creambg)] rounded-2xl p-2'>Logout</button>
                        </div>
                        </>
                    )}
                    <hr className='mb-4'/>

                    <ul className='mt-3 flex gap-3'>
                    <li><Link to={'/about-us'}
                                className='text-xl font-semibold text-[var(--creambg)] hover:text-[var(--cream2bg)] flex flex-row gap-3 hover:transition-all hover:duration-150 '>
                                <BsFillInfoSquareFill />
                                About Us</Link>

                            </li>
                    </ul>

                    < IoMdCloseCircle onClick={()=> {setShow(!show)}} className='absolute top-0 right-0 text-5xl sm:hidden bg-[var(--greenbg)] text-[var(--creambg)]' />
                </div>
            </div>
        </>

    )
}

export default SideDrawer
