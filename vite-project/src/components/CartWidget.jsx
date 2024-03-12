import React from 'react';

function CartWidget({ itemCount }) {
  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span className="notification">{itemCount}</span>
    </div>
  );
}

export default CartWidget;