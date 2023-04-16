import { createStore, applyMiddleware, compose, AnyAction, Store } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer from "./reducers";
import AsyncStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// const middleware = [thunk];

const persistConfig = {
  // Root
  key: "root-1",
  // Storage Method (React Native)
  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [
  //     "auth"
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Persist Persisted Reducer
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     // options like actionSanitizer, stateSanitizer
//   })
//   : compose;

// const store = createStore(
//   persistedReducer,
//   composeEnhancers(
//     applyMiddleware(...middleware)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

/* Store */
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;

let persistor = persistStore(store);

// Exports
export { persistor };
