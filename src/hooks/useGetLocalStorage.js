export default function useGetLocalStorage() {
  const localStoragetoken = localStorage.getItem("bankTransfersAccount");
  const isAuthenticated = Boolean(localStoragetoken);

  return { isAuthenticated, localStoragetoken };
}
