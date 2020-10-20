import React, { useState } from "react";
import { Flex } from "@chakra-ui/core";
import EmojiButton from "./features/emoji-picker/EmojiButton";
import Emoji from "./features/emoji-picker/Emoji";
import { EmojiType } from "./features/emoji-picker/types";

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType | null>(null);

  return (
    <Flex align="center" justify="center" direction="column">
      <Flex>
        Selected Emoji:{" "}
        {selectedEmoji === null ? null : <Emoji emoji={selectedEmoji} />}
      </Flex>
      <EmojiButton onSelectEmoji={setSelectedEmoji} />
    </Flex>
  );
}

export default App;
