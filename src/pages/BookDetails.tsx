import { Link, useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useForm } from "react-hook-form";
import { addToWishList } from "../redux/features/wishList/wishListSlice";

interface IComment {
  review: string;
}

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useGetSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.user);

  const [updateBookMutation, {}] = useUpdateBookMutation();

  const book = data?.data;
  let date;
  if (book?.publicationTime) {
    date = book?.publicationTime.toString().split("T")[0];
  }

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

  return (
    <div>
      {book && (
        <div className="max-w-7xl mx-auto px-2">
          <div className="md:flex gap-4">
            <div className="bg-slate-200  md:w-1/3 flex justify-center">
              <img src={book?.image} alt="book photo" />
            </div>
            <div className="md:w-2/3 mt-12 mx-4">
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
                    <button className="btn text-white mr-2 px-[60px] mb-2 bg-red-500 hover:bg-red-600">
                      Delete Book
                    </button>
                  </>
                )}
                <button
                  onClick={() => dispatch(addToWishList(book))}
                  className="btn text-white mr-2 px-12 mb-2 bg-slate-500 hover:bg-slate-600"
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className=" ml-4 mt-8 mb-4">
            <h2 className="text-2xl font-bold mb-3">Reviews:</h2>
            <div className="form-control">
              <div className="input-group">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Your Regiew"
                    type="text"
                    className="input input-bordered"
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
      )}
    </div>
  );
};

export default BookDetails;
