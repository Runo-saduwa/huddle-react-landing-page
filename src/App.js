import React, {Fragment} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import StatSection from './components/StatSection/StatSection';
import GrowTogether from './components/GrowTogether/GrowTogether';

function App() {
  return (
    <Fragment>
       <NavBar/>
       <main>
         <Hero/>
         <StatSection/>
         <GrowTogether/>
       </main>
    </Fragment>
  );
}

export default App;
