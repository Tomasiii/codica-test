import "./styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopBarProgress from "react-topbar-progress-indicator";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "@/provider/ThemeProvider";
import { persistor, store } from "@/store";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<TopBarProgress />}>
      <BrowserRouter>
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
        />
        <Suspense fallback={<TopBarProgress />}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
