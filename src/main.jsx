import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ShowPage from "./pages/ShowPage.jsx";
import WatchList from "./pages/WatchList";
import Favourites from "./pages/Favourites";
import Footer from "./pages/Footer.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import SignupForm from "./pages/SignupForm.jsx";
import Profile from "./pages/Profile.jsx";
import { UserProvider, useCredentials } from "./context/UserContext.jsx";
import CastPage from "./pages/CastPage.jsx";

const AuthenticatedRoute = ({ element }) => {
  const { isLoggedIn } = useCredentials();

  if (!isLoggedIn) {
    alert("Please login to access this page.");
    return <Navigate to="/login" />;
  }

  return element;
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/movie/:movieId" element={<ShowPage type="movie" />} />
          <Route path="/tv/:tvId" element={<ShowPage type="tv" />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route
            path="/profile"
            element={<AuthenticatedRoute element={<Profile />} />}
          />
          <Route path="/cast/:castId" element={<CastPage />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
