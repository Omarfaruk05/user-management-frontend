/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LoadingCart from "./LoadingCart";
import { useGetAllUserQuery } from "../redux/features/user/userApi";
import UserCart from "./UserCart";
import { IUser } from "../interfaces/userInterface";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";

const Users = () => {
  const [page, setPage] = useState(1);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const { data, isLoading } = useGetAllUserQuery({ page });

  const users = data?.data;
  console.log(users);

  return (
    <div>
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <div>
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading &&
                nums.map((x) => <LoadingCart key={x}></LoadingCart>)}
              {users &&
                users?.map((user: IUser) => (
                  <UserCart {...user} key={user._id}></UserCart>
                ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => setPage(page + 1)}
                className="py-1 px-3 mt-4 rounded-md bg-teal-800 text-white font-semibold"
              >
                {"Next >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
