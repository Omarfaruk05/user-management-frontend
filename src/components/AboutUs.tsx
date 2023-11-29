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
            Book Haven is a digital document library, with over 170M documents
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
      {/* explor part  */}
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
      {/* deep green part  */}
      <div className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto py-4">
          <div className="text-center mx-2 md:w-[700px] md:mx-auto">
            <h1 className="text-3xl my-7 font-semibold font-serif">
              At Book Haven, we believe in the power of the written (and spoken)
              word
            </h1>
            <p className="mx-2 md:mx-10">
              You may be a reader or a writer. You may be looking for a specific
              document or to improve your life personally or professionally. No
              matter what your goals are, we support you.
            </p>
          </div>
          <p className="h-[1px] bg-white my-10 mx-2 md:w-[680px] md:mx-auto"></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-2 md:w-[680px] md:mx-auto pb-8">
            <div>
              <h5 className="my-3 text-2xl font-semibold">Our Mission</h5>
              <p>
                We believe that reading opens doors, and part of our mission is
                to change the way the world reads by providing a wide range of
                reading material at a price that is fair for both creators and
                consumers.
              </p>
            </div>
            <div>
              <h5 className="my-3 text-2xl font-semibold">
                Community publishing
              </h5>
              <p>
                Scribd started as an open publishing platform, a place where
                anyone can share their ideas with the world, quickly, easily,
                and for free.
              </p>
            </div>
            <div>
              <h5 className="my-3 text-2xl font-semibold">
                Protecting intellectual property
              </h5>
              <p>
                We take copyrights seriously. We continue to protect the rights
                of authors, publishers, and creators by acting quickly on valid
                notifications of copyright infringement. We also have a rapid
                response group to respond to take down requests.
              </p>
            </div>
            <div>
              <h5 className="my-3 text-2xl font-semibold">
                Supporting authors
              </h5>
              <p>
                Your subscription payments allow us to pay our staff and the
                creators who make Scribd possible. We keep the price low by
                minimizing our advertising costs. We rely on our community of
                subscribers and creators to spread the word about the quality
                and value that we provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
