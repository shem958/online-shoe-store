import React from "react";
import ProductDetail from "../components/ProductDetail/ProductDetail";

function Product({ match }) {
  const { id } = match.params;

  return (
    <div>
      <ProductDetail productId={id} />
    </div>
  );
}

export default Product;
