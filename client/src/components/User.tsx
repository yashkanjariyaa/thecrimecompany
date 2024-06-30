import React, { useState } from "react";

interface Order {
  id: number;
  item: string;
  quantity: number;
  price: number;
}

interface User {
  name: string;
  contact: string;
  address: string;
  previousOrders: Order[];
  createdOrders: Order[];
  cart: Order[];
}

const UserComponent: React.FC<User> = (props) => {
  const [user, setUser] = useState<User>(props);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <button onClick={() => console.log("Change name")}>Change</button>
      </div>
      <div>
        <label>Contact: </label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleInputChange}
        />
        <button onClick={() => console.log("Change contact")}>Change</button>
      </div>
      <div>
        <label>Address: </label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleInputChange}
        />
        <button onClick={() => console.log("Change address")}>Change</button>
      </div>

      <h2>Previous Orders</h2>
      <ul>
        {user.previousOrders.map((order) => (
          <li key={order.id}>
            {order.item} - {order.quantity} x ${order.price}
          </li>
        ))}
      </ul>

      <h2>Created Orders</h2>
      <ul>
        {user.createdOrders.map((order) => (
          <li key={order.id}>
            {order.item} - {order.quantity} x ${order.price}
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {user.cart.map((order) => (
          <li key={order.id}>
            {order.item} - {order.quantity} x ${order.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
