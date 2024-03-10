import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);
  function getBasket() {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  }

  const addQuantity = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };
  const decrementBasket = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : el.quantity }
        : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };

  const readTask = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };
  const deleteBasket = (btn) => {
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((el) => el.id !== btn)])
    );
    readTask();
  };
  useEffect(() => {
    getBasket();
    readTask();
  }, []);

  let nav = useNavigate()
  let total = basket.map((el) => el.quantity * el.price);
  return (
    <div className="container">
      {basket.length ? (
        <div class="relative overflow-x-auto  mt-9 shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-[blue] ">
                  Product Img
                </th>
                <th scope="col" class="px-6 py-3 text-white ">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-[red] ">
                  Price $
                </th>
                <th scope="col" class="px-6 py-3 text-[yellow]">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3 text-[olive]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {basket.map((el, idx) => (
                <tr
                  key={idx}
                  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img className="img" src={el.url} alt="img" width={100} />
                  </th>
                  <td class="px-6 py-4">
                    <span className="text-white text-xl">( {el.name} )</span>
                  </td>
                  <td class="px-6 py-4">
                    <span className="text-[red] text-xl">
                      {el.price * el.quantity} $
                    </span>
                  </td>
                  <td class="px-6 py-4 flex items-center gap-6 mt-5">
                    <button onClick={() => decrementBasket(el)} className="btn">
                      -
                    </button>
                    <h1>
                      <span className="text-white text-2xl">{el.quantity}</span>
                    </h1>
                    <button onClick={() => addQuantity(el)} className="btn2">
                      +
                    </button>
                  </td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => deleteBasket(el.id)}
                      type="button"
                      class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="text-white text-3xl mt-6">
            TotalPrice :{" "}
            <span className="text-[yellow] text-2xl">
              {!!total && total.reduce((acc, el) => acc + el)}$
            </span>
          </h1>
        </div>
      ) : (
        <>
          <div
            class="flex items-center  justify-around  w-[600px] mt-20 ml-96 p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Сизде азырынча буюмунуз жок!</span>
            </div>
            <button onClick={() => nav("/product") }
              type="button"
              class="text-white flex items-center  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Teal
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
