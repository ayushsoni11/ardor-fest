import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LandingPage from "./pages/LandingPage";
import CreateEvent from './components/EventPage/CreateEvent';
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
import ShowEvent from './components/EventPage/ShowEvent';
import MyEventPanel from "./pages/MyEventPanel";
import CertificatePage from './pages/CertificatePage';
import MyProfile from './pages/MyProfile';

const App = () => {
  //it will take care of user logout na ho jaage refresh krne pr

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch( fetchUser() );
  //   dispatch( getAllEventItems() );
  // },[]);
  
  return (

     <Router> 
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path = '/sign-up' element = {<SignUp />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/events' element={<EventPage />}/>
        <Route path="/events/create-event" element={<CreateEvent />} />
        <Route path='/events/:id' element = {<ShowEvent />} />
        <Route path="/my-event-panel" element = { <MyEventPanel/>} />
        <Route path="/my-event-panel/generate-certificate" element = { <CertificatePage/>} />

        {/* <Route path='/team' element={<Team />} />
        
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/manageEvents' element={<ManageEvents />} />  */}
        
      </Routes>
      <ToastContainer position='top-right'/>
    </Router>
   
  )
}

export default App;
