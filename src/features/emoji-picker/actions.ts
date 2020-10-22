import { EmojiType, SelectedEmojiActionTypes, SELECT_EMOJI } from "./types";

export const selectEmoji = (emoji: EmojiType): SelectedEmojiActionTypes => ({
  type: SELECT_EMOJI,
  emoji,
});
