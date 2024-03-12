import React from 'react';
import '../Styles/NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  const cartItemCount = 5; // Número hardcodeado

  return (
    <div className="navbar">
      <ul>
        <li>Comprar</li>
        <li>Nosotros</li>
        <li>Contactanos</li>
      </ul>
      <CartWidget itemCount={cartItemCount} />
    </div>
  );
}

export default NavBar;