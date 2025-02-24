import React from "react";
import {
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/core";
import EmojiPicker from "./EmojiPicker";
import { EmojiType } from "./types";

type Props = {
  onSelectEmoji: (emoji: EmojiType) => void;
};

const EmojiButton = ({ onSelectEmoji }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Emoji Button</Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4} maxHeight="400px" overflowY="scroll">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <EmojiPicker onSelectEmoji={onSelectEmoji} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiButton;
