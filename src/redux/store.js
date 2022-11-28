import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filterSlice";
import { persistedReducer } from "./contactsSlice";
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
 
export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filtersReducer,
    },
      middleware(getDefaultMiddleware) {
          return getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
          });
    },
});

export const persistor = persistStore(store);