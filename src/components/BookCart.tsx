import { Link, useLocation } from "react-router-dom";

interface IBook {
  _id: string;
  image: string;
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationTime: Date;
  reviews: string[];
}

const BookCart = (book: IBook) => {
  const date = book?.publicationTime.toString().split("T")[0];

  console.log();
  const navigateToDetails = () => {};
  return (
    <div className="border">
      <div>
        <Link to={`/book-details/${book?._id}`}>
          {" "}
          <div
            onClick={navigateToDetails}
            className="bg-slate-200 px-5 py-3 w-[160px] h-[190px]"
          >
            <img width={120} src={book?.image} alt="" />
          </div>
        </Link>
        <div className="px-2">
          <p className="text-xs text-gray-500">Published: {date}</p>
          <p className="text-md font-semibold">{book?.title}</p>
          <p className="text-sm font-semibold">{book?.author}</p>
          <h4 className="text-sm font-semibold">{book?.genre}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookCart;
