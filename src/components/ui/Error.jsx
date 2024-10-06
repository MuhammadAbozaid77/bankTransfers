import { MdOutlineError } from "react-icons/md";

export default function Error({ error }) {
  return (
    <>
      <div
        className="flex items-center border shadow-md  text-white text-sm font-bold px-4 py-3 rounded-md mb-5 gap-1"
        role="alert"
      >
        <MdOutlineError size={30} className="text-red-600" />
        <p className="text-[16px] text-red-600 capitalize">{error}</p>
      </div>
    </>
  );
}
