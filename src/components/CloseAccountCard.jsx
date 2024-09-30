export default function CloseAccountCard() {
  return (
    <>
      <div className="rounded-lg p-12 text-gray-800 bg-gradient-to-tl from-red-500 to-red-300">
        <h2 className="text-lg font-semibold mb-6">Close account</h2>
        <form className="grid grid-cols-[2.5fr_2.5fr_1fr] gap-x-4 gap-y-1">
          <input
            type="text"
            className="w-full bg-white/40 text-center text-base p-1.5 rounded focus:bg-white/60 transition-all"
          />
          <input
            type="password"
            maxLength="6"
            className="w-full bg-white/40 text-center text-base p-1.5 rounded focus:bg-white/60 transition-all"
          />
          <button className="rounded text-xl bg-white cursor-pointer p-1.5 focus:bg-white/80 transition-all">
            &rarr;
          </button>
          <label className="text-sm text-center">Confirm user</label>
          <label className="text-sm text-center">Confirm PIN</label>
        </form>
      </div>
    </>
  );
}
