import DetailsHeader from "../components/DetailsHeader";
import TransfersDetailsFooter from "../components/TransfersDetailsFooter";
import TransfersRow from "../components/TransfersRow";
import NoTransfers from "../components/ui/NoTransfers";
import LogOutTime from "../components/LogOutTime";
import { PiHandWavingFill } from "react-icons/pi";
import useGetHomeData from "../hooks/useGetHomeData";

export default function Transactions() {
  const { name, transfers, balance } = useGetHomeData();

  return (
    <>
      <main className="mx-auto grid grid-cols-3 gap-5 border border-gray-300 p-10 rounded-lg shadow-lg w-[100%] bg-gradient-to-tl from-gray-100 to-gray-50">
        <div className="col-span-3">
          <h1 className="mb-5 font-bold text-[20px] flex items-center gap-2">
            <PiHandWavingFill size={30} className="text-red-500" />
            <span> Welcome Back </span>
            <span className="font-semibold text-red-500">
              {name?.split(" ")[0]}
            </span>
          </h1>
        </div>
        <div className="col-span-3">
          <DetailsHeader balance={balance} />
        </div>
        <div className="border-[1px] border-gray-300 rounded-md shadow-lg px-2 py-5 col-span-3">
          {transfers?.length > 0 ? (
            transfers?.map((el) => <TransfersRow key={el?.id} el={el} />)
          ) : (
            <NoTransfers />
          )}
        </div>

        <div className="lg:col-span-2 col-span-3">
          <TransfersDetailsFooter />
        </div>

        <div className="lg:col-span-1 col-span-3">
          <LogOutTime />
        </div>
      </main>
    </>
  );
}
