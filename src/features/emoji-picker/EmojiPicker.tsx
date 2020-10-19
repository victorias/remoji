import React from "react";
import { SimpleGrid, Flex, Heading } from "@chakra-ui/core";
import { unicodeEmojis, categories, categoriesList } from "./constants";
import { Emoji } from "./types";

type Props = {};

const EmojiCategory = ({
  category,
  emojis,
}: {
  category: string;
  emojis: Array<Emoji>;
}) => {
  return (
    <Flex direction="column">
      <Heading>{category}</Heading>
      <SimpleGrid minChildWidth="20px" spacing="4px" alignContent="center">
        {emojis.map((emoji) => (
          <Flex textAlign="center">{emoji.unicodeString}</Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const EmojiPicker = ({}: Props) => {
  console.log(unicodeEmojis);
  return (
    <Flex direction="column">
      {categoriesList.map((category) => (
        <EmojiCategory category={category} emojis={unicodeEmojis[category]} />
      ))}
    </Flex>
  );
};

export default EmojiPicker;
