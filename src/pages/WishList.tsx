import WishListBook from "../components/WishListBook";
import { useAppSelector } from "../redux/hook";

const WishList = () => {
  const { books } = useAppSelector((state) => state.wishList);

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-8 min-h-[70vh]">
        <div>
          <div>
            <h2 className="text-center mb-4 text-4xl font-semibold font-serif text-slate-500">
              Your all wish list is here.
            </h2>
          </div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {books.map((x) => (
                <WishListBook
                  key={x?._id}
                  book={x}
                  payload="Make Reading"
                ></WishListBook>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
