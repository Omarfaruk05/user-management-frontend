/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useForm } from "react-hook-form";
import { addToWishList } from "../redux/features/wishList/wishListSlice";
import { useUpdateUserMutation } from "../redux/features/user/userApi";
import { toast } from "react-toastify";
import RelatedBooks from "./RelatedBooks";
import ScrollToTop from "../components/ScrollToTop";

interface IComment {
  review: string;
}

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useGetSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.user);

  const [updateBookMutation, {}] = useUpdateBookMutation();

  const [updateUserMutation, {}] = useUpdateUserMutation();
  const [deleteBookMutation, result] = useDeleteBookMutation();

  const book = data?.data;
  let date;
  if (book?.publicationTime) {
    date = book?.publicationTime.toString().split("T")[0];
  }

  const handleWishList = () => {
    dispatch(addToWishList(book));
    const updatedData = {
      email: user?.email,
      wishList: book?._id,
    };
    updateUserMutation(updatedData);
    toast.success("Book is added in Wishlist");
  };

  const { register, handleSubmit, reset } = useForm<IComment>();

  const onSubmit = (data: IComment) => {
    const review = data.review;

    const updatedData = {
      email: book?.authorEmail,
      id,
      reviews: [review, ...book.reviews],
    };
    console.log(updatedData);
    updateBookMutation(updatedData);
    reset();
  };

  const handleDelete = () => {
    const deletedData = {
      id: book?._id,
      email: user?.email,
    };

    deleteBookMutation(deletedData);

    toast(data?.data?.message);

    navigate("/");
    console.log(result);
  };

  return (
    <div className="min-h-[50vh]">
      <ScrollToTop />
      {book ? (
        <div className="max-w-7xl mx-auto px-2 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
            <div className="bg-slate-200 rounded-md min-h-[450px] flex justify-center">
              <img className="rounded-md" src={book?.image} alt="book photo" />
            </div>
            <div className="text-center lg:text-start">
              <div>
                <h4 className="text-2xl font-semibold ">
                  Title: {book?.title}{" "}
                </h4>
                <h4 className="text-2xl font-semibold ">
                  Author: {book?.author}
                </h4>
                <h4 className="text-2xl font-semibold ">
                  Genre: {book?.genre}
                </h4>
                <p className="text-md font-semibold">
                  Publication Date: {date}
                </p>
              </div>
              <div className="mt-4">
                {user?.email === book?.authorEmail && (
                  <>
                    <Link to={`/update-book/${book?._id}`}>
                      {" "}
                      <button className="btn text-white mr-2 px-16 mb-2 bg-green-500 hover:bg-green-600">
                        Edite Book
                      </button>
                    </Link>
                    <label
                      className="btn text-white mr-2 px-[60px] mb-2 bg-red-500 hover:bg-red-600"
                      htmlFor="my_modal"
                    >
                      Delete Book
                    </label>
                  </>
                )}
                {user?.email && (
                  <button
                    onClick={handleWishList}
                    className="btn text-white mr-2 px-12 mb-2 bg-slate-500 hover:bg-slate-600"
                  >
                    Add To Wishlist
                  </button>
                )}
              </div>
              {/* modal part start here  */}
              <input type="checkbox" id="my_modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-red-500">Alart</h3>
                  <p className="py-4">
                    Are you sure that you want to{" "}
                    <span className="text-red-500 font-semibold uppercase">
                      delete
                    </span>{" "}
                    the book?
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my_modal"
                      className="btn btn-sm rounded-md bg-teal-700 text-white"
                    >
                      Cancel
                    </label>
                    <label
                      onClick={handleDelete}
                      htmlFor="my_modal"
                      className="btn btn-sm rounded-md bg-red-500 text-white"
                    >
                      Delete
                    </label>
                  </div>
                </div>
              </div>
              {/* modal part end here  */}
            </div>
            <RelatedBooks genre={book?.genre} />
          </div>
          <div className=" mt-8 mb-4">
            <h2 className="text-2xl font-bold mb-3 font-serif">Reviews:</h2>
            <div className="form-control">
              <div className="input-group">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Your Regiew"
                    type="text"
                    className="input input-bordered mr-2"
                    {...register("review")}
                  />
                  <input
                    type="submit"
                    value={"Comment"}
                    className="btn bg-lime-500 "
                  />
                </form>
              </div>
            </div>
            {book.reviews.map((review: string) => (
              <p className="mb-4 mt-4">
                <span className="bg-slate-200 px-2 py-1 rounded-lg mb-2">
                  {review}
                </span>
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-[70vh] flex justify-center items-center">
          <div>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
