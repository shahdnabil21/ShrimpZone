import React from "react";
import logo from "../../assets/imgs/Shrimpzone.png";
import img1 from "../../assets/imgs/menuimgs/soups/seaFood Creamy soup.jpg";
import img2 from "../../assets/imgs/menuimgs/Casseroles/Dynamite Casserole.jpg";
import img3 from "../../assets/imgs/menuimgs/maindish/grield seafood.jpg";

export default function Home() {
  return (
    

    <div className=" container mx-auto">
      <hr className="bg-[#fb571d] h-0.5 border-0 mt-2" />
      <section className="h-[80vh] bg-amber-50 flex flex-col md:flex-row justify-center items-center px-6 md:px-40 gap-5">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col justify-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#fb571d] drop-shadow-lg leading-tight">
            Welcome to ShrimpZone
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-orange-500 max-w-md">
            Fresh seafood, cooked with love and served with passion.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#db3c03] text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-[#b03509] transition">
            View Menu
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={logo}
            alt="ShrimpZone Logo"
            className="w-64 md:w-80 lg:w-96 drop-shadow-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <hr className="bg-[#fb571d] h-0.5 border-0" />
      <section className="py-16 px-6 md:px-20 bg-amber-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#fb571d] mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          At ShrimpZone, we bring the ocean’s freshest catch right to your
          plate. Every dish is seasoned with authentic spices and cooked to
          perfection. Whether you’re craving a light bite or a seafood feast,
          we’ve got something for you.
        </p>
      </section>
      <hr className="bg-[#fb571d] h-0.5 border-0" />

      {/* Featured Dishes Section */}
      <section className="py-16 px-6 md:px-20 bg-amber-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#fb571d] mb-10">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dish 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
            <img
              src={img1}
              alt="Grilled Shrimp"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#fb571d] ">
                Seafood With Cream Soup
              </h3>
              <p className="text-gray-600 mt-2">EGP 295</p>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={img2} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#fb571d] ">
                Dynamite Casserole
              </h3>
              <p className="text-gray-600 mt-2">EGP 110</p>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
            <img
              src={img3}
              alt="Fried Shrimp"
              className="w-full  h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#fb571d] ">
                Mix Grilled Seafood
              </h3>
              <p className="text-gray-600 mt-2">EGP 90</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
