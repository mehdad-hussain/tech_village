import React from "react";
import CartItem from "../../components/cartItem/CartItem";

const Cart = ({ cartItems, addItem, removeItem, deleteItem }) => {
  let itemsPrice;
  let taxPrice;
  let shippingPrice;
  let totalPrice = 0;
  let discount = 10;

  if (cartItems.length !== 0) {
    itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    taxPrice = itemsPrice * 0.14;
    shippingPrice = itemsPrice > 2000 ? 0 : 20;
    totalPrice = itemsPrice + taxPrice + shippingPrice - discount;
  }

  return (
    <>
      <div className="px-1 border-r border-black">
        {/* section: cart is empty */}
        {cartItems.length === 0 ? (
          <div className=" min-h-[68vh] flex items-center justify-center text-3xl">
            Order List is empty! Want to add some product ?
          </div>
        ) : (
          <>
            {/* section: item lists */}
            <div className=" min-h-[42vh]">
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  addItem={addItem}
                  removeItem={removeItem}
                  deleteItem={deleteItem}
                  item={item}
                />
              ))}
            </div>

            {/* section: calculation section */}
            <div className="w-1/2 mt-4 ml-auto mr-1 text-gray-500">
              <div className="flex justify-between py-2.5 border-t border-gray-300">
                <h2>Sub Total</h2>
                <p className="font-semibold">
                  <span>$</span>
                  {itemsPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between py-2.5 border-t border-gray-300">
                <h2>TAX</h2>{" "}
                <p className="font-semibold">
                  <span>$</span>
                  {taxPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between py-2.5 border-gray-300 border-y">
                <h2>Shipping</h2>
                <p className="font-semibold">
                  <span>$</span>
                  {shippingPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between py-2.5 text-blue-500 font-semibold">
                <h2>Discount on Cart</h2>
                <p>
                  <span>$</span>
                  {discount.toFixed(2)}
                </p>
              </div>
            </div>
          </>
        )}
        {/* section: item count */}
        <div className="grid items-center grid-cols-12 px-2 py-4 font-bold text-blue-500 bg-blue-100">
          <p className="col-span-5 font-normal">
            Products Count <span> ({cartItems.length})</span>
          </p>
          <h4 className="col-span-3 col-start-7 text-2xl">Total</h4>
          <p className="col-span-3 col-start-10 text-2xl text-right">
            <span>$</span>
            {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
