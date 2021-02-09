import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

const Nav = ({isLibraryOpen,setIsLibraryOpen}) => {
   const toggleNav = () => {
       setIsLibraryOpen(!isLibraryOpen);
   }
  return (
    <nav className="Nav">
      <h1>Musikty</h1>
      <button className={isLibraryOpen ? "library-active" : ""} onClick={toggleNav}>
          Library
          <FontAwesomeIcon icon={faMusic}/>
      </button>
   
    </nav>
  );
};

export default Nav;
