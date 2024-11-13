// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import Facilitiesscreens from "./screens/Facilitiesscreens.jsx";
// import HeroSection from "./components/homeComponents/herosection.jsx";
// import NotFound from "../src/components/NotFound.jsx";
// // import Rooms$Suites from "./components/Rooms$Suites.jsx";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/home" element={<HeroSection />} />
//       <Route path="/facilities" element={<Facilitiesscreens />} />
//       <Route path="*" element={<NotFound />} />
//       {/* <Route path="rooms$Suites" element={<Rooms$Suites />} /> */}
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);