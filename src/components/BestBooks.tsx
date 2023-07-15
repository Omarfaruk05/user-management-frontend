import book1 from "../assets/1689173080.webp";

const BestBooks = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <div>
          <h2 className="text-4xl text-center text-slate-600 font-semibold font-serif mb-16">
            The best books and audiobooks are waiting for you
          </h2>
          <div className="mx-auto">
            <div className="flex  gap-4 justify-center  items-center flex-wrap">
              {nums.map((x) => (
                <div className="border">
                  <div>
                    <div className="bg-slate-200 px-5 py-3 ">
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

export default BestBooks;
