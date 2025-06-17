import React, { type FC } from 'react'
import { useAppSelector } from "../redux/hooks";
import BookList from './BookList';

const AllBooks = () => {
  const featuredProducts = useAppSelector(
    (state) => state.productReducer.featuredProducts
  );

  return <BookList title="ALL Products" products={featuredProducts} />;
};

export default AllBooks;
