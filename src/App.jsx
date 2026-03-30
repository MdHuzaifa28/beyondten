import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import WhatWeBuild from "./components/sections/WhatWeBuild";
import OurWork from "./components/sections/OurWork";
import ClientReviews from "./components/sections/ClientReviews";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
// import OnGoing from "./components/sections/OnGoing";

function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-blue-200 pt-24">

      <Navbar />

      <Hero />
      <HowItWorks />
      <WhatWeBuild />
      {/* <OnGoing /> */}
      <OurWork />
      <ClientReviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
