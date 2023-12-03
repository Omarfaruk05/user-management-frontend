/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../redux/features/user/userApi";
import { IUser } from "../interfaces/userInterface";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
}

const CreateUser = () => {
  const [available, setAvailable] = useState(true);
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [createUserMutation] = useCreateUserMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (formData: IUser) => {
    try {
      formData.available = available;
      formData.gender = gender;
      formData.domain = domain;

      const result = await createUserMutation(formData);
      if (result?.data?.data?._id) {
        toast.success(result?.data?.message as string);
        reset();
      }

      console.log(result);
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
            Create User
          </h1>

          {/* form  */}
          <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-gray-500 font-semibold">Enter Avatar Link</p>
                <input
                  className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  type="text"
                  placeholder="Avatar Link"
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
                  className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  placeholder="First Name"
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
                  className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 "
                  placeholder="Enail"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
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
                  value={gender.toString()}
                >
                  <option selected value="Male">
                    Male
                  </option>
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
                  value="Create"
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

export default CreateUser;
