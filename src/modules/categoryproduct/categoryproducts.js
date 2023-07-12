import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
const CategoryProduct = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Sidebar />
      </div>
    </>
  );
};

export default CategoryProduct;
