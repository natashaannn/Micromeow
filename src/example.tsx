import React from "react";
import ReactDOM from "react-dom/client";
import Micromeow from "./components/Micromeow";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ width: "400px", height: "400px" }}>
        <Micromeow
        eyeColor="#C8A031"
        color="gainsboro"
        mPattern="gray"
        furTip="gray"
        shortTail
        pose="sphinx"
        />
    </div>

  </React.StrictMode>
);