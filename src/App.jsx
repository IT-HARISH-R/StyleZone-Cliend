// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import AddService from "./pages/AddService";
import { useDispatch, useSelector } from "react-redux";
import auth from "./services/auth";
import { setUser } from "./store/features/userSlice";
import Profile from "./pages/Profile";
import AppointmentSlots from "./components/AppointmentSlots ";



function App() {

  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  // console.log(user)
  if (user === null) {
    const getuser = async () => {
      try {
        const res = await auth.me();
        dispatch(setUser(res.data.user))
      }
      catch (err) {

      }
    }
    getuser()
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/book-appointment" element={<AppointmentSlots />} /> */}
            <Route path="/book" element={<AppointmentSlots />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/add-service" element={<AddService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
