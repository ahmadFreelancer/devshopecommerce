import React, { useContext } from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import { MyContext } from './ContextAPI/myContext';
import FeaturedSection from './Components/FeaturedSection';


export default function Home() {
      
      // let person = useContext(MyContext);
      // console.log(person);

      
  return (
    <div>
      <FeaturedSection />
      <HeroSection />
      <Services />
    </div>
  )
}
