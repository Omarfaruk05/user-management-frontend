import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#f8f4f2]/30 backdrop-blur-xl py-2 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-none">{/* logo  */}</div>
            <div>
              <Link to="/">
                <h3 className="text-2xl font-semibold text-teal-800 font-mono">
                  User Management
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/create-user">
              <button className="py-1 px-2 rounded-md text-white bg-teal-700 hover:bg-teal-800 mr-2 hover:bg-gray-700">
                Create User
              </button>
            </Link>
            <Link to="/create-team">
              <button className="py-1 px-2 rounded-md text-white bg-teal-700 hover:bg-teal-800 mr-2 hover:bg-gray-700">
                Create Team
              </button>
            </Link>
            <Link to="/team">
              <button className="py-1 px-2 rounded-md text-white bg-teal-700 hover:bg-teal-800 mr-2 hover:bg-gray-700">
                All Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
