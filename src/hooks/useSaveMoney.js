import { useContext } from "react";
import { accounts } from "../services/accounts";
import { accountsTransfers } from "../services/accountsTransfers";
import { ContextValue } from "../context/AppContext";

export default function useSaveMoney() {
  const { isLoading, setIsLoading, error, setError } = useContext(ContextValue);

  const checkAccountSaveMoneyByPinNumber = (data) => {
    setError("");
    setIsLoading(true);
    const isAccount = accounts?.find((item) => {
      return item?.pinNumber === Number(data?.pinNumber);
    });

    setTimeout(() => {
      if (isAccount) {
        const saveMoneyAccount = accountsTransfers?.find((item) => {
          return item?.pinNumber === Number(data?.pinNumber);
        });
        // -------------------Save money To An Account-------------------
        saveMoneyAccount?.transfers?.push({
          id: 2,
          history: "",
          time: "",
          price: Number(data?.price),
          operationType: "save",
        });
        setIsLoading(false);
        setError("");
      } else {
        setError("This account Not register");
        setIsLoading(false);
      }
    }, 2000);
  };

  return { checkAccountSaveMoneyByPinNumber, error, isLoading };
}
