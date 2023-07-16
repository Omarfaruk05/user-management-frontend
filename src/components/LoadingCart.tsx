const LoadingCart = () => {
  return (
    <div className="border">
      <div>
        <div className="bg-slate-200 px-5 py-3 w-[160px] h-[190px]">
          <img width={120} src={""} alt="" />
        </div>
        <div className="px-2">
          <small className="text-xs text-gray-500">Date</small>
          <p className="text-xl font-semibold">Thitle</p>
          <p className="text-lg font-semibold">Author</p>
          <h4 className="text-md font-semibold">Genre</h4>
        </div>
      </div>
    </div>
  );
};

export default LoadingCart;
