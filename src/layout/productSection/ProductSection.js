import React from "react";
import ProductsCard from "../../components/productCard/ProductsCard";

import products from "../../assets/products";

const ProductSection = ({ addItem }) => {
  // idea: long inline breakpoints classes
  const breakpointsClasses =
    "xlM:grid-cols-3 lgM:grid-cols-4 mdM:grid-cols-3 xsM:grid-cols-2 xsM:w-full sm:p-8 smM:py-8";

  return (
    <div
      className={`grid grid-cols-5 mx-auto  gap-x-4 gap-y-8 justify-items-center ${breakpointsClasses}`}
    >
      {products.map((item) => (
        <ProductsCard key={item._id} item={item} onClick={addItem} />
      ))}
    </div>
  );
};

export default ProductSection;
