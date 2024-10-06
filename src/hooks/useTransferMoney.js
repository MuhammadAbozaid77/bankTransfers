import { useContext } from "react";
import { accountsTransfers } from "../services/accountsTransfers";
import useGetLocalStorage from "./useGetLocalStorage";
import { ContextValue } from "../context/AppContext";

export default function useTransferMoney() {
  const { localStoragetoken } = useGetLocalStorage();
  const { isLoading, setIsLoading, error, setError } = useContext(ContextValue);

  const sendMoney = (data) => {
    const currentAccountSend = accountsTransfers?.find((item) => {
      return item?.pinNumber === Number(localStoragetoken);
    });
    const currentAccountRecieve = accountsTransfers?.find((item) => {
      return item?.pinNumber === Number(data?.pinNumber);
    });

    setError("");
    setIsLoading(true);
    setTimeout(() => {
      if (currentAccountRecieve) {
        currentAccountSend?.transfers?.push({
          id: 2,
          history: "",
          time: "",
          price: -Number(data?.price),
          operationType: "send",
        });
        currentAccountRecieve?.transfers?.push({
          id: 2,
          history: "",
          time: "",
          price: Number(data?.price),
          operationType: "recieve",
        });
        setError("");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError("Cant find Account");
      }
    }, 2000);
  };

  return { sendMoney, isLoading, error };
}
