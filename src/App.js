import React from "react";
import TopBannerAll from "./components/TopBannerAll/TopBannerAll";
import TopNavigation from "./components/TopNavigation/TopNavigation";
function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <TopBannerAll pageTitle="About Us"></TopBannerAll>
    </div>
  );
}

export default App;
