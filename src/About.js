import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/ProductContext";

const About = () => {
    const {myName} = useContext(AppContext);
    
    const data = {
        name: "E-Commerce",
    };

    return (
        <> 
           {myName}
          <HeroSection myData={data} />
        </>
    )
}

export default About;