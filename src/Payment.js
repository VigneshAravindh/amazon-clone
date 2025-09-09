import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";
import { formatCurrency } from "./utils";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const history = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotal = basket.reduce((accum, item) => accum + item.price, 0);
    setTotal(subtotal);
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (basket.length === 0) {
      setError("Your basket is empty!");
      setProcessing(false);
      return;
    }

    try {
      if (user) {
        const orderRef = doc(db, "users", user.uid, "orders", Date.now().toString());
        await setDoc(orderRef, {
          basket,
          amount: total,
          created: serverTimestamp(),
        });
      }

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({ type: "EMPTY_BASKET" });
      history("/orders");
    } catch (err) {
      console.error(err);
      setError("Failed to place order");
      setProcessing(false);
    }
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>

        <div className="payment__section">
          <div className="payment__title"><h3>Delivery Address</h3></div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1/6/114, kurukku santhu</p>
            <p>Tenkasi, Dubai</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title"><h3>Review items</h3></div>
          <div className="payment__items">
            {basket.map(item => <CheckoutProduct key={item.id} {...item} hideButton />)}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title"><h3>Payment Method</h3></div>
          <div className="payment__details">
            <h3>Order Total ({basket.length} items): {formatCurrency(total)}</h3>
            <form onSubmit={handleSubmit}>
              <button disabled={processing || succeeded}>
                {processing ? "Processing..." : "Buy Now"}
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
