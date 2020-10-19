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

type Props = {
  onSelectEmoji?: (emoji: string) => void;
};

const EmojiButton = ({}: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Emoji Button</Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>
          <EmojiPicker />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiButton;
