import React from "react";
//import dfg from '../../../../assets/images/mdk.jpg'

const NavHero = ({ hero, matansas }) => {
   
    
     
        return (
            <>
                <div className="hero_section">
                {hero === "Contact Us" || hero === "Login" || hero === "Sign Up" || hero === "Forgot Password" ? (
                    <h1 className="title">{hero}</h1>
                ) : (
                    matansas&& (
                        <><div className="hero-data">
                        <div className="left">
                            <div className="icon">
                                <img src={matansas.image} alt="icon" />
                            </div>
                            <div className="details">
                                <h1>{matansas.name}</h1>
                                <div className="status">
                                    <div className="country">
                                        <i className="fa fa-map-marker"></i>
                                        <span>{matansas.state} state</span>
                                    </div>
                                    <div className="date">
                                        <i className="fa fa-calendar"></i>
                                        <span>Born On: {matansas.DOB}</span>
                                    </div>
                                    <div className="date">
                                        <i className="fa fa-calendar"></i>
                                        <span>Dead On: {matansas.DOD}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="total">
                                <h2>Adadin yaran ta</h2>
                                <h2>{matansas.adadin_yara}</h2>
                            </div>
                        </div>
                        
                    </div>
                    
                    </>
                    )
                )}
            
            </div>
            </>
        );
    
};

export default NavHero;
