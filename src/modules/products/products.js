import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/product/product";
import Pagination from "../../components/pagination/pagination ";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  useEffect(() => {
    const axiosProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosProduct();
  }, []);

  const handleUpdateDataProduct = (newData) => {
    setProducts(newData);
    console.log(Product)
  };
  
  // Get current product
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumber.push(i);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next page
  const nextPage = () => setCurrentPage(currentPage + 1);

  // Previous page
  const previousPage = () => setCurrentPage(currentPage - 1);
  return (
    <>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center grid grid-cols-6">
        <Sidebar handleUpdateDataProduct={handleUpdateDataProduct} />
        {products.length > 0 ? (
          <Product products={currentProduct} />
        ) : (
          <span class="loader"></span>
        )}
        {/* <Pagination
          currentPage={currentPage}
          pageNumber={pageNumber}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
        /> */}
      </div>
    </>
  );
};

export default Products;
