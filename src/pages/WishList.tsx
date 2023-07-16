import WishListBook from "../components/WishListBook";
import { useAppSelector } from "../redux/hook";

const WishList = () => {
  const { books } = useAppSelector((state) => state.wishList);

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-12 min-h-[70vh]">
        <div>
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
