import "../home/home.css";
import Hero from "../../components/hero/hero";
import Statistic from "../../components/statistic/statistic";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/product/product";
import Pagination from "../../components/pagination/pagination ";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  useEffect(() => {
    const axiosProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosProduct();
  }, []);

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
      <Hero />
      <h2 className="text-6xl font-bold text-center">Products</h2>
      {products.length > 0 ? (
        <Product products={currentProduct} totalProduct={products.length} />
      ) : (
        <span class="loader"></span>
      )}
      <Pagination
        currentPage={currentPage}
        pageNumber={pageNumber}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <Statistic />
    </>
  );
};

export default Home;
