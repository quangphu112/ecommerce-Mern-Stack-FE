import React, { useState } from "react";

const Product = ({ products }) => {
  return (
    <>
      <section className="text-gray-600 body-font col-span-5">
        <div className="container px-5 py-24 m-auto ">
          <div className="flex flex-wrap -m-4">
            {products.map((products) => {
              const { id, title, description, price, image, category } =
                products;
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 m-0.3 cursor-pointer">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="m-auto">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1">${price}</p>
                  </div>
                  <div className="text-center">
                    <a href={`/product/${id}`}>
                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Xem Chi Tiết
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
