import React from "react";
import Card from "./Components/card";
import Header from "./Components/header";
//import BackgroundSlider from "react-background-slider";
import BackgroundSlider from "./lib/BackgroundSlider";

import image2 from "./images/pexels-ioannis-ritos-995043.jpg";
import image3 from "./images/pexels-kássia-melo-10269890.jpg";
import image4 from "./images/pexels-ali-şenol-9168576.jpg";
import config from "./data/profile.json";
import "./app.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Components/footer";

//import config from "./data/card.json";
const App = () => {
  //const itemsRender = config.map((item) => <Card key={item.id} props={item} />);
  return (
    <React.Fragment>
      <Header avatar={config.AVATAR} intro={config.INTRO} />
      <section className="margin container">
        <div className="row">
          <div className="col-sm-6">
            <Card props={config.ABOUT} />
          </div>
          <div className="col-sm-6">
            <Card props={config.SKILLS} />
          </div>
        </div>
      </section>
      <section className="margin container">
        <div className="row">
          <div className="col-sm-8">
            <Card props={config.EXPEREINCE} />
          </div>
          <div className="col-sm-4">
            <Card props={config.LANGUAGE} />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-sm-4">
            <Card props={config.CONTACT} />
          </div>
          <div className="col-sm-8">
            <Card props={config.EDUCATION} />
          </div>
        </div>
      </section>
      <Footer props={config.SOCIAL} />
      <BackgroundSlider
        className="background-class"
        images={[image2, image3, image4]}
        duration={8}
        transition={2}
      />
    </React.Fragment>
  );
};

export default App;
