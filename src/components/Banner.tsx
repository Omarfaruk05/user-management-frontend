import bannerPhoto from "../assets/hero-XL_1248-en-1x.2d9fdd70.jpg";

const Banner = () => {
  return (
    <div className="bg-[#fbf9f8]">
      <div className="max-w-7xl mx-auto px-2 py-6">
        <div className="flex justify-between items-center gap-4">
          <div>
            <div className="">
              <h1 className="text-4xl font-serif font-bold mb-4">
                Endless entertainment and knowledge
              </h1>
              <p className="text-lg text-gray-500">
                Read or listen anytime, anywhere.
              </p>
            </div>
            <div>
              <button className="btn btn-sm rounded-md text-white bg-teal-700 px-8 hover:bg-teal-800 mt-4">
                Read free for 30 days.
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={bannerPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
