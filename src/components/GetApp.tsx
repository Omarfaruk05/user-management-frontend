import appStore from "../assets/app_store_black_en.c01025ef.svg";
import playStore from "../assets/play_store_en.52ebe950.svg";
import storePic from "../assets/scribd_get_app_banner_2x.d87e82fd.png";

const GetApp = () => {
  return (
    <div className="bg-[#fbf9f8]">
      <div className="max-w-7xl mx-2 md:w-[800px] md:mx-auto md:flex gap-8 py-12 items-center">
        <div className="mb-12 text-center md:text-start w-96 md:w-full mx-auto">
          <h2 className="text-xl font-semibold">Get the Book Heaven app</h2>
          <p>
            Use Scribd through any web browser, Android, or iOS device. Download
            for offline access. Install the apps to try them out:
          </p>
          <div className="flex justify-center md:justify-start  gap-4 mx-auto my-5">
            <img src={appStore} alt="" />
            <img src={playStore} alt="" />
          </div>
        </div>
        <div>
          <img className="w-96 mx-auto md:w-full" src={storePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
