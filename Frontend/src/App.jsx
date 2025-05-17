import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LandingPage from "./pages/LandingPage";
import Team from "./pages/Team";
import GalleryPage from "./pages/GalleryPage";
import ContactUs from "./pages/ContactUs";
import ManageEvents from "./pages/ManageEvents";
import SignUp from './pages/SignUp';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/slices/userSlice.js';
import { getAllEventItems } from './store/slices/eventSlice.js';
import { useEffect } from 'react';
import EventPage from './pages/EventPage';

const App = () => {
  //it will take care of user logout na ho jaage refresh krne pr

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( fetchUser() );
    dispatch( getAllEventItems() );
  },[]);
  
  return (

     <Router> 
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path = '/sign-up' element = {<SignUp />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/events' element={<EventPage />}/>
        {/* <Route path='/team' element={<Team />} />
        
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/manageEvents' element={<ManageEvents />} />  */}
        
      </Routes>
      <ToastContainer position='top-right'/>
    </Router>
   
  )
}

export default App;
