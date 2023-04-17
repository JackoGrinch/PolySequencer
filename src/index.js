import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SequencerAudio from "./SequencerModel.js";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Audio = new SequencerAudio();

root.render(
  <StrictMode>
    <App audio={Audio} />
  </StrictMode>
);
