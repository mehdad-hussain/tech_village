import React from "react";

const ProductsCard = ({ onClick, item }) => {
  // idea: long inline classes const
  const transitionClasses =
    "transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105";

  return (
    <>
      <div className="relative">
        <div
          onClick={() => onClick(item)}
          className={`text-center border hover:z-10 hover:absolute hover:-left-[72px] hover:top-0 border-gray-300 w-36 group h-min ${transitionClasses}`}
        >
          <div className="w-full h-36 image">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full "
            />
          </div>
          <div className="shadow price bg-slate-100 group-hover:shadow-none">
            <span>{item.price}</span>
            <span> $</span>
          </div>
          <div className="p-1 transition-none group-hover:text-white group-hover:bg-gray-400 ">
            <h2 className="line-clamp-1 group-hover:line-clamp-2">
              {item.name}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
