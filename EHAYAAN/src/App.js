import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryApi from "./common";
import { useDispatch } from "react-redux";
import Context from "./context";
import { setUserDetails } from "./store/userSlice";
import AutoPage from "./pages/AutoPage";
import AddNewAuto from "./pages/AddNewAuto";
import Booking from "./pages/Booking";
import Thanks from "./pages/Thanks";

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch
        }}
      >
        <ToastContainer />
        <BrowserRouter>
          <Header />
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/auto" element={<AutoPage />} />
                <Route path="/addnewauto" element={<AddNewAuto />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/thanks" element={<Thanks />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/signup" element={<SignUp />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
