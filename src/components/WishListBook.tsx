import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/features/wishList/wishListSlice";
import {
  addToReading,
  removeFromReading,
} from "../redux/features/reading/readingSlice";
import {
  addToFinished,
  removeFromFinished,
} from "../redux/features/finished/finishedSlice";
import { useAppSelector } from "../redux/hook";
import { useUpdateUserMutation } from "../redux/features/user/userApi";
import { toast } from "react-toastify";

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

interface MyComponentProps {
  book: IBook;
  payload: string;
}

const WishListBook: React.FC<MyComponentProps> = ({ book, payload }) => {
  const dispatch = useDispatch();

  const { user } = useAppSelector((state) => state.user);

  const [updateUserMutation, {}] = useUpdateUserMutation();

  let date;
  if (book?.publicationTime) {
    date = book?.publicationTime.toString().split("T")[0];
  }

  const handleWishList = () => {
    if (payload === "Make Reading") {
      dispatch(removeFromWishList(book));
      dispatch(addToReading(book));
      const updatedData = {
        email: user?.email,
        reading: [book?._id],
      };
      updateUserMutation(updatedData);
      toast.success("Book is added in Reading");
    }
    if (payload === "Make Finished") {
      dispatch(removeFromReading(book));
      dispatch(addToFinished(book));
      const updatedData = {
        email: user?.email,
        finished: [book?._id],
      };
      updateUserMutation(updatedData);
      toast.success("Book is added in Finished");
    }
    if (payload === "Remove") {
      dispatch(removeFromFinished(book));
      toast.success("Remove is successfull.");
    }
  };

  return (
    <div className="rounded-lg border">
      <div>
        <Link to={`/book-details/${book?._id}`}>
          {" "}
          <div className="rounded-t-md bg-slate-200 px-5 py-3 w-[160px] h-[190px]">
            <img width={120} src={book?.image} alt="" />
          </div>
        </Link>
        <div className="px-2">
          <p className="text-xs text-slate-400">Published: {date}</p>
          <p className="text-md text-slate-500 font-semibold">{book?.title}</p>
          <p className="text-sm text-slate-500 font-semibold">{book?.author}</p>
          <h4 className="text-sm text-slate-500 font-semibold">
            {book?.genre}
          </h4>
        </div>
        <div
          onClick={handleWishList}
          className="btn btn-sm rounded-t-sm bg-teal-700 hover:bg-teal-800 text-white font-semibold w-full"
        >
          {payload}
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
