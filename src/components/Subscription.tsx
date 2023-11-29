import { BsBook, BsHeadphones, BsMusicNoteBeamed } from "react-icons/bs";
import { FaRegAddressBook, FaMicrophoneAlt } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/Hi";

const Subscription = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 pt-20 pb-4">
        <div>
          <h2 className="text-4xl text-center text-slate-600 font-semibold font-serif mb-16">
            All in one simple subscription
          </h2>
          <div className="flex gap-4 justify-center flex-wrap mx-2">
            <div className="text-center px-14 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <BsBook className="text-4xl mb-4 text-teal-700 mx-auto" />
              <h6 className="text-lg font-semibold">Books</h6>
            </div>
            <div className="text-center px-8 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <BsHeadphones className="text-4xl mb-4 text-teal-700  mx-auto" />
              <h6 className="text-lg font-semibold">Audiobooks</h6>
            </div>
            <div className="px-10 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <FaRegAddressBook className="text-4xl mb-4 text-teal-700  mx-auto" />
              <h6 className="text-lg font-semibold">Magazines</h6>
            </div>
            <div className="px-10 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <FaMicrophoneAlt className="text-4xl mb-4 text-teal-700  mx-auto" />
              <h6 className="text-lg font-semibold">Products</h6>
            </div>
            <div className="px-10 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <BsMusicNoteBeamed className="text-4xl mb-4 text-teal-700  mx-auto" />
              <h6 className="text-lg font-semibold">Sheet music</h6>
            </div>
            <div className="px-10 bg-[#fbf9f8] p-3 rounded-md cursor-pointer">
              <HiOutlineDocumentSearch className="text-4xl mb-4 text-teal-700  mx-auto" />
              <h6 className="text-lg font-semibold">Documents</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
