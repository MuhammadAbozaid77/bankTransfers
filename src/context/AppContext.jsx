import { createContext, useState } from "react";
import { accounts } from "../services/accounts";

export const ContextValue = createContext();
export default function AppContext({ children }) {
  // -----------------Status-----------------
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ----------------- Check Login -----------------
  const checkAccountLoginIn = (pin, pass) => {
    const targetAuthAccount = accounts?.find((item) => {
      return item?.password === pass && item?.pinNumber === pin;
    });
    return targetAuthAccount;
  };

  return (
    <ContextValue.Provider
      value={{ checkAccountLoginIn, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </ContextValue.Provider>
  );
}
