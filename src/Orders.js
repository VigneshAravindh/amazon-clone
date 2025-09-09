import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
