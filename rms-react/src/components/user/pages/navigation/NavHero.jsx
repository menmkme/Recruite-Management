import React from "react";


const NavHero = ({ hero}) => {
    return <div className="hero_section">
        <>
            {hero === "contact" && <h1 className="title">Contact Form !!!</h1>}
            {hero === "login" && <div>Login</div>}
            <div className="title">Contact Form !!!</div>
            
        </>
    </div>
  }
  
  export default NavHero