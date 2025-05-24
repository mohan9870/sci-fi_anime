import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Page Components
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
import Homepage from './pages/Homepage'; // Your main home page
import LatestReleases from './pages/LatestReleases'; // The full Latest Releases page
import TopMovies from './pages/Topmovies'; // The full Top Movies page (assuming you created this)
import SeriesPage from './pages/SeriesPage'; // The full Series Page

// Import UI Components
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import the new Footer component
import NeuralHubs from './components/neuralhubs/NeuralHubs';
import TimelineVisualization from './components/TimelineVisualization';
import MissionControlUI from './components/MissionControlUI';
import Video from './components/Video';
import DataScanOverlay from './components/DataScanOverlay';

// Import Context Providers
import { MyListProvider } from './context/MyListContext';


// Main App component
function App() {
  return (
    // <Router> is assumed to be in index.js, as per your comment.
    <MyListProvider>
      <AppContent /> {/* Render a child component that uses useLocation */}
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

// New component to handle conditional rendering of NavBar and Footer
function AppContent() {
  const location = useLocation();
  const { pathname } = location;

  // Define routes where NavBar and Footer should NOT be shown
  const routesWithoutNavAndFooter = [
    '/',                  // Login page
    '/signup',
    '/forgot-password',
    '/otp-verification',
    '/reset-password',
    '/presentplan',       // Added
    '/payment',           // Added
    '/accountsetting',
    // Removed '/series', '/latest', '/topmovies' from this array
  ];

  const shouldShowNavAndFooter = !routesWithoutNavAndFooter.includes(pathname);

  return (
    <>
      {shouldShowNavAndFooter && <NavBar />} {/* Conditionally render NavBar */}

      <main> {/* Semantic tag for main content */}
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<Login />} /> {/* Default route, often login/landing */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Main Application Routes */}
          <Route path="/home" element={<Homepage />} /> {/* Your main home page */}
          <Route path="/mylist" element={<MyList />} />
          <Route path="/movie" element={<Movie />} /> {/* Example movie detail page */}
          <Route path="/latest" element={<LatestReleases />} /> {/* Dedicated Latest Releases page */}
          <Route path="/topmovies" element={<TopMovies />} /> {/* Dedicated Top Movies page */}
          <Route path="/series" element={<SeriesPage />} /> {/* Dedicated Series Page */}


          {/* Profile & Account Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscriptionplans" element={<SubscriptionPlans />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/history" element={<History />} />
          <Route path="/download" element={<Download />} />
          <Route path="/accountsetting" element={<AccountSetting />} />
          <Route path="/presentplan" element={<Presentplan />} />

          {/* Other Specific Components/Pages */}
          <Route path="/neural" element={<NeuralHubs />} />
          <Route path="/timeline" element={<TimelineVisualization />} />
          <Route path="/mission" element={<MissionControlUI />} />
          <Route path="/video" element={<Video />} />
          <Route path="/overlay" element={<DataScanOverlay />} />

        </Routes>
      </main>

      {shouldShowNavAndFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

export default App;
