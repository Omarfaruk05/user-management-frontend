import book1 from "../assets/1689173080.webp";
import WishListBook from "../components/WishListBook";
import { useAppSelector } from "../redux/hook";

const Finished = () => {
  const { books } = useAppSelector((state) => state.finished);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-12">
        <div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {books.map((x) => (
                <WishListBook
                  key={x?._id}
                  book={x}
                  payload="Remove"
                ></WishListBook>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finished;
