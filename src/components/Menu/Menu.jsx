import { useContext, useState } from "react";
import { categories } from "../Categories/Categories";
import { CartContext } from "../Context/CartContext";
import { menuItems } from "../MenuItems/MenuItems";

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("Orders Per Kilo");

  const activeData = categories.find((c) => c.id === activeCategory);
  const items = menuItems[activeCategory] || [];

  return (
    <div className="min-h-screen">
      <main className="py-12">
        <div className="container mx-auto md:px-20">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#fb571d] mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our delicious selection of fresh shrimp dishes and
              seafood specialties
            </p>
          </div>


          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-gray-200 text-[#dd4e1b]"
                    : "bg-gray-100 text-[#fb571d] hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>


          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#fb571d]">
              {activeData?.name}
            </h2>
            <p className="text-gray-600">{activeData?.desc}</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl bg-white shadow-sm hover:shadow-md transition flex flex-col"
              >

                <div className="relative h-40 w-full">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col items-center text-center flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    EGP {item.price}
                  </h3>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-auto w-full bg-[#fb571d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
