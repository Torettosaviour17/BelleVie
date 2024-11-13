// import React from 'react'
import NavBar from "../components/layout/navBar";
import Herosection from "../components/homeComponents/herosection";
import Aboutus from "../components/homeComponents/aboutus";
import SpecialOffer from "../components/homeComponents/specialOffer";
import Footer from "../components/layout/footer";
import OurService from "../components/homeComponents/ourService";
import CustomerStories from "../components/homeComponents/customer";

export default function homeScreens() {
  return (
    <div>
      <NavBar />
        <Herosection />
        <Aboutus />
        <SpecialOffer />
        <OurService />
        <CustomerStories />
        <Footer />
    </div>
  );
}
