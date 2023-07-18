import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useUpdateUserMutation } from "../redux/features/user/userApi";
import { addToWishList } from "../redux/features/wishList/wishListSlice";

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
  const dispatch = useDispatch();

  const { user } = useAppSelector((state) => state.user);

  const [updateUserMutation, {}] = useUpdateUserMutation();
  let date;
  if (book?.publicationTime) {
    date = book?.publicationTime.toString().split("T")[0];
  }

  const handleWishList = () => {
    dispatch(addToWishList(book));
    const updatedData = {
      email: user?.email,
      wishList: [book?._id],
    };
    updateUserMutation(updatedData);
  };

  return (
    <div className="rounded-lg border">
      <div>
        <Link to={`/book-details/${book?._id}`}>
          {" "}
          <div className="rounded-t-md bg-blue-50 px-5 py-3 w-[160px] h-[190px]">
            <img width={120} src={book?.image} alt="" />
          </div>
        </Link>
        <div className="px-2">
          <p className="text-xs text-slate-400 text-gray-500">
            Published: {date}
          </p>
          <p className="text-md text-slate-500 font-semibold">{book?.title}</p>
          <p className="text-sm text-slate-500 font-semibold">{book?.author}</p>
          <h4 className="text-sm text-slate-500 font-semibold">
            {book?.genre}
          </h4>
        </div>
        {user?.email && (
          <div
            onClick={handleWishList}
            className="btn btn-sm rounded-t-sm bg-teal-600 text-white hover:bg-real-800 font-semibold w-full"
          >
            Make WishList
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCart;
