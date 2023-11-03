import React from "react";

import Categories from "../components/Categories";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeContact from "../components/HomeContact";
import Slider from "../components/Slider";
import HomeNews from "../components/HomeNews";
function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <HomeAboutUs />
      <HomeNews />
      <HomeContact />
    </>
  );
}

export default Home;
