// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/layout/navBar";
import Footer from "../components/layout/footer";
import HeroFacilites from "../components/Facilitiescomponents/HeroFacilites";
import Comforablesuties from "../components/Facilitiescomponents/comforablesuties";
import Spa from "../components/Facilitiescomponents/Spa";
import Restaurant from "../components/Facilitiescomponents/Restaurant";
import Gymnasiumsec from "../components/Facilitiescomponents/Gymnasiumsec";

export default function Facilitiesscreens() {
  return (
    <div>
      <Navbar />
      <HeroFacilites />
      <Comforablesuties />
      <Spa />
      <Restaurant />
      <Gymnasiumsec />
      <Footer />
    </div>
  );
}
