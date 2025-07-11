
import { useAppSelector } from "../redux/hooks";
import BookList from "../components/BookList";

const Wishlist = () => {
  const wishlist = useAppSelector((state) => state.productReducer.wishlist);
  return (
    <div className="container mx-auto font-karla min-h-[83vh]">
      {wishlist.length > 0 ? (
        <BookList title="Your Wishlist" products={wishlist} />
      ) : (
        <div className="flex flex-col justify-center items-center p-8">
          <img src="/emptyCart.jpg" className="w-60" alt="empty" />
          <p className="text-center text-xl font-semibold my-2 dark:text-white">
            Your wishlist is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
