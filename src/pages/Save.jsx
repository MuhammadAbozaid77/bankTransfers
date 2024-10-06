import { IoIosSave } from "react-icons/io";
import { useForm } from "react-hook-form";

export default function Save() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("errors", errors);

  const onSubmit = (data) => {
    
    console.log("Form data", data);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] w-[100%] flex justify-center items-center">
        <div className="bg-gradient-to-tl from-green-600 to-green-500 rounded-lg overflow-hidden shadow-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[700px] p-[50px] bg-opacity-20 backdrop-blur-lg bg-white rounded-lg border border-white border-opacity-20 shadow-lg"
          >
            <h1 className="mb-10 font-bold text-white rounded-md flex items-center gap-5">
              <IoIosSave size={45} className="text-gray-800" />
              <span className="text-[30px]">Save Your Money</span>
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
              className="bg-gray-800 w-[150px] font-bold h-[60px] px-5 rounded-md text-white text-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
