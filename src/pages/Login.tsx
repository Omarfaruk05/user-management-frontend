import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginUser } from "../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface IFormInput {
  fullName: string;
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { user, isLoading, isError, error } = useAppSelector(
    (state) => state.user
  );
  console.log(isError);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  if (!user?.email) {
    toast.error(error);
  }
  if (user?.email) {
    toast.success("User Loged in Successfull.");
  }
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[93vh]">
        <div className="bg-[#e0e6f0] text-center hidden md:block md:h-full  md:flex justify-center items-center px-4">
          <div className="-mt-12">
            <h1 className="text-4xl font-bold font-serif mb-5">
              Wellcome agani to{" "}
              <span className="text-teal-900">Book Haven.</span>
            </h1>
            <p className="text-md font-semibold">
              "Books are the keys that unlock the doors to knowledge,
              inspiration, and imagination. They hold the power to shape minds,
              broaden horizons, and transform lives. In a world of boundless
              possibilities, books are our faithful companions, guiding us on
              the path of wisdom and enlightenment."
            </p>
          </div>
        </div>
        <div className="text-center mx-8 -mt-24">
          <h1 className="text-4xl font-bold font-serif mb-8">Login</h1>

          {/* form  */}
          <div>
            <form
              className="md:w-80 lg:w-96 mx-auto "
              onSubmit={handleSubmit(onSubmit)}
            >
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
                  value={"Login"}
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

export default Login;
