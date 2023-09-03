import { BrowserRouter } from "react-router-dom";

import laptop from '../src/assets/laptop.mp4';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {/* <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <video autoPlay muted loop className='absolute inset-0 w-25 h-25 object-cover'>
            <source src={laptop} type="video/mp4" />
            
          </video> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
