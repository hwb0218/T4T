import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { destination, price, rating } from "./Filter/Datas";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import SearchBox from "./SearchBox/SearchBox";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import { minMaxPageNumberLimit } from "../../../_actions/paginationActions";

const RandingPage = ({ location }) => {
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const query = queryString.parse(location.search);
  const filters = useSelector((state) => state.filters);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts =
    searchedProducts.length > 0
      ? searchedProducts.slice(indexOfFirstPost, indexOfLastPost)
      : products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setSearchedProducts([]);
        showLoader();
        const res = await axios.post("/api/product/products", { filters });
        hideLoader();
        setCurrentPage(query.page ? Number(query.page) : 1);
        setProducts(res.data.productInfo);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
    return () => hideLoader();
  }, [filters]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const updateProducts = (searchTerm) => setSearchedProducts(searchTerm);

  return (
    <>
      <CarouselSlide />
      <Filter destination={destination} price={price} rating={rating} />
      <SearchBox
        products={products}
        updateProducts={updateProducts}
        paginate={paginate}
      />
      <Cards products={currentProducts} />
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
      {loader}
    </>
  );
};

export default withRouter(RandingPage);
