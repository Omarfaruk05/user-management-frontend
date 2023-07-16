import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "../redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";

interface IFormInput {
  image: string;
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationTime: Date;
}

const CreateBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const [createBookMutation, {}] = useCreateBookMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    createBookMutation(data);
    reset();
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8 mt-2">
        <div className="text-center mx-12">
          <h1 className="text-4xl font-bold font-serif mb-8">Create Book</h1>

          {/* form  */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Enter Image</p>
                <input
                  className="input input-bordered w-96 mb-3"
                  type="text"
                  placeholder="Image"
                  {...register("image", {
                    required: "Image is required",
                  })}
                  aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.image.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Enter Title</p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Title"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Enter Author</p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Author"
                  {...register("author", {
                    required: "Author is required",
                  })}
                  aria-invalid={errors.author ? "true" : "false"}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">
                  Enter Author Email
                </p>
                <input
                  type="email"
                  className="input input-bordered w-96 mb-3 bg-gray-200 font-semibold"
                  placeholder="Author Enail"
                  value={user?.email!}
                  readOnly
                  {...register("authorEmail", {
                    required: "Author Email is required",
                  })}
                  aria-invalid={errors.authorEmail ? "true" : "false"}
                />
                {errors.authorEmail && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.authorEmail.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold ml-2">Enter Genre</p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Genre"
                  {...register("genre", {
                    required: "Genre is required",
                  })}
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
                  Enter Publication Time
                </p>
                <input
                  type="text"
                  className="input input-bordered w-96 mb-3"
                  placeholder="Publication Time"
                  {...register("publicationTime", {
                    required: "Pbulication time is required",
                  })}
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
                  value="Create"
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

export default CreateBook;
