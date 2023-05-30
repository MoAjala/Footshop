import "./App.css";
import { StateProvider } from "./config/context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <StateProvider>
        <PayPalScriptProvider deferLoading={true}>
          <Toaster />
          <Routes />
        </PayPalScriptProvider>
      </StateProvider>
    </>
  );
}

export default App;
