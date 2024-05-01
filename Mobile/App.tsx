import * as React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Router from "./src/router";

function App() {
  return (
    <GluestackUIProvider config={config}>
      <Router />
    </GluestackUIProvider>
  );
}

export default App;
