import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Find() {
  const [text, setText] = useState("");

  const handelSearch = (e) => {
    e.preventDefault();
    console.log("Search");
  };

  return (
    <div>
      <form className="max-w-md mx-auto mb-8" onSubmit={handelSearch}>
        <div className="border flex justify-center items-center gap-2 p-2 rounded-md shadow-md">
          <span className="text-gray-500">
            <CiSearch size={30} />
          </span>
          <input
            type="search"
            name=""
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-3 w-[100%] focus:outline-none text-[16px] text-gray-500"
            placeholder="Find Your Friend"
            max={4}
          />
          <button
            type="submit"
            className="border px-3 py-2 rounded-md bg-gray-400 hover:bg-gray-300 duration-150 text-gray-600 font-bold"
          >
            Search
          </button>
        </div>
      </form>

      <div className="border">
        
      </div>
    </div>
  );
}

//  className="w-4 h-4 text-gray-500 dark:text-gray-400"
