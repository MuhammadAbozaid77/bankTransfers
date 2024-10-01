export default function Request() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-[70vh] w-[100%] flex justify-center items-center">
        <form
          onSubmit={handelSubmit}
          className="w-[700px] px-[50px] py-[100px]"
        >
          <h1 className="mb-10 font-bold text-[50px] text-gray-800 p-5  bg-gradient-to-tl from-red-700 to-red-300 rounded-md">
            Request
          </h1>

          <div className="flex flex-col justify-center p-2 group border h-[80px] rounded-md mb-5 bg-white shadow-md">
            <label
              className="text-lg transition-all group-focus-within:text-sm"
              htmlFor="pin"
            >
              PinNumber
            </label>
            <input
              type="text"
              name="pin"
              id="pin"
              className=" p-3 rounded focus:outline-none"
            />
          </div>
          <div className="flex flex-col justify-center p-2 group border h-[80px] rounded-md mb-5 bg-white shadow-md">
            <label
              className="text-lg transition-all group-focus-within:text-sm"
              htmlFor="pin"
            >
              Price
            </label>
            <input
              type="text"
              name="pin"
              id="pin"
              className=" p-3 rounded focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className=" bg-gray-600  h-[80px] w-[100%] rounded-md text-white text-[20px]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
