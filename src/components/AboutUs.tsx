import aboutPic from "../assets/above_the_fold_desktop_1x.6a6a8df1.png";
import aboutCart1 from "../assets/gr_wis-discover.07f75162.svg";
import aboutCart2 from "../assets/gr_hsw-originals.68992201.svg";
import aboutCart3 from "../assets/gr_hsw-personalize.ba5d4639.svg";

const AboutUs = () => {
  return (
    <section>
      <div className="bg-[#00293f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif font-semibold text-center py-10">
            What is Hook Heaven?
          </h1>
          <p className="w-96 text-center mx-auto">
            Book Heaven is a digital document library, with over 170M documents
            and counting. Find and upload text on every topic and niche — all
            for one monthly subscription.
          </p>
          <p className="text-xs w-full text-center py-3 text-slate-400">
            We pronounce it /skribbed/
          </p>
          <div className="text-center my-4">
            <button className="border-[1px] px-2 py-1 rounded-sm font-semibold hover:border-2 hover:rounded-md h-9">
              Start your free 30 days
            </button>
            <p className="mt-3">
              Only $9.99/month after trial. Cancel anytime.
            </p>
          </div>
          <div>
            <img className="mx-auto" src={aboutPic} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-serif font-semibold text-center py-10">
          Explore every topic and idea
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-around max-w-7xl mx-auto px-12 lg:px-32 my-8">
          <div className="bg-[#fbf9f8] pb-3 rounded-md">
            <div>
              <img src={aboutCart1} alt="" />
            </div>
            <div className="mx-2">
              <h3 className="text-xl font-semibold my-3">
                Discover something new
              </h3>
              <p>
                Our ever-expanding digital document library includes academic
                papers, legal documents, DIY hobbies, manuals, and more. Find
                and share documents on any topic, and get answers you won’t find
                anywhere else.
              </p>
            </div>
          </div>
          <div className="bg-[#fbf9f8] pb-3 rounded-md">
            <div>
              <img src={aboutCart2} alt="" />
            </div>
            <div className="mx-2">
              <h3 className="text-xl font-semibold my-3">
                Get custom recommendations
              </h3>
              <p>
                We use a combination of editorial expertise, machine learning,
                and search technologies to suggest related items across our
                range of material. Whatever you’re interested in, we’ll find
                related documents that might be helpful.
              </p>
            </div>
          </div>
          <div className="bg-[#fbf9f8] pb-3 rounded-md">
            <div>
              <img src={aboutCart3} alt="" />
            </div>
            <div className="mx-2">
              <h3 className="text-xl font-semibold my-3">Grow your audience</h3>
              <p>
                Share your ideas and knowledge with an active, interested
                audience.
              </p>
              <p className="mt-8">
                It’s free to upload your documents to Scribd, giving you access
                to a global community of readers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
