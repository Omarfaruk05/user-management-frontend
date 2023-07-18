import WishListBook from "../components/WishListBook";
import { useAppSelector } from "../redux/hook";

const Reading = () => {
  const { books } = useAppSelector((state) => state.reading);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-12 min-h-[70vh]">
        <div>
          <div>
            <h2 className="text-center mb-4 text-4xl font-semibold font-serif text-slate-500">
              Your all Reading Book list is here.
            </h2>
          </div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {books.map((x) => (
                <WishListBook
                  key={x?._id}
                  book={x}
                  payload="Make Finished"
                ></WishListBook>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
