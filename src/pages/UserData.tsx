import UserComponent from "../components/User";

//sample user object
//to be fetched from api
const user = {
  name: "John Doe",
  contact: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  previousOrders: [
    { id: 1, item: "Shirt", quantity: 2, price: 20 },
    { id: 2, item: "Pants", quantity: 1, price: 40 },
  ],
  createdOrders: [{ id: 3, item: "Shoes", quantity: 1, price: 60 }],
  cart: [{ id: 4, item: "Hat", quantity: 1, price: 15 }],
};

const UserData = () => {
  return (
    <section>
      <UserComponent {...user} />
    </section>
  );
};

export default UserData;