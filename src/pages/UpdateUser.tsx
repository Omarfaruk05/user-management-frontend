/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  useGetSingUserQuery,
  useUpdateUserMutation,
} from "../redux/features/user/userApi";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
}

const UpdateUser = () => {
  const { id } = useParams();
  console.log(id);
  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState("Male");
  const [domain, setDomain] = useState("IT");

  const { data }: any = useGetSingUserQuery(id as string);
  const user = data?.data;

  const [updateUserMutation] = useUpdateUserMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (
    formData: Partial<IFormInput>
  ) => {
    try {
      formData.available = available;
      formData.email = user?.email;
      formData.gender = gender;
      formData.domain = domain;

      const result = await updateUserMutation({ id, formData });
      if (result?.data?.data?._id) {
        toast.success(result?.data?.message as string);
      }

      console.log(formData);
    } catch (error: any) {
      toast.error("Somthing went wrong.");
    }
  };

  const handleAvailabilityChange = (e: any) => {
    const selectedValue = e?.target?.value as string;
    setAvailable(selectedValue === "true");
  };
  const handleGender = (e: any) => {
    const selectedValue = e?.target?.value as string;
    setGender(selectedValue);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto mb-7 mt-2 min-h-screen ">
        <div className=" mx-12">
          <h1 className=" text-center text-4xl font-bold font-serif mb-8">
            Update User
          </h1>

          {/* form  */}
          <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-gray-500 font-semibold">Enter Avatar Link</p>
                <input
                  className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="Avatar Link"
                  defaultValue={user?.avatar}
                  {...register("avatar", {
                    required: "Avatar image Link is required",
                  })}
                  aria-invalid={errors.avatar ? "true" : "false"}
                />
                {errors.avatar && (
                  <p className="text-red-500 text-sm">
                    {errors.avatar.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold mt-3">
                  Enter First Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  placeholder="First Name"
                  defaultValue={user?.first_name}
                  {...register("first_name", {
                    required: "First Name is required",
                  })}
                  aria-invalid={errors.first_name ? "true" : "false"}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold mt-3">
                  Enter Last Name
                </p>
                <input
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                  defaultValue={user?.last_name}
                  {...register("last_name", {
                    required: "Last Name is required",
                  })}
                  aria-invalid={errors.last_name ? "true" : "false"}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-500 font-semibold mt-3">
                  Email{" "}
                  <small className="text-xxs text-red-400">
                    ( Email Must be unique)
                  </small>
                </p>
                <input
                  type="email"
                  className="w-full rounded-md border-0 py-1.5 px-2 bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 "
                  placeholder="Enail"
                  value={user?.email}
                  readOnly
                  disabled
                  {...register("email")}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mt-3 text-sm font-medium text-gray-900"
                >
                  Select Gender
                </label>
                <select
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleGender}
                  defaultValue={user?.gender}
                  value={gender.toString()}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Agender">Agender</option>
                  <option value="Polygender">Polygender</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="domain"
                  className="block mt-3 text-sm font-medium text-gray-900"
                >
                  Select Domain
                </label>
                <select
                  id="domain"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => setDomain(e?.target?.value)}
                  value={domain.toString()}
                >
                  <option value="IT">IT</option>
                  <option value="Sales">Sales</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Management">Management</option>
                  <option value="Management">Management</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="available"
                  className="block mt-3 text-sm font-medium text-gray-900"
                >
                  Select availability
                </label>
                <select
                  id="available"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleAvailabilityChange}
                  value={available.toString()}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div>
                <input
                  type="submit"
                  value="Update"
                  className="bg-teal-700 btn p-2 rounded-md mt-3 text-white w-96 hover:bg-teal-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
