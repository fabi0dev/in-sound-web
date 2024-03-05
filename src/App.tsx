import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import Routers from "./routers";
import { Player } from "./components";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.github.com/users/fabi0dev/repos")
      .then((res) => res)
      .then(console.log);

    console.log("ok");
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers />
      </PersistGate>

      <Player />
    </Provider>
  );
}

export default App;
