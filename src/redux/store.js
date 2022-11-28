import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, contactsSlice } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
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

// export const persistor = persistStore(store);