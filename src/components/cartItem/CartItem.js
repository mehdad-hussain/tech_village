import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

const CartItem = ({ addItem, removeItem, item, deleteItem }) => {
  return (
    <>
      <div className="flex items-center text-sm text-gray-500">
        <PencilAltIcon className="w-8 h-10" />
        <div className="grid items-center w-full grid-cols-12 p-1.5 mx-2 border border-gray-300 ">
          <h2 className="col-span-4 line-clamp-1">{item.name}</h2>

          <p className="col-span-2 ">
            <span>$</span>
            {item.price.toFixed(2)}
          </p>
          <div className="flex items-center justify-between col-span-3">
            <MinusCircleIcon
              className="w-8 h-8 text-gray-400"
              onClick={() => removeItem(item)}
            />
            <span>{item.qty}</span>
            <PlusCircleIcon
              className="w-8 h-8 text-gray-400"
              onClick={() => addItem(item)}
            />
          </div>

          <p className="col-span-3 col-start-11">
            <span>$</span>
            {(item.price * item.qty).toFixed(2)}
          </p>
        </div>
        <TrashIcon
          className="w-8 h-10 text-red-600"
          onClick={() => deleteItem(item)}
        />
      </div>
    </>
  );
};

export default CartItem;
