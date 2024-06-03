import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ShowPage from "./pages/ShowPage.jsx";
import WatchList from "./pages/WatchList";
import Favourites from "./pages/Favourites";
import Footer from "./pages/Footer.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import SignupForm from "./pages/SignupForm.jsx";
import Profile from "./pages/Profile.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import CastPage from "./pages/CastPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route
            path="/movie/:movieId"
            element={<ShowPage type="movie" />}
          ></Route>
          <Route path="/tv/:tvId" element={<ShowPage type="tv" />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cast/:castId" element={<CastPage />}></Route>
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
