


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import ResetPassword from './pages/ResetPassword';
import Movie from './moviecard/Movie';
import Profile from './profile/Profile';
import SubscriptionPlans from './profile/SubscriptionPlans';
import MyList from './pages/Mylist';
import History from './profile/History';
import Download from './profile/Download';
import AccountSetting from './profile/Accountsetting';
import Presentplan from './pages/Presentplan';
import Payment from './pages/Payment';
import Homepage from './pages/Homepage'; 
import LatestReleases from './pages/LatestReleases'; 
import TopMovies from './pages/Topmovies'; 
import SeriesPage from './pages/SeriesPage'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer'; 
import NeuralHubs from './components/neuralhubs/NeuralHubs';
import TimelineVisualization from './components/TimelineVisualization';
import MissionControlUI from './components/MissionControlUI';
import Video from './components/Video';
import DataScanOverlay from './components/DataScanOverlay';

import { MyListProvider } from './context/MyListContext';
import Genres from './genres/Genres';
import SpaceWestern from './genres/Spacewestern';
import Alien from './genres/Alien';
import Distopian from './genres/Distopian';
import Galactic from './genres/Galactic';
import Futuristic from './genres/Futuristic';
import Genetic from './genres/Genetic';
import Mind from './genres/Mind';
import Post from './genres/Post';
import Rise from './genres/Rise';
import Space from './genres/Space';
import Tech from './genres/Tech';
import Time from './genres/Time';



function App() {
  return (
   
    <MyListProvider>
      <AppContent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MyListProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const { pathname } = location;

 
  const routesWithoutNavAndFooter = [
    '/',             
    '/signup',
    '/forgot-password',
    '/otp-verification',
    '/reset-password',
    '/presentplan',     
    '/payment',          
    '/accountsetting',
   
  ];

  const shouldShowNavAndFooter = !routesWithoutNavAndFooter.includes(pathname);

  return (
    <>
      {shouldShowNavAndFooter && <NavBar />} {}

      <main> {}
        <Routes>
       
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />

         
          <Route path="/home" element={<Homepage />} /> 
          <Route path="/mylist" element={<MyList />} />
          <Route path="/movie" element={<Movie />} /> 
          <Route path="/latest" element={<LatestReleases />} />
          <Route path="/topmovies" element={<TopMovies />} />
          <Route path="/series" element={<SeriesPage />} /> 
           <Route path="/genres" element={<Genres />} /> 

          <Route path="/profile" element={<Profile />} />
          <Route path="/subscriptionplans" element={<SubscriptionPlans />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/history" element={<History />} />
          <Route path="/download" element={<Download />} />
          <Route path="/accountsetting" element={<AccountSetting />} />
          <Route path="/presentplan" element={<Presentplan />} />


          
          <Route path="/neural" element={<NeuralHubs />} />
          <Route path="/timeline" element={<TimelineVisualization />} />
          <Route path="/mission" element={<MissionControlUI />} />
          <Route path="/video" element={<Video />} />
          <Route path="/overlay" element={<DataScanOverlay />} />
          <Route path="/spacew" element={<SpaceWestern />} />
           <Route path="/alien" element={<Alien />} />
           <Route path="/distopian" element={<Distopian />} />
           <Route path="/futuristic" element={<Futuristic />} />
           <Route path="/galactic" element={<Galactic />} />
           <Route path="/genetic" element={<Genetic/>} />
           <Route path="/mind" element={<Mind />} />
           <Route path="/post" element={<Post/>} />
           <Route path="/rise" element={<Rise/>} />
           <Route path="/spa" element={<Space/>} />
           <Route path="/tech" element={<Tech/>} />
           <Route path="/time" element={<Time/>} />
           

        </Routes>
      </main>

      {shouldShowNavAndFooter && <Footer />} {}
    </>
  );
}

export default App;