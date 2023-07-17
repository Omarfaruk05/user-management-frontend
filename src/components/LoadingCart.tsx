const LoadingCart = () => {
  return (
    <div className="border rounded-md">
      <div>
        <div className="animate-pulse bg-slate-100 px-5 py-3 w-[160px] h-[190px]">
          <img width={120} src={""} alt="" />
        </div>
        <div className="mt-2 mx-1">
          <p className="h-3 mb-2 bg-gray-200 animate-pulse rounded-full"></p>
          <p className="h-2 mb-2 mr-9 bg-gray-200 animate-pulse rounded-full"></p>
          <p className="h-2 mb-2 mr-4 bg-gray-200 animate-pulse rounded-full"></p>
          <p className="h-3 mb-2 mr-20 bg-gray-200 animate-pulse rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default LoadingCart;
