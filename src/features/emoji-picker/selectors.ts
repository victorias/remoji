import { RootState } from "../../app/store";

export const getSelectedEmoji = (state: RootState) =>
  state.selectedEmoji.selectedEmoji;
