import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#f8f4f2] py-1 sticky top-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-none">
              <label htmlFor="my-drawer" className="btn btn-link text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <Link to="/">
                <h3 className="text-2xl font-semibold text-teal-800 font-mono">
                  Book Haven
                </h3>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/all-books">
              <button className="btn btn-sm rounded-md text-white bg-gray-600 mr-2 hover:bg-gray-700">
                All Books
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="btn btn-sm rounded-md text-white bg-red-700 mr-2 hover:bg-red-800">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-sm rounded-md text-white bg-teal-700 mr-2 hover:bg-teal-800">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
