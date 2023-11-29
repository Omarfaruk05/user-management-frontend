import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import BookCart from "./BookCart";
import LoadingCart from "./LoadingCart";

export interface IBook {
  _id: string;
  image: string;
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationTime: Date;
  reviews: string[];
}

const BestBooks = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const { data, isLoading } = useGetBooksQuery({
    limit: 7,
    searchTerm: "",
    genre: "",
    publicationTime: "",
  });

  const books = data?.data;
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <div>
          <h2 className="text-4xl text-center text-slate-600 font-semibold font-serif mb-16">
            The best books and audiobooks are waiting for you
          </h2>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {isLoading &&
                nums.map((x) => <LoadingCart key={x}></LoadingCart>)}
              {books &&
                books?.map((book: IBook) => (
                  <BookCart {...book} key={book._id}></BookCart>
                ))}
            </div>
            <div className="text-center">
              <Link to={"all-books"}>
                <button className="border py-1 px-2 font-semibold rounded-sm border-teal-600 transition-all hover:border-2 hover:rounded-md my-4 h-9">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBooks;
