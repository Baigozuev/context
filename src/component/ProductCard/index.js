import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const { basket, productAll, setProductAll, setBasket } =
    useContext(ProductContext);
  const addToBasket = (data) => {
    let findBasked = basket.find((el) => el.id === data.id);
    if (findBasked) {
      let changeBasket = basket.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      let result = JSON.parse(localStorage.getItem("basket")) || [];
      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setBasket(result);
    } else {
      let result = JSON.parse(localStorage.getItem("basket")) || [];

      result.push(data);
      localStorage.setItem("basket", JSON.stringify(result));
      setBasket(result);
    }
  };

  const readTask = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
  };
  const deleteProduct = (btn) => {
    localStorage.setItem(
      "product",
      JSON.stringify([...productAll.filter((el) => el.id !== btn.id)])
    );
  };
  readTask();
  useEffect(() => {
    readTask();
  });
  console.log(basket);
  return (
    <div class="w-[300px] mt-9   relative text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full" src={product.url} alt="img" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.price} $
          </h5>
        </a>

        <button
          onClick={() => addToBasket(product)}
          type="button"
          class="text-white   bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add to Basket
        </button>
      </div>
      <h1
        class="absolute bottom-2 right-3 text-xl text-yellow-500 cursor-pointer"
        onClick={() => deleteProduct(product)}
      >
        {<RiDeleteBinLine />}
      </h1>
    </div>
  );
};

export default ProductCard;
