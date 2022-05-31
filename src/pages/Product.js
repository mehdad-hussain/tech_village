import { useCallback, useEffect, useState } from "react";
import Cart from "../layout/cart/Cart";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import ProductSection from "../layout/productSection/ProductSection";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Product = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("cartItems"));
    if (storedData) {
      return storedData;
    } else return [];
  });

  //  <!-- section: function to add & increase items in cart -->
  const addItem = (item) => {
    console.log("clicked add function");
    const isExisted = cartItems.find((x) => x._id === item._id);
    let addedItem;
    if (isExisted) {
      addedItem = cartItems.map((x) =>
        x._id === item._id ? { ...isExisted, qty: isExisted.qty + 1 } : x
      );
      setCartItems((p) => (p = addedItem));
      // setValue(cartItems);
    } else {
      addedItem = [...cartItems, { ...item, qty: 1 }];
      setCartItems((p) => (p = addedItem));
    }
    // setValue((p) => (p = cartItems));
  };

  //  <!-- section: function to increase item count in cart -->
  const removeItem = (item) => {
    console.log("clicked remove function");
    const exist = cartItems.find((x) => x._id === item._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== item._id));
      // setCartItems([]);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      // setValue((p) => (p = cartItems));
    }
  };

  //  <!-- section: function to remove item from cart -->
  const deleteItem = (item) => {
    console.log("clicked delete function");
    const isExisted = cartItems.find((x) => x._id === item._id);
    if (isExisted) {
      setCartItems(cartItems.filter((x) => x._id !== item._id));
    }
    // setValue((p) => (p = cartItems));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return () => {};
  }, [cartItems]);

  return (
    <>
      {/* section: mobile menu section */}
      <Disclosure as="nav" className="bg-gray-200">
        {({ open }) => (
          <>
            <div className="px-2">
              <div className="relative flex items-center justify-between h-16">
                {/* Mobile menu button*/}
                <Disclosure.Button className="z-50 inline-flex items-center justify-center p-2 text-gray-400 rounded-md lg:hidden hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="absolute inset-0 z-40 mt-10 bg-gray-200 smM:mt-16 lg:hidden">
              <div className=" sm:py-8">
                <Cart
                  addItem={addItem}
                  removeItem={removeItem}
                  deleteItem={deleteItem}
                  cartItems={cartItems}
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* section: main section */}
      <div className="container flex mx-auto 2xl:px-20">
        <div className=" basis-1/3 sm:py-8 xlM:basis-1/2 lgM:hidden">
          <Cart
            addItem={addItem}
            removeItem={removeItem}
            deleteItem={deleteItem}
            cartItems={cartItems}
          />
        </div>
        <div className=" basis-2/3 xlM:basis-1/2 lgM:basis-full">
          <ProductSection addItem={addItem} />
        </div>
      </div>
    </>
  );
};

export default Product;
