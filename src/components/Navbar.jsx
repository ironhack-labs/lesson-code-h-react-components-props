import React from "react";
import Button from './Button';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p>React - Components & props</p>
        <Button />
        <Button />        
      </nav>
    );
  }
}

export default Navbar;