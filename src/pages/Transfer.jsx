import { useState } from "react";
import { accountsTransfers } from "../accounts";

export default function Transfer() {
  const [userTransferPrice, setUserTransferPrice] = useState(0);
  const [userTransferPinNumber, setUserTransferPinNumber] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: 0,
      history: "",
      time: "",
      price: Number(-userTransferPrice),
      operationType: "transfer",
      userTransferPinNumber: userTransferPinNumber,
    };
    console.log(data);
    const checkBalance = accountsTransfers.find((el) => {
      return el?.pinNumber === Number(userTransferPinNumber);
    });
    if (
      userTransferPrice > checkBalance?.balance &&
      checkBalance?.balance === 0
    ) {
      return;
    } else {
      checkBalance?.transfers?.push(data);
    }
  };

  return (
    <>
      <div className="min-h-[70vh] w-[100%] flex justify-center items-center">
        <form
          onSubmit={handelSubmit}
          className="w-[700px] px-[50px] py-[100px]"
        >
          <h1 className="mb-10 font-bold text-[50px] text-gray-800 p-5  bg-gradient-to-tl from-green-700 to-green-300 rounded-md">
            Transfers
          </h1>

          <div className="flex flex-col justify-center p-2 group border h-[80px] rounded-md mb-5 bg-white shadow-md">
            <label
              className="text-lg transition-all group-focus-within:text-sm"
              htmlFor="pin"
            >
              PinNumber
            </label>
            <input
              value={userTransferPinNumber}
              type="number"
              name="pin"
              id="pin"
              className=" p-3 rounded focus:outline-none"
              onChange={(e) => setUserTransferPinNumber(e.target.value)}
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
              value={userTransferPrice}
              type="number"
              name="pin"
              id="pin"
              className=" p-3 rounded focus:outline-none"
              onChange={(e) => setUserTransferPrice(e.target.value)}
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
