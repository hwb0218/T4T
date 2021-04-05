import React, { useEffect, useState } from "react";
import axios from "axios";
import { destination } from "./Filter/Datas";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import Filter from "./Filter/Filter";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";

const productsPerPage = 3;

const RandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get("/api/product/products");
    setProducts(res.data.productInfo);
    setLoading(false);
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CarouselSlide />
      <Filter list={destination} />
      <Cards products={currentProducts} loading={loading} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default RandingPage;
