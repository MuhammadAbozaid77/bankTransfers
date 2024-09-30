import { useEffect, useState } from "react";
import CloseAccountCard from "./CloseAccountCard";
import DetailsHeader from "./DetailsHeader";
import LogooutTime from "./LogooutTime";
import RequestloanCard from "./RequestloanCard";
import TransferMoneyCard from "./TransferMoneyCard";
import TransfersDetailsFooter from "./TransfersDetailsFooter";
import TransfersRow from "./TransfersRow";
import Wrapper from "./Wrapper";
import { accountsTransfers } from "../accounts";
import NoTransfers from "./NoTransfers";

export default function Details({ pin }) {

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
    <Wrapper classesName={"mb-4"}>
      <main className="mx-auto grid grid-cols-3 gap-8 bg-white p-10 rounded-lg shadow-lg">
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
          <LogooutTime />
        </div>
      </main>
    </Wrapper>
  );
}
