import React, { useState } from "react";
import { Flex } from "@chakra-ui/core";
import EmojiButton from "./features/emoji-picker/EmojiButton";
import Emoji from "./features/emoji-picker/Emoji";
import { EmojiType } from "./features/emoji-picker/types";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedEmoji } from "./features/emoji-picker/selectors";
import { selectEmoji } from "./features/emoji-picker/actions";

function App() {
  const selectedEmoji = useSelector(getSelectedEmoji);

  const dispatch = useDispatch();

  return (
    <Flex align="center" justify="center" direction="column">
      <Flex>
        Selected Emoji:{" "}
        {selectedEmoji === null ? null : <Emoji emoji={selectedEmoji} />}
      </Flex>
      <EmojiButton onSelectEmoji={(emoji) => dispatch(selectEmoji(emoji))} />
    </Flex>
  );
}

export default App;
