import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { useState, useEffect } from "react";
import { formatCurrency } from "./utils";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotal = basket.reduce((accum, item) => accum + item.price, 0);
    setTotal(subtotal);
  }, [basket]);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formatCurrency(total)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={() => navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
