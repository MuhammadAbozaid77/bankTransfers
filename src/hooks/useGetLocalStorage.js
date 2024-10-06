export default function useGetLocalStorage() {
  const getLocalStorage = localStorage.getItem("bankTransfersAccount");
  const isAuthenticated = Boolean(getLocalStorage);

  return { isAuthenticated };
}
