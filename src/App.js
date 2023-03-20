import React from "react";

import Slider from "./components/Slider";

const App = () => {
  return (
    <main>
      <section className="container">
        <h2 className="title">Our Reviews</h2>
        <div className="underline"></div>
      </section>
      <Slider />
    </main>
  );
};

export default App;
