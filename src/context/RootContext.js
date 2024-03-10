import React, { useEffect, useState } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);
  const readTask = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    let bas = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(bas);
    setProductAll(res);
  };
  useEffect(() => {
    readTask();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        basket,
        productAll,

        setBasket,
        setProductAll,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
