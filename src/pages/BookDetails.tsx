import { Link } from "react-router-dom";
import langing from "../assets/1666767104.webp";

const BookDetails = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2">
        <div className="md:flex gap-4">
          <div className="md:w-1/3 flex justify-center">
            <img src={langing} alt="book photo" />
          </div>
          <div className="md:w-2/3 mt-12 mx-4">
            <div>
              <h4 className="text-2xl font-semibold ">Title: </h4>
              <h4 className="text-2xl font-semibold ">Author: </h4>
              <h4 className="text-2xl font-semibold ">Genre: </h4>
              <p className="text-md font-semibold">Publication Date: </p>
            </div>
            <div className="mt-4">
              <Link to="/update-book">
                {" "}
                <button className="btn text-white mr-2 px-16 mb-2 bg-green-500 hover:bg-green-600">
                  Edite Book
                </button>
              </Link>
              <button className="btn text-white mr-2 px-[60px] mb-2 bg-red-500 hover:bg-red-600">
                Delete Book
              </button>
              <button className="btn text-white mr-2 px-12 mb-2 bg-slate-500 hover:bg-slate-600">
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
