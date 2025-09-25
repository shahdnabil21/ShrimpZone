// Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } =
    useContext(CartContext);

  return (
    <div className="container mx-auto md:px-20 mt-10 mb-36 p-4">
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center text-2xl">
          🛒 Your cart is empty.
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            <h1 className="text-3xl font-bold mb-6 text-center bg-[#fb581dd1] text-white">
              Your Cart
            </h1>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "/imgs/placeholder.png"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">
                    {item.name} × {item.quantity}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="text-green-700 hover:underline"
                  >
                    <i class="fa-solid fa-plus cursor-pointer"></i>{" "}
                  </button>
                  <span className="text-gray-700">
                    EGP {(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    <i class="fa-solid fa-minus cursor-pointer"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          

          <div className="flex flex-col  items-center gap-4">
              <span className="font-bold text-lg">
              Total: EGP{" "}
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
                 <button
              
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-900 transition"
            >
              CheakOut
            </button>
          </div>
          </div>
       
        </>
      )}
    </div>
  );
}
