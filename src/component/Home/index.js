import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { productAll, count, setCount, setProductAll } =
    useContext(ProductContext);
  const errorMassege = (sms) =>
    toast.error(sms, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const saccesMassege = () =>
    toast.success("Тандаган буюмунуз ийгиликтуу кошулду.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      addProduct();
    }
  };

  const addProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      errorMassege("Бош орундарды толтурунуз!");
    } else if (productAll.some((el) => el.name === productName)) {
      errorMassege("Мындай буюум бар!!!");
    } else {
      let result = JSON.parse(localStorage.getItem("product")) || [];
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productUrl,
        name: productName,
        price: productPrice,
        quantity: 1,
      };
      let res = [...result, newProduct];
      setProductAll(res);
      localStorage.setItem("product", JSON.stringify(res));
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      saccesMassege();
    }
  };
  // console.log(productAll)
  return (
    <div className="container">
      <div className="flex items-center justify-center flex-col gap-8 mt-20">
        <div class="relative z-0 w-[500px] mb-5 group">
          <input
            onKeyDown={(e) => KeyDown(e)}
            onChange={(e) => setProductUrl(e.target.value)}
            value={productUrl}
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Url...
          </label>
        </div>
        <div class="relative z-0 w-[500px] mb-5 group">
          <input
            onKeyDown={(e) => KeyDown(e)}
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name...
          </label>
        </div>
        <div class="relative z-0 w-[500px] mb-5 group">
          <input
            onKeyDown={(e) => KeyDown(e)}
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price...
          </label>
        </div>
        <button
          onClick={() => addProduct()}
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add Product
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
