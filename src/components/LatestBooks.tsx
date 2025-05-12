import { useAppSelector } from "../redux/hooks";
import BookList from "./BookList";

const LatestBooks = () => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

  return <BookList title="New Arrivals" products={newProducts} />;
};

export default LatestBooks;
