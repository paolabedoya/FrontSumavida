import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-ewbn4qiu4bhl8ztj.us.auth0.com"
    clientId="5La40HTrNMwlDi5WfQ6dfGVyZeWn1hQ9"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "http://localhost:4040",
    }}
  >
    <App />
  </Auth0Provider>,
);
