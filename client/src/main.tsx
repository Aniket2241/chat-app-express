import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="894694099299-ighf0drcdee6mji5vk14fribbjtbnqgf.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
