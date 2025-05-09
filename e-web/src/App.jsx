import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Landing from './pages/Landing'; 
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Help from './pages/Help';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />

      
      
        <Route path="/resource" element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        } />

      
          <Route path="/help" element={
          <ProtectedRoute>
            <Help />
          </ProtectedRoute>
        } />
          <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;