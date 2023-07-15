import book1 from "../assets/1689173080.webp";

const WishList = () => {
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-12">
        <div>
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

export default WishList;
