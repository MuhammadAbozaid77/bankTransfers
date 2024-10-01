export default function TransfersDetailsFooter() {
  return (
    <>
      <div className="flex items-baseline py-1.5 mt-4">
        <p className="text-xs uppercase font-bold mr-2">In</p>
        <p className="text-2xl font-semibold mr-10 text-green-500">0000€</p>
        <p className="text-xs uppercase font-bold mr-2">Out</p>
        <p className="text-2xl font-semibold mr-10 text-red-500">0000€</p>
        <p className="text-xs uppercase font-bold mr-2">Send</p>
        <p className="text-2xl font-semibold mr-10 text-yellow-500">0000€</p>
        <button className="ml-auto bg-none text-xl font-bold cursor-pointer">
          ↓ SORT
        </button>
      </div>
    </>
  );
}
