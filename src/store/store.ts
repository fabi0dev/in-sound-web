import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { default as slices } from "./reducers";
import localforage from "localforage";
import { persistReducer, persistStore } from "redux-persist";

const currencyPersistConfig = {
  key: "myapp",
  storage: localforage,
  safelist: ["favorites", "player"],
};

const all = combineReducers({
  ...slices,
});

const reducers = persistReducer(currencyPersistConfig, all);

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
