import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { destination, price, rating } from "./Filter/Datas";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import SearchBox from "./SearchBox/SearchBox";

const RandingPage = () => {
  const filters = useSelector((state) => state.filters);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  //  currentPage, product redux
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(async () => {
    setLoading(true);
    console.log(filters);
    const res = await axios.post("/api/product/products", { filters });
    setProducts(res.data.productInfo);
    setLoading(false);
  }, [filters]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CarouselSlide />
      <Filter destination={destination} price={price} rating={rating} />
      <SearchBox />
      <Cards products={currentProducts} loading={loading} />
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        indexOfLastPost={indexOfLastPost}
      />
    </>
  );
};

export default RandingPage;
