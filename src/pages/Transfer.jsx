import { useForm } from "react-hook-form";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import useTransferMoney from "../hooks/useTransferMoney";
import SpinnerLoading from "../components/ui/SpinnerLoading";
import Error from "../components/ui/Error";

export default function Transfer() {
  const { sendMoney, isLoading, error } = useTransferMoney();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendMoney(data);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] w-[100%] flex justify-center items-center flex-col">
        {isLoading && <SpinnerLoading />}
        {error && <Error error={error} />}

        <div className="rounded-lg overflow-hidden shadow-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[700px]  bg-gradient-to-tl from-blue-800 to-blue-400  p-[50px] bg-opacity-20 backdrop-blur-lg bg-white rounded-lg border border-white border-opacity-20 shadow-lg"
          >
            <h1 className="mb-10 font-bold  text-white   rounded-md flex items-center gap-5">
              <FaMoneyBillTransfer size={35} className="text-gray-800" />
              <span className="text-[30px]"> Transfers </span>
            </h1>

            <div className="flex flex-col justify-center rounded-md mb-5">
              <label
                className="text-gray-800 font-bold text-[20px]"
                htmlFor="pin"
              >
                PinNumber
              </label>
              <input
                {...register("pinNumber", {
                  required: "PinNumber is required",
                  minLength: {
                    value: 4,
                    message: "PinNumber must be 4 digits",
                  },
                  maxLength: {
                    value: 4,
                    message: "PinNumber must be 4 digits",
                  },
                })}
                placeholder="PinNumber"
                name="pinNumber"
                id="pinNumber"
                className="p-5 rounded focus:outline-none text-[20px]"
              />
              {errors.pinNumber && (
                <span className="text-red-700 font-bold text-[18px] mt-1 capitalize">
                  {errors?.pinNumber?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center rounded-md mb-5">
              <label
                className="text-gray-800 font-bold text-[20px]"
                htmlFor="pin"
              >
                Price
              </label>
              <input
                {...register("price", {
                  required: "price is required",
                })}
                placeholder="price"
                name="price"
                id="price"
                className="p-5 rounded focus:outline-none text-[20px]"
              />
              {errors.price && (
                <span className="text-red-700 font-bold text-[18px] mt-1 capitalize">
                  {errors?.price?.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className=" bg-gray-800 w-[150px] font-bold  h-[60px] px-5 rounded-md text-white text-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
