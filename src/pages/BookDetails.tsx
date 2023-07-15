import langing from "../assets/1666767104.webp";

const BookDetails = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={langing} alt="book photo" />
          </div>
          <div>
            <div>
              <h4 className="text-2xl font-semibold ">Title: </h4>
              <h4 className="text-2xl font-semibold ">Author: </h4>
              <h4 className="text-2xl font-semibold ">Genre: </h4>
              <p className="text-md font-semibold">Publication Date: </p>
            </div>
            <div>
              <button className="btn text-white mr-2">Edite Book</button>
              <button className="btn text-white mr-2">Delete Book</button>
              <button className="btn text-white mr-2">Add To Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
