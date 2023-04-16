import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CampaignDetails, Home, Profile, CreateCampaign } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path:"/profile",
//      element: <Profile />
//   },
//   {
//     path:"/create-campaign", 
//     element:<CreateCampaign />
//   },
//   {
//     path:"/campaign-details/:id", 
//     element:<CampaignDetails/>
//   }

// ]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(

  <React.StrictMode>
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
