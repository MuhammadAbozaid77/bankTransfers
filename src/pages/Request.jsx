import { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function Request() {
  const [userTransferPrice, setUserTransferPrice] = useState("");
  const [userTransferPinNumber, setUserTransferPinNumber] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] w-[100%] flex justify-center items-center ">
        <div className="bg-gradient-to-tl from-red-800 to-red-500 rounded-lg overflow-hidden shadow-lg">
          <form
            onSubmit={handelSubmit}
            className="w-[700px] p-[50px] bg-opacity-20 backdrop-blur-lg bg-white rounded-lg border border-white border-opacity-20 shadow-lg"
          >
            <h1 className="mb-10 font-bold  text-white   rounded-md flex items-center gap-5">
              <FaMoneyBillTransfer size={35} className="text-gray-800" />
              <span className="text-[30px]"> Request </span>
            </h1>

            <div className="flex flex-col justify-center   rounded-md mb-5">
              <label
                className=" text-red-900 font-bold text-[20px]"
                htmlFor="pin"
              >
                PinNumber
              </label>
              <input
                value={userTransferPinNumber}
                type="number"
                placeholder="PinNumber"
                name="pin"
                id="pin"
                className="p-5 rounded focus:outline-none text-[20px]"
                onChange={(e) => setUserTransferPinNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center   rounded-md mb-5">
              <label
                className=" text-red-900 font-bold text-[20px]"
                htmlFor="pin"
              >
                Price
              </label>
              <input
                value={userTransferPrice}
                type="number"
                placeholder="Price"
                name="pin"
                id="pin"
                className="p-5 rounded focus:outline-none text-[20px]"
                onChange={(e) => setUserTransferPrice(e.target.value)}
              />
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
