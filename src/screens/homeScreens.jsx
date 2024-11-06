// import React from 'react'
import NavBar from "../components/layout/navBar";
import Herosection from "../components/homeComponents/herosection";
import Aboutus from "../components/homeComponents/aboutus";

export default function homeScreens() {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Aboutus />
    </div>
  );
}
