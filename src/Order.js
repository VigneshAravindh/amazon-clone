import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {order.data.created
          ? moment(order.data.created.toDate()).format("MMMM Do YYYY, h:mma")
          : ""}
      </p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item, i) => (
        <CheckoutProduct key={i} {...item} hideButton />
      ))}

      <h3 className="order__total">Total: ₹{order.data.amount}</h3>
    </div>
  );
};

export default Order;
