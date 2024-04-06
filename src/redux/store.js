import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteTeacherReducer } from "./favoriteSlice.js";
import { teachersReducer } from "./teachersSlice.js";
import { filtersReducer } from "./filtersSlice.js";

const favConfig = {
  key: "favoriteTeacher",
  storage,
  whitelist: ["favoriteTeacher"],
};

const rootReducer = combineReducers({
  teachers: teachersReducer,
  filters: filtersReducer,
  favoriteTeacher: persistReducer(favConfig, favoriteTeacherReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
