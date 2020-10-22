import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import selectedEmojiReducer from "../features/emoji-picker/reducers";

export const store = configureStore({
  reducer: {
    selectedEmoji: selectedEmojiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
