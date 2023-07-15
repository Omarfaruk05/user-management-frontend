import book1 from "../assets/1689173080.webp";
import { useState } from "react";

const AllBooks = () => {
  const [comic, setComic] = useState(false);
  const [fiction, setFiction] = useState(false);
  const [novel, setNovel] = useState(false);
  const [publicationYear, setPublicationYear] = useState("");
  console.log(publicationYear);
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div>
          <div>
            <div className="mb-8 flex gap-4 justify-center">
              {/* searching  */}
              <div className="form-control w-2/5">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
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
                              onClick={() => setComic(!comic)}
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
                              onClick={() => setFiction(!fiction)}
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
                              onClick={() => setNovel(!novel)}
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
              {nums.map((x) => (
                <div className="border">
                  <div>
                    <div className="bg-slate-200 px-5 py-3 w-[160px] h-[190px] ">
                      <img width={120} src={book1} alt="" />
                    </div>
                    <div className="px-2">
                      <small className="text-xs text-gray-500">Date</small>
                      <p className="text-xl font-semibold">Thitle</p>
                      <p className="text-lg font-semibold">Author</p>
                      <h4 className="text-md font-semibold">Genre</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
