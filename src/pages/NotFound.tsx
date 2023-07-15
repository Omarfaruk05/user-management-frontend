import notFoundImage from "../assets/not-found.avif";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={notFoundImage} alt="Not Found" className="w-64 h-64 mb-8" />
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl">The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
