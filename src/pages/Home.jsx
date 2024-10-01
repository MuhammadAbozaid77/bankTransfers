import { useEffect, useState } from "react";
import CloseAccountCard from "../components/CloseAccountCard";
import DetailsHeader from "../components/DetailsHeader";
import RequestloanCard from "../components/RequestloanCard";
import TransferMoneyCard from "../components/TransferMoneyCard";
import TransfersDetailsFooter from "../components/TransfersDetailsFooter";
import TransfersRow from "../components/TransfersRow";
import NoTransfers from "../components/ui/NoTransfers";
import LogOutTime from "../components/LogOutTime";
import { accountsTransfers } from "../accounts";

export default function Home({ pin }) {
  const [accountData, setAccountData] = useState({});
  const findAccountDate = () => {
    const data = accountsTransfers?.find((item) => {
      return item.pinNumber === pin;
    });
    if (data) {
      setAccountData(data);
    } else {
      setAccountData({});
    }
  };

  useEffect(() => {
    findAccountDate();
  }, [pin]);

  return (
    <main className="mx-auto grid grid-cols-3 gap-8 border p-10 rounded-lg shadow-lg w-[100%]">
      <div className="col-span-3">
        <DetailsHeader />
      </div>
      <div className="border rounded-md shadow-md p-2 lg:col-span-2 col-span-3">
        {accountData?.transfers?.length > 0 ? (
          accountData?.transfers?.map((el) => (
            <TransfersRow key={el?.id} el={el} />
          ))
        ) : (
          <NoTransfers />
        )}
      </div>

      <div className=" flex flex-col gap-5 lg:col-span-1 col-span-3">
        <TransferMoneyCard />
        <RequestloanCard />
        <CloseAccountCard />
      </div>

      <div className="lg:col-span-2 col-span-3">
        <TransfersDetailsFooter />
      </div>

      <div className="lg:col-span-1 col-span-3">
        <LogOutTime />
      </div>
    </main>
  );
}
