export default function TransfersRow({ el }) {
  console.log("el", el);

  return (
    <>
      <div className="rounded-lg overflow-auto">
        <div className="flex items-center border-b border-gray-200 p-9">
          <div className="bg-gradient-to-tl from-green-500 to-green-200 text-white text-xs uppercase font-medium py-0.5 px-4 rounded-full mr-8">
            2 deposit
          </div>
          <div className="text-gray-600 text-xs uppercase font-medium">
            3 days ago
          </div>
          <div className="ml-auto text-lg">{el?.price} €</div>
        </div>
      </div>
    </>
  );
}
