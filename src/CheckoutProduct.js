import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { formatCurrency } from "./utils";

function CheckoutProduct({ id, image, price, rating, title, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{formatCurrency(price)}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => <p key={i}>🌟</p>)}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Remove from Cart</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
