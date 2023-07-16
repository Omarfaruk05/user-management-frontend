import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import wishListReducer from "./features/wishList/wishListSlice";
import readingReducer from "./features/reading/readingSlice";
import finishedReducer from "./features/finished/finishedSlice";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    reading: readingReducer,
    finished: finishedReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
