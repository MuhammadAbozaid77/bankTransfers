export default function TransfersRow({ el }) {
  // console.log("el", el);

  return (
    <>
      <div className="rounded-lg overflow-auto">
        <div className="flex items-center border-b border-gray-300 p-9">
          <div
            className={` text-white font-semibold text-md uppercase text-center py-2 px-4 rounded-full mr-8  w-[100px] ${
              el?.operationType === "send"
                ? "bg-gradient-to-tl from-yellow-600 to-yellow-400"
                : el?.operationType === "recieve"
                ? "bg-gradient-to-tl from-red-600 to-red-400"
                : "bg-gradient-to-tl from-green-600 to-green-400"
            } `}
          >
            {el?.operationType}
          </div>
          <div className="text-gray-600 text-lg uppercase font-medium">
            3 days ago
          </div>
          <div className="ml-auto text-2xl font-bold">{el?.price} €</div>
        </div>
      </div>
    </>
  );
}
