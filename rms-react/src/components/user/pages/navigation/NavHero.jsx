import React from "react";


const NavHero = ({ hero }) => {
    return <div className="hero_section">
        <>
            {hero === "Contact Us" && <h1 className="title">{hero}</h1>}
            {hero === "Login" && <h1 className="title">{hero}</h1>}
            {hero === "Sign Up" && <h1 className="title">{hero}</h1>}
            {hero === "Forgot Password" && <h1 className="title">{hero}</h1>}
            
            
        </>
    </div>
  }
  
  export default NavHero