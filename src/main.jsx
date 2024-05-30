import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Login from "./assets/pages/Login.jsx";
import ShowPage from "./assets/pages/ShowPage.jsx";
import WatchList from "./assets/pages/WatchList";
import Favourites from "./assets/pages/Favourites";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/movie/:movieId" element={<ShowPage />}></Route>
        <Route path="/tv/:tvId" element={<ShowPage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
