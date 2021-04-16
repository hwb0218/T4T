import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { destination, price, rating } from "./Filter/Datas";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import SearchBox from "./SearchBox/SearchBox";

const RandingPage = ({ location }) => {
  const query = queryString.parse(location.search);
  const filters = useSelector((state) => state.filters);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [searchedProducts, setSearchedProducts] = useState([]);
  //  currentPage, products redux
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts =
    searchedProducts.length > 0
      ? searchedProducts.slice(indexOfFirstPost, indexOfLastPost)
      : products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchProducts = async () => {
      setSearchedProducts([]);
      setLoading(true);
      const res = await axios.post("/api/product/products", { filters });
      setCurrentPage(query.page ? Number(query.page) : 1);
      setProducts(res.data.productInfo);
      setLoading(false);
    };
    fetchProducts();
  }, [filters]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const updateProducts = (searchTerm) => setSearchedProducts(searchTerm);

  return (
    <>
      <CarouselSlide />
      <Filter destination={destination} price={price} rating={rating} />
      <SearchBox products={products} updateProducts={updateProducts} />
      <Cards products={currentProducts} loading={loading} />
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={
          searchedProducts.length > 0
            ? searchedProducts.length
            : products.length
        }
        paginate={paginate}
      />
    </>
  );
};

export default withRouter(RandingPage);
