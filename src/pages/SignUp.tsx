import { useForm, SubmitHandler } from "react-hook-form";
import { createUser } from "../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useCreateUserMutation } from "../redux/features/user/userApi";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IFormInput {
  fullName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  let from = location.state?.from?.pathname || "/";

  const [createUserMutation, {}] = useCreateUserMutation();

  const { user, isLoading, isError, error } = useAppSelector(
    (state) => state.user
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit = async (data: IFormInput) => {
    await dispatch(createUser({ email: data.email, password: data.password }));
    if (error) {
      createUserMutation(data);
    }
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[95vh]">
        <div className="bg-[#f6f4e3] text-center hidden md:block md:h-full  md:flex justify-center items-center px-4 ">
          <div className="">
            <h1 className="text-4xl font-bold font-serif mb-5">
              Wellcome to <span className="text-teal-900">Book Haven.</span>
            </h1>
            <p className="text-md text-gray-700 font-semibold">
              "Books are the keys that unlock the doors to knowledge,
              inspiration, and imagination. They hold the power to shape minds,
              broaden horizons, and transform lives. In a world of boundless
              possibilities, books are our faithful companions, guiding us on
              the path of wisdom and enlightenment."
            </p>
          </div>
        </div>
        <div className="text-center mx-12">
          <h1 className="text-4xl font-bold font-serif mb-12">Sign Up</h1>

          {/* form  */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-start text-gray-500 font-semibold ml-2">
                  Enter Full Name
                </p>
                <input
                  className="input input-bordered w-full mb-3"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "First name is required",
                  })}
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-start text-gray-500 font-semibold ml-2">
                  Enter Email
                </p>
                <input
                  type="email"
                  className="input input-bordered w-full mb-3"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <p className="text-start text-gray-500 font-semibold ml-2">
                  Enter Password
                </p>
                <input
                  type="password"
                  className="input input-bordered w-full mb-3"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-teal-700 btn text-white w-full hover:bg-teal-800"
                />
              </div>
              {isError && (
                <small className="text-sm text-red-500">{error}</small>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
