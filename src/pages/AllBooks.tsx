import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import LoadingCart from "../components/LoadingCart";
import BookCart from "../components/BookCart";
import { IBook } from "../components/BestBooks";
import { useForm } from "react-hook-form";

const AllBooks = () => {
  const [comic, setComic] = useState(false);
  const [fiction, setFiction] = useState(false);
  const [novel, setNovel] = useState(false);
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [searchData, setSearchData] = useState("");
  console.log(publicationYear);

  let comicValue;
  let fictionValue;
  let novelValue;

  comic && (comicValue = "comic");
  fiction && (fictionValue = "fiction");
  novel && (novelValue = "novel");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleComic = () => {
    setGenre("comic");
    setComic(true);
    setFiction(false);
    setNovel(false);
  };
  const handleFiction = () => {
    setGenre("fiction");
    setComic(false);
    setFiction(true);
    setNovel(false);
  };
  const handleNovel = () => {
    setGenre("novel");
    setComic(false);
    setFiction(false);
    setNovel(true);
  };

  console.log(publicationYear);
  interface ISearch {
    search: string;
  }
  const { register, handleSubmit, reset } = useForm<ISearch>();

  const onSubmit = (data: ISearch) => {
    const search = data.search;
    setSearchData(search);
  };
  const payload = {
    limit: "",
    searchTerm: searchData,
    genre: genre,
    publicationTime: publicationYear,
  };

  const { data, isLoading, isError } = useGetBooksQuery(payload);

  const books = data?.data;
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4 min-h-[70vh]">
        <div>
          <div>
            <div className="mb-8 flex gap-4 justify-center">
              {/* searching  */}
              <div className="form-control w-2/5">
                <div className="input-group">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      className="input input-bordered"
                      {...register("search")}
                    />
                    <input
                      type="submit"
                      value={"search"}
                      className="btn bg-purple-300"
                    />
                  </form>
                </div>
              </div>
              {/* filtering  */}
              <div>
                <div className="dropdown  dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn bg-gray-500 text-white hover:bg-gray-600"
                  >
                    Filter By Genre
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96 "
                  >
                    <div className="grid grid-cols-2 gap-4 p-2">
                      <div>
                        <h2 className="text-xl font-semibold">Genre</h2>
                        <hr />
                        <div className="form-control w-16">
                          <label className="cursor-pointer label">
                            <span className="label-text  btn btn-sm mr-1">
                              Comic
                            </span>
                            <input
                              onClick={handleComic}
                              type="checkbox"
                              checked={comic}
                              className="checkbox checkbox-success"
                            />
                          </label>
                        </div>
                        <div className="form-control w-16">
                          <label className="cursor-pointer label">
                            <span className="label-text  btn btn-sm mr-1">
                              Fiction
                            </span>
                            <input
                              onClick={handleFiction}
                              type="checkbox"
                              checked={fiction}
                              className="checkbox checkbox-success"
                            />
                          </label>
                        </div>
                        <div className="form-control w-16">
                          <label className="cursor-pointer label">
                            <span className="label-text  btn btn-sm mr-1 btn">
                              Novel
                            </span>
                            <input
                              onClick={handleNovel}
                              type="checkbox"
                              checked={novel}
                              className="checkbox checkbox-success"
                            />
                          </label>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">
                          Publication Year
                        </h4>
                        <hr />
                        <div>
                          <input
                            onChange={(e) => setPublicationYear(e.target.value)}
                            value={publicationYear}
                            className="input input-bordered input-sm mt-1"
                            type="number"
                          />
                        </div>

                        <div>
                          <button className="btn btn-sm bg-teal-500 text-white hover:bg-teal-600 w-full mt-20">
                            Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {isLoading &&
                nums.map((x) => <LoadingCart key={x}></LoadingCart>)}
              {books &&
                books.map((book: IBook) => (
                  <BookCart {...book} key={book._id}></BookCart>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
