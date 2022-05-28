import React, { useEffect } from "react";

// Components
import Home from "./components/Home";
import Info from "./components/Info";
import Episodes from "./components/Episodes";
import Videos from "./components/Videos";
import Details from "./components/Details";
import Footer from "./components/Footer";

// Scroll
import scrollreveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        #home,
        #info,
        #episodes,
        #details,
        #videos,
        footer
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);

  return (
    <div>
      <Home />
      <Info />
      <Episodes />
      <Videos />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
