/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";
import { IBook } from "../components/BestBooks";
import BookCart from "../components/BookCart";
import LoadingCart from "../components/LoadingCart";
import { useGetBooksQuery } from "../redux/features/books/bookApi";

const RelatedBooks = ({ genre }: { genre: string }) => {
  console.log(genre);
  const { data, isLoading } = useGetBooksQuery({
    limit: 4,
    searchTerm: "",
    genre,
    publicationTime: "",
  });
  const nums = [1, 2, 3];
  console.log(data);

  const books: IBook[] = data?.data;
  return (
    <div>
      <h2 className="text-xl font-semibold my-4 text-center">Related Books</h2>
      <div className="flex  gap-4 justify-center  items-center flex-wrap">
        {isLoading && nums.map((x) => <LoadingCart key={x}></LoadingCart>)}
        {books &&
          books?.map((book: IBook) => (
            <BookCart {...book} key={book._id}></BookCart>
          ))}
      </div>
      <div className="text-center">
        <Link to={"/all-books"}>
          <button className="border py-1 px-2 font-semibold rounded-sm border-teal-600 transition-all hover:border-2 hover:rounded-md my-4 h-9">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedBooks;
