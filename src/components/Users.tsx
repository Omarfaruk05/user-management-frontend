/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import LoadingCart from "./LoadingCart";
import { useGetAllUserQuery } from "../redux/features/user/userApi";
import UserCart from "./UserCart";
import { IUser } from "../interfaces/userInterface";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";

interface IQuery {
  page: number;
  searchTerm?: string;
  gender?: string;
  domain?: string;
  available?: boolean;
}

const Users = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [available, setAvailable] = useState("");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const query: IQuery = {
    page,
  };

  if (searchTerm !== "") {
    query.searchTerm = searchTerm;
  }
  if (gender !== "") {
    query.gender = gender;
  }
  if (domain !== "") {
    query.domain = domain;
  }
  if (available !== "") {
    if (available === "true") {
      query.available = true;
    }
    if (available === "false") {
      query.available = false;
    }
  }

  console.log(query);
  const { data, isLoading } = useGetAllUserQuery(query);

  const users = data?.data;

  return (
    <div>
      <ScrollToTop />
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <div>
          <div className="my-4">
            <div className="flex justify-center">
              <input
                className=" rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="my-4 flex  gap-4">
              <select
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => setGender(e?.target?.value)}
                value={gender.toString()}
              >
                <option selected value={""}>
                  Select Gender
                </option>
                <option selected value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Agender">Agender</option>
                <option value="Polygender">Polygender</option>
              </select>
              <select
                id="domain"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => setDomain(e?.target?.value)}
                value={domain.toString()}
              >
                <option selected value={""}>
                  Select Domain
                </option>
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Management">Management</option>
                <option value="Management">Management</option>
              </select>
              <select
                id="available"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(e) => setAvailable(e?.target?.value)}
                value={available.toString()}
              >
                <option selected>Select Availablity</option>

                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
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
