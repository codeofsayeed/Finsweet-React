import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Relevant from "./components/Relevant";
import Compassion from "./components/Compassion";
import Benefit from "./components/Benefit";
import Sermon from "./components/Sermon";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Relevant />
      <Compassion />
      <Benefit />
      <Sermon/>
    </div>
  );
};

export default App;
