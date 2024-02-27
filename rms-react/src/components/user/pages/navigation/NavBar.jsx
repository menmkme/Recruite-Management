import React from "react";
import Nav from "../../header/Nav";
import NavHero from './NavHero';



const NavBar = ({hero, cmp, matansa}) => {
    return (
      <header className="header">
        <div className="container">
            <Nav cmp={ cmp } />
            <NavHero hero={hero} matansas ={matansa} />

            {/* {
            Object.keys({matansa}).map((matansas, index) => (
              <NavHero
                key={index}
                id={matansas.id}
                name={matansas.name}
                state={matansas.state}
                status={matansas.status}
                image={matansas.image}
                description={matansas.description}
                DOB={matansas.DOB}
              />
            ))
          } */}
        </div>
      </header>
    )
  }
  
  export default NavBar