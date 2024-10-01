import { useEffect, useState } from "react";
import { accountsTransfers } from "../accounts";

export default function useGetHomeData() {
  const pin = localStorage.getItem("bankTransfersAccount");
  const [accountData, setAccountData] = useState({});
  const [userBalance, setUserBalance] = useState(0);
  const findAccountDate = () => {
    const data = accountsTransfers?.find((item) => {
      return item.pinNumber === Number(pin);
    });
    if (data) {
      setAccountData(data);
    } else {
      setAccountData({});
    }
  };

  useEffect(() => {
    findAccountDate();
  }, []);

  useEffect(() => {
    if (accountData?.transfers?.length > 0) {
      const handelBalance = accountData?.transfers?.reduce((acc, item) => {
        return acc + item?.price;
      }, 0);
      setUserBalance(handelBalance);
    }
  }, [accountData]);

  return {
    name: accountData?.name,
    transfers: accountData?.transfers,
    balance: userBalance,
  };
}
