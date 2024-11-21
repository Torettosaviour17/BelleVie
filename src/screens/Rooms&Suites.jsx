// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/layout/navBar";
import Footer from "../components/layout/footer";
import RoomsSuiteshero from "../components/Rooms&Suitescomponents/Rooms&Suiteshero";
import Trending from "../components/Rooms&Suitescomponents/Trending";
import HotDeals from "../components/Rooms&Suitescomponents/HotDeals";

export default function RoomsSuites() {
  return (
    <div>
      <Navbar />
      <RoomsSuiteshero />
      <HotDeals />
      <Trending />
      <Footer />
    </div>
  );
}
