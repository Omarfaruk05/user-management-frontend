import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";

interface IFormInput {
  email: string | null;
  id: string;
  image: string;
  title: string;
  author: string;
  genre: string;
  publicationTime: Date;
}

const UpdateBook = () => {
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const [updateBookMutation, result] = useUpdateBookMutation();

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateBookMutation({
      email: user?.email,
      id,
      image: data.image,
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationTime: data.publicationTime,
    });
    reset();
  };
  if (result?.isError) {
    toast.error("Invalide Type Error.");
  }
  if (result?.isSuccess) {
    toast.success(result?.data?.message);
  }
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8 mt-2">
        <div className="text-center mx-12">
          <h1 className="text-4xl font-bold font-serif mb-8">Update Book</h1>

          {/* form  */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Update Image</p>
                <input
                  className="input input-bordered w-96 mb-3"
                  type="text"
                  placeholder="Image"
                  {...register("image", {
                    required: "Image is required",
                  })}
                  defaultValue={book?.image}
                  aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.image.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Update Title</p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Title"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  defaultValue={book?.title}
                  aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">
                  Update Author
                </p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Author"
                  {...register("author", {
                    required: "Author is required",
                  })}
                  defaultValue={book?.author}
                  aria-invalid={errors.author ? "true" : "false"}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Update Genre</p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Genre"
                  {...register("genre", {
                    required: "Genre is required",
                  })}
                  defaultValue={book?.genre}
                  aria-invalid={errors.author ? "true" : "false"}
                />
                {errors.genre && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.genre.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">
                  Update Publication Time
                </p>
                <input
                  type="number"
                  className="input input-bordered w-96 mb-3"
                  placeholder="YY-MM-DD"
                  {...register("publicationTime", {
                    valueAsNumber: true,
                    required: "Publication Time is required",
                  })}
                  defaultValue={book?.publicationTime}
                  aria-invalid={errors.author ? "true" : "false"}
                />
                {errors.publicationTime && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.publicationTime.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="submit"
                  value="Update"
                  className="bg-teal-700 btn text-white w-96 hover:bg-teal-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
