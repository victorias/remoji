import React from "react";
import { Flex } from "@chakra-ui/core";
import EmojiButton from "./features/emoji-picker/EmojiButton";

function App() {
  return (
    <Flex align="center" justify="center">
      <EmojiButton />
    </Flex>
  );
}

export default App;
