import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="images/logo__2.webp"
          alt="image"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">your Shopping basket</h2>
          {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            />
          ))}
          
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
