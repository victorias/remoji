import { EmojiType, SELECT_EMOJI } from "./types";
import { Reducer, AnyAction } from "@reduxjs/toolkit";

interface EmojiState {
  selectedEmoji: null | EmojiType;
}

const initialState: EmojiState = {
  selectedEmoji: null,
};

const reducer: Reducer<EmojiState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SELECT_EMOJI:
      return {
        ...state,
        selectedEmoji: action.emoji,
      };
    default:
      return state;
  }
};

export default reducer;
