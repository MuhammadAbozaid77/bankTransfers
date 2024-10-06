import AppContext from "./context/AppContext";
import Navigations from "./routers/Navigations";

//-----------------------------------------------------------
export default function App() {
  return (
    <>
      <AppContext>
        <Navigations />
      </AppContext>
    </>
  );
}
