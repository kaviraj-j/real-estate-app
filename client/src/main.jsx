import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-h5qcb7rzdx0k8liy.us.auth0.com"
     clientId="OmqMTZTlY4BmN0mW20wjwv7OctjJpPbA"
     authorizationParams={{
      redirect_uri: " https://real-estate-app-steel-six.vercel.app/"
     }}
     audience="https://real-estate-app-65d2.onrender.com"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
