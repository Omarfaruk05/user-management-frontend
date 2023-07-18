import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import LoadingCart from "../components/LoadingCart";
import BookCart from "../components/BookCart";
import { IBook } from "../components/BestBooks";
import { useForm } from "react-hook-form";

const AllBooks = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [clear, setClear] = useState(false);
  const [comic, setComic] = useState(false);
  const [fiction, setFiction] = useState(false);
  const [novel, setNovel] = useState(false);
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [searchData, setSearchData] = useState("");
  console.log(publicationYear);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const handleClear = () => {
    setGenre("");
    setComic(false);
    setFiction(false);
    setNovel(false);
    setClear(true);
  };
  const handleComic = () => {
    setGenre("comic");
    setComic(true);
    setFiction(false);
    setNovel(false);
    setClear(false);
  };
  const handleFiction = () => {
    setGenre("fiction");
    setComic(false);
    setFiction(true);
    setClear(false);
    setNovel(false);
  };
  const handleNovel = () => {
    setGenre("novel");
    setComic(false);
    setFiction(false);
    setClear(false);
    setNovel(true);
  };

  console.log(publicationYear);
  interface ISearch {
    search: string;
  }
  const { register, handleSubmit } = useForm<ISearch>();

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

  const { data, isLoading } = useGetBooksQuery(payload);

  const books = data?.data;
  return (
    <div>
      <div className="min-h-[70vh]">
        <div>
          <div className="bg-[#fbf9f8] pt-4 pb-1">
            <div className="mb-2 flex gap-2 justify-center">
              {/* searching  */}
              <div className="form-control">
                <div className="input-group">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex">
                    <input
                      type="text"
                      className="input input-bordered mr-2 md:w-96"
                      {...register("search")}
                    />
                    <input
                      type="submit"
                      value={"search"}
                      className="btn bg-teal-600 text-white"
                    ></input>
                  </form>
                </div>
              </div>
              {/* filtering  */}
              <div>
                <div
                  onClick={() => setShowFilter(!showFilter)}
                  className="btn bg-gray-600 text-white hover:bg-gray-700"
                >
                  Filter
                </div>
              </div>
            </div>
          </div>
          <div className={showFilter ? "block bg-[#fbf9f8] mb-4 " : "hidden "}>
            <div className="flex justify-center gap-4 p-2">
              <div>
                <h2 className="text-xl font-semibold">Genre</h2>
                <hr />
                <div className="form-control w-16">
                  <label className="cursor-pointer label">
                    <span className="label-text btn btn-sm bg-teal-500 text-white mr-2 -ml-2">
                      Clear
                    </span>
                    <input
                      onClick={handleClear}
                      type="checkbox"
                      checked={clear}
                      className="checkbox checkbox-success"
                    />
                  </label>
                </div>
                <div className="form-control w-16">
                  <label className="cursor-pointer label">
                    <span className="label-text btn btn-sm mr-2 -ml-2">
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
                    <span className="label-text  btn btn-sm mr-2 -ml-2">
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
                    <span className="label-text  btn btn-sm mr-2 -ml-2 btn">
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
              <div className="w-[1px] mt-7 ml-12 bg-gray-300 rounded-full"></div>
              <div className="">
                <h4 className="text-xl font-semibold">Publication Year</h4>
                <hr />
                <div>
                  <input
                    onChange={(e) => setPublicationYear(e.target.value)}
                    value={publicationYear}
                    className="input input-bordered input-sm mt-1"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto my-4">
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
