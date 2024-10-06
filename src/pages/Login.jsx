import Logo from "../components/layout/Logo";
import SpinnerLoading from "../components/ui/SpinnerLoading";
import Error from "../components/ui/Error";
import useLogin from "../hooks/useLogin";
import { useForm } from "react-hook-form";

export default function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ----------- use Login Hook --------------
  const { handelLogin, isLoading, error } = useLogin();
  // ---------------- On Submit ----------------
  const onSubmit = (data) => {
    handelLogin(data);
  };

  return (
    <>
      <div className="min-w-[400px] bg-white px-8 py-[30px] rounded-[10px]  border border-gray-300 shadow-md flex flex-col">
        {isLoading && <SpinnerLoading />}
        {error && <Error error={error} />}

        <h1 className="text-[40px] text-center">Login</h1>

        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 flex flex-col justify-center">
            <label htmlFor="" className="text-[16px] font-semibold">
              Pin Number
            </label>
            <input
              placeholder="PinNumber"
              name="pinNumber"
              {...register("pinNumber", {
                required: {
                  value: true,
                  message: "Add Pin Number",
                },
                minLength: {
                  value: 4,
                  message: "PinNumber must be 4 digits",
                },
                maxLength: {
                  value: 4,
                  message: "PinNumber must be 4 digits",
                },
              })}
              className="p-3 border rounded-lg bg-gray-200 focus:outline-gray-400  text-gray-600 text-[16px] font-semibold"
            />
            {errors.pinNumber && (
              <span className="text-red-700 font-bold text-[18px] mt-1 capitalize">
                {errors?.pinNumber?.message}
              </span>
            )}
          </div>
          <div className="mb-5 flex flex-col justify-center">
            <label htmlFor="" className="text-[16px] font-semibold">
              Password
            </label>
            <input
              placeholder="Password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Add Pin Number",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 4 digits",
                },
                maxLength: {
                  value: 6,
                  message: "Password must be 4 digits",
                },
              })}
              className="p-3 border rounded-lg bg-gray-200 focus:outline-gray-400  text-gray-600 text-[16px] font-semibold"
            />
            {errors.password && (
              <span className="text-red-700 font-bold text-[18px] mt-1 capitalize">
                {errors?.password?.message}
              </span>
            )}
          </div>

          <div className="mb-5 flex flex-col justify-center gap-1">
            <button
              type="submit"
              className="p-4 border rounded-lg text-[20px] font-bold bg-gradient-to-tl from-green-700 to-green-400 hover:from-green-800 hover:to-green-500 text-white duration-500 transition-all"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
