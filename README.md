Hi Remotion! :wave:

![Kapture 2020-10-22 at 11 15 00](https://user-images.githubusercontent.com/549257/96913449-7d7db500-1458-11eb-8a94-aa07431158cd.gif)

This is my quick and basic (~3 hrs) emoji picker.

In terms of technology, this project was bootstrapped with a CRA Redux + Typescript template. For a base UI Kit, I used [Chakra](https://chakra-ui.com/), which comes with some sane Tailwind inspired defaults and allows me to configure some basic styling in Javascript. It also manages popper state for me for free. Because of the time limit, UI polish was not my primary focus. Like other UI kits, the primary downside of Chakra is that it can be overly prescriptive.

I've defined an EmojiType that currently only supports unicode emojis, like so:

```tsx
type UnicodeEmoji = {
  type: "unicode";
  name: string;
  unicodeString: string;
};

export type EmojiType = UnicodeEmoji;
```

This is to enable future improvements such as a custom emoji type and search.

I like to co-locate files by feature, so all associated Emoji Picker files are in `src/features/emoji-picker`. The basic layout of the emojis was autolayouted by CSS Grid. This can have some performance concerns on scroll performance when the set of emojis is sufficiently large enough.

The `EmojiPicker` is automatically attached to the `EmojiButton`, so the intended API is to use the Button. Right now the picker doesn't really manage it's own state as all the data is derived from the `constants`. The reducer is for the selected emoji itself and has a type of:

```tsx
interface EmojiState {
  selectedEmoji: null | EmojiType;
}
```

Thanks! This was a fun little challenge :)
