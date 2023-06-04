import React from "react";
import "./App.css";
import RenderApi from "./components/RenderApi";
import CardDetails from "./components/CardDetails";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<RenderApi />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route
          path="*"
          element={
            <div>
              Error:404 <br /> ❌Page Not Found.❌
            </div>
          }
        />
      </Routes>
    </Provider>
  );
};

export default App;
