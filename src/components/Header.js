import React from "react";

function Header({isDarkMode, onDarkModeClick}) {
  const handleDarkMode = () => {
    onDarkModeClick();
  }
  return(
    <header>
    <h2>Shopster</h2>
    <button onClick={handleDarkMode}>
      {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}


export default Header;

