const _unicodeEmojis = {
  people: [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "☺️",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😜",
    "😝",
    "😛",
    "🤑",
    "🤗",
    "🤓",
    "😎",
    "🤡",
    "🤠",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "😤",
    "😠",
    "😡",
    "😶",
    "😐",
    "😑",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "😵",
    "😳",
    "😱",
    "😨",
    "😰",
    "😢",
    "😥",
    "🤤",
    "😭",
    "😓",
    "😪",
    "😴",
    "🙄",
    "🤔",
    "🤥",
    "😬",
    "🤐",
    "🤢",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "😈",
    "👿",
    "👹",
    "👺",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "🎃",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "👐",
    "🙌",
    "👏",
    "🙏",
    "🤝",
    "👍",
    "👎",
    "👊",
    "✊",
    "🤛",
    "🤜",
    "🤞",
    "✌️",
    "🤘",
    "👌",
    "👈",
    "👉",
    "👆",
    "👇",
    "☝️",
    "✋",
    "🤚",
    "🖐",
    "🖖",
    "👋",
    "🤙",
    "💪",
    "🖕",
    "✍️",
    "🤳",
    "💅",
    "💍",
    "💄",
    "💋",
    "👄",
    "👅",
    "👂",
    "👃",
    "👣",
    "👁",
    "👀",
    "🗣",
    "👤",
    "👥",
    "👶",
    "👦",
    "👧",
    "👨",
    "👩",
    "👱‍♀️",
    "👱",
    "👴",
    "👵",
    "👲",
    "👳‍♀️",
    "👳",
    "👮‍♀️",
    "👮",
    "👷‍♀️",
    "👷",
    "💂‍♀️",
    "💂",
    "🕵️‍♀️",
    "🕵️",
    "👩‍⚕️",
    "👨‍⚕️",
    "👩‍🌾",
    "👨‍🌾",
    "👩‍🍳",
    "👨‍🍳",
    "👩‍🎓",
    "👨‍🎓",
    "👩‍🎤",
    "👨‍🎤",
    "👩‍🏫",
    "👨‍🏫",
    "👩‍🏭",
    "👨‍🏭",
    "👩‍💻",
    "👨‍💻",
    "👩‍💼",
    "👨‍💼",
    "👩‍🔧",
    "👨‍🔧",
    "👩‍🔬",
    "👨‍🔬",
    "👩‍🎨",
    "👨‍🎨",
    "👩‍🚒",
    "👨‍🚒",
    "👩‍✈️",
    "👨‍✈️",
    "👩‍🚀",
    "👨‍🚀",
    "👩‍⚖️",
    "👨‍⚖️",
    "🤶",
    "🎅",
    "👸",
    "🤴",
    "👰",
    "🤵",
    "👼",
    "🤰",
    "🙇‍♀️",
    "🙇",
    "💁",
    "💁‍♂️",
    "🙅",
    "🙅‍♂️",
    "🙆",
    "🙆‍♂️",
    "🙋",
    "🙋‍♂️",
    "🤦‍♀️",
    "🤦‍♂️",
    "🤷‍♀️",
    "🤷‍♂️",
    "🙎",
    "🙎‍♂️",
    "🙍",
    "🙍‍♂️",
    "💇",
    "💇‍♂️",
    "💆",
    "💆‍♂️",
    "🕴",
    "💃",
    "🕺",
    "👯",
    "👯‍♂️",
    "🚶‍♀️",
    "🚶",
    "🏃‍♀️",
    "🏃",
    "👫",
    "👭",
    "👬",
    "💑",
    "👩‍❤️‍👩",
    "👨‍❤️‍👨",
    "💏",
    "👩‍❤️‍💋‍👩",
    "👨‍❤️‍💋‍👨",
    "👪",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👩‍👦",
    "👩‍👧",
    "👩‍👧‍👦",
    "👩‍👦‍👦",
    "👩‍👧‍👧",
    "👨‍👦",
    "👨‍👧",
    "👨‍👧‍👦",
    "👨‍👦‍👦",
    "👨‍👧‍👧",
    "👚",
    "👕",
    "👖",
    "👔",
    "👗",
    "👙",
    "👘",
    "👠",
    "👡",
    "👢",
    "👞",
    "👟",
    "👒",
    "🎩",
    "🎓",
    "👑",
    "⛑",
    "🎒",
    "👝",
    "👛",
    "👜",
    "💼",
    "👓",
    "🕶",
    "🌂",
    "☂️",
  ],
  nature: [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐽",
    "🐸",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
    "🐒",
    "🐔",
    "🐧",
    "🐦",
    "🐤",
    "🐣",
    "🐥",
    "🦆",
    "🦅",
    "🦉",
    "🦇",
    "🐺",
    "🐗",
    "🐴",
    "🦄",
    "🐝",
    "🐛",
    "🦋",
    "🐌",
    "🐚",
    "🐞",
    "🐜",
    "🕷",
    "🕸",
    "🐢",
    "🐍",
    "🦎",
    "🦂",
    "🦀",
    "🦑",
    "🐙",
    "🦐",
    "🐠",
    "🐟",
    "🐡",
    "🐬",
    "🦈",
    "🐳",
    "🐋",
    "🐊",
    "🐆",
    "🐅",
    "🐃",
    "🐂",
    "🐄",
    "🦌",
    "🐪",
    "🐫",
    "🐘",
    "🦏",
    "🦍",
    "🐎",
    "🐖",
    "🐐",
    "🐏",
    "🐑",
    "🐕",
    "🐩",
    "🐈",
    "🐓",
    "🦃",
    "🕊",
    "🐇",
    "🐁",
    "🐀",
    "🐿",
    "🐾",
    "🐉",
    "🐲",
    "🌵",
    "🎄",
    "🌲",
    "🌳",
    "🌴",
    "🌱",
    "🌿",
    "☘️",
    "🍀",
    "🎍",
    "🎋",
    "🍃",
    "🍂",
    "🍁",
    "🍄",
    "🌾",
    "💐",
    "🌷",
    "🌹",
    "🥀",
    "🌻",
    "🌼",
    "🌸",
    "🌺",
    "🌎",
    "🌍",
    "🌏",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌚",
    "🌝",
    "🌞",
    "🌛",
    "🌜",
    "🌙",
    "💫",
    "⭐️",
    "🌟",
    "✨",
    "⚡️",
    "🔥",
    "💥",
    "☄️",
    "☀️",
    "🌤",
    "⛅️",
    "🌥",
    "🌦",
    "🌈",
    "☁️",
    "🌧",
    "⛈",
    "🌩",
    "🌨",
    "☃️",
    "⛄️",
    "❄️",
    "🌬",
    "💨",
    "🌪",
    "🌫",
    "🌊",
    "💧",
    "💦",
    "☔️",
  ],
  foods: [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🍈",
    "🍒",
    "🍑",
    "🍍",
    "🥝",
    "🥑",
    "🍅",
    "🍆",
    "🥒",
    "🥕",
    "🌽",
    "🌶",
    "🥔",
    "🍠",
    "🌰",
    "🥜",
    "🍯",
    "🥐",
    "🍞",
    "🥖",
    "🧀",
    "🥚",
    "🍳",
    "🥓",
    "🥞",
    "🍤",
    "🍗",
    "🍖",
    "🍕",
    "🌭",
    "🍔",
    "🍟",
    "🥙",
    "🌮",
    "🌯",
    "🥗",
    "🥘",
    "🍝",
    "🍜",
    "🍲",
    "🍥",
    "🍣",
    "🍱",
    "🍛",
    "🍚",
    "🍙",
    "🍘",
    "🍢",
    "🍡",
    "🍧",
    "🍨",
    "🍦",
    "🍰",
    "🎂",
    "🍮",
    "🍭",
    "🍬",
    "🍫",
    "🍿",
    "🍩",
    "🍪",
    "🥛",
    "🍼",
    "☕️",
    "🍵",
    "🍶",
    "🍺",
    "🍻",
    "🥂",
    "🍷",
    "🥃",
    "🍸",
    "🍹",
    "🍾",
    "🥄",
    "🍴",
    "🍽",
  ],
  activity: [
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🎾",
    "🏐",
    "🏉",
    "🎱",
    "🏓",
    "🏸",
    "🥅",
    "🏒",
    "🏑",
    "🏏",
    "⛳️",
    "🏹",
    "🎣",
    "🥊",
    "🥋",
    "⛸",
    "🎿",
    "⛷",
    "🏂",
    "🏋️‍♀️",
    "🏋️",
    "🤺",
    "🤼‍♀️",
    "🤼‍♂️",
    "🤸‍♀️",
    "🤸‍♂️",
    "⛹️‍♀️",
    "⛹️",
    "🤾‍♀️",
    "🤾‍♂️",
    "🏌️‍♀️",
    "🏌️",
    "🏄‍♀️",
    "🏄",
    "🏊‍♀️",
    "🏊",
    "🤽‍♀️",
    "🤽‍♂️",
    "🚣‍♀️",
    "🚣",
    "🏇",
    "🚴‍♀️",
    "🚴",
    "🚵‍♀️",
    "🚵",
    "🎽",
    "🏅",
    "🎖",
    "🥇",
    "🥈",
    "🥉",
    "🏆",
    "🏵",
    "🎗",
    "🎫",
    "🎟",
    "🎪",
    "🤹‍♀️",
    "🤹‍♂️",
    "🎭",
    "🎨",
    "🎬",
    "🎤",
    "🎧",
    "🎼",
    "🎹",
    "🥁",
    "🎷",
    "🎺",
    "🎸",
    "🎻",
    "🎲",
    "🎯",
    "🎳",
    "🎮",
    "🎰",
  ],
  places: [
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚎",
    "🏎",
    "🚓",
    "🚑",
    "🚒",
    "🚐",
    "🚚",
    "🚛",
    "🚜",
    "🛴",
    "🚲",
    "🛵",
    "🏍",
    "🚨",
    "🚔",
    "🚍",
    "🚘",
    "🚖",
    "🚡",
    "🚠",
    "🚟",
    "🚃",
    "🚋",
    "🚞",
    "🚝",
    "🚄",
    "🚅",
    "🚈",
    "🚂",
    "🚆",
    "🚇",
    "🚊",
    "🚉",
    "🚁",
    "🛩",
    "✈️",
    "🛫",
    "🛬",
    "🚀",
    "🛰",
    "💺",
    "🛶",
    "⛵️",
    "🛥",
    "🚤",
    "🛳",
    "⛴",
    "🚢",
    "⚓️",
    "🚧",
    "⛽️",
    "🚏",
    "🚦",
    "🚥",
    "🗺",
    "🗿",
    "🗽",
    "⛲️",
    "🗼",
    "🏰",
    "🏯",
    "🏟",
    "🎡",
    "🎢",
    "🎠",
    "⛱",
    "🏖",
    "🏝",
    "⛰",
    "🏔",
    "🗻",
    "🌋",
    "🏜",
    "🏕",
    "⛺️",
    "🛤",
    "🛣",
    "🏗",
    "🏭",
    "🏠",
    "🏡",
    "🏘",
    "🏚",
    "🏢",
    "🏬",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏪",
    "🏫",
    "🏩",
    "💒",
    "🏛",
    "⛪️",
    "🕌",
    "🕍",
    "🕋",
    "⛩",
    "🗾",
    "🎑",
    "🏞",
    "🌅",
    "🌄",
    "🌠",
    "🎇",
    "🎆",
    "🌇",
    "🌆",
    "🏙",
    "🌃",
    "🌌",
    "🌉",
    "🌁",
  ],
  objects: [
    "⌚️",
    "📱",
    "📲",
    "💻",
    "⌨️",
    "🖥",
    "🖨",
    "🖱",
    "🖲",
    "🕹",
    "🗜",
    "💽",
    "💾",
    "💿",
    "📀",
    "📼",
    "📷",
    "📸",
    "📹",
    "🎥",
    "📽",
    "🎞",
    "📞",
    "☎️",
    "📟",
    "📠",
    "📺",
    "📻",
    "🎙",
    "🎚",
    "🎛",
    "⏱",
    "⏲",
    "⏰",
    "🕰",
    "⌛️",
    "⏳",
    "📡",
    "🔋",
    "🔌",
    "💡",
    "🔦",
    "🕯",
    "🗑",
    "🛢",
    "💸",
    "💵",
    "💴",
    "💶",
    "💷",
    "💰",
    "💳",
    "💎",
    "⚖️",
    "🔧",
    "🔨",
    "⚒",
    "🛠",
    "⛏",
    "🔩",
    "⚙️",
    "⛓",
    "🔫",
    "💣",
    "🔪",
    "🗡",
    "⚔️",
    "🛡",
    "🚬",
    "⚰️",
    "⚱️",
    "🏺",
    "🔮",
    "📿",
    "💈",
    "⚗️",
    "🔭",
    "🔬",
    "🕳",
    "💊",
    "💉",
    "🌡",
    "🚽",
    "🚰",
    "🚿",
    "🛁",
    "🛀",
    "🛎",
    "🔑",
    "🗝",
    "🚪",
    "🛋",
    "🛏",
    "🛌",
    "🖼",
    "🛍",
    "🛒",
    "🎁",
    "🎈",
    "🎏",
    "🎀",
    "🎊",
    "🎉",
    "🎎",
    "🏮",
    "🎐",
    "✉️",
    "📩",
    "📨",
    "📧",
    "💌",
    "📥",
    "📤",
    "📦",
    "🏷",
    "📪",
    "📫",
    "📬",
    "📭",
    "📮",
    "📯",
    "📜",
    "📃",
    "📄",
    "📑",
    "📊",
    "📈",
    "📉",
    "🗒",
    "🗓",
    "📆",
    "📅",
    "📇",
    "🗃",
    "🗳",
    "🗄",
    "📋",
    "📁",
    "📂",
    "🗂",
    "🗞",
    "📰",
    "📓",
    "📔",
    "📒",
    "📕",
    "📗",
    "📘",
    "📙",
    "📚",
    "📖",
    "🔖",
    "🔗",
    "📎",
    "🖇",
    "📐",
    "📏",
    "📌",
    "📍",
    "✂️",
    "🖊",
    "🖋",
    "✒️",
    "🖌",
    "🖍",
    "📝",
    "✏️",
    "🔍",
    "🔎",
    "🔏",
    "🔐",
    "🔒",
    "🔓",
  ],
  symbols: [
    "❤️",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "💔",
    "❣️",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "☮️",
    "✝️",
    "☪️",
    "🕉",
    "☸️",
    "✡️",
    "🔯",
    "🕎",
    "☯️",
    "☦️",
    "🛐",
    "⛎",
    "♈️",
    "♉️",
    "♊️",
    "♋️",
    "♌️",
    "♍️",
    "♎️",
    "♏️",
    "♐️",
    "♑️",
    "♒️",
    "♓️",
    "🆔",
    "⚛️",
    "🉑",
    "☢️",
    "☣️",
    "📴",
    "📳",
    "🈶",
    "🈚️",
    "🈸",
    "🈺",
    "🈷️",
    "✴️",
    "🆚",
    "💮",
    "🉐",
    "㊙️",
    "㊗️",
    "🈴",
    "🈵",
    "🈹",
    "🈲",
    "🅰️",
    "🅱️",
    "🆎",
    "🆑",
    "🅾️",
    "🆘",
    "❌",
    "⭕️",
    "🛑",
    "⛔️",
    "📛",
    "🚫",
    "💯",
    "💢",
    "♨️",
    "🚷",
    "🚯",
    "🚳",
    "🚱",
    "🔞",
    "📵",
    "🚭",
    "❗️",
    "❕",
    "❓",
    "❔",
    "‼️",
    "⁉️",
    "🔅",
    "🔆",
    "〽️",
    "⚠️",
    "🚸",
    "🔱",
    "⚜️",
    "🔰",
    "♻️",
    "✅",
    "🈯️",
    "💹",
    "❇️",
    "✳️",
    "❎",
    "🌐",
    "💠",
    "Ⓜ️",
    "🌀",
    "💤",
    "🏧",
    "🚾",
    "♿️",
    "🅿️",
    "🈳",
    "🈂️",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "🚹",
    "🚺",
    "🚼",
    "🚻",
    "🚮",
    "🎦",
    "📶",
    "🈁",
    "🔣",
    "ℹ️",
    "🔤",
    "🔡",
    "🔠",
    "🆖",
    "🆗",
    "🆙",
    "🆒",
    "🆕",
    "🆓",
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
    "🔢",
    "#️⃣",
    "*️⃣",
    "▶️",
    "⏸",
    "⏯",
    "⏹",
    "⏺",
    "⏭",
    "⏮",
    "⏩",
    "⏪",
    "⏫",
    "⏬",
    "◀️",
    "🔼",
    "🔽",
    "➡️",
    "⬅️",
    "⬆️",
    "⬇️",
    "↗️",
    "↘️",
    "↙️",
    "↖️",
    "↕️",
    "↔️",
    "↪️",
    "↩️",
    "⤴️",
    "⤵️",
    "🔀",
    "🔁",
    "🔂",
    "🔄",
    "🔃",
    "🎵",
    "🎶",
    "➕",
    "➖",
    "➗",
    "✖️",
    "💲",
    "💱",
    "™️",
    "©️",
    "®️",
    "〰️",
    "➰",
    "➿",
    "🔚",
    "🔙",
    "🔛",
    "🔝",
    "🔜",
    "✔️",
    "☑️",
    "🔘",
    "⚪️",
    "⚫️",
    "🔴",
    "🔵",
    "🔺",
    "🔻",
    "🔸",
    "🔹",
    "🔶",
    "🔷",
    "🔳",
    "🔲",
    "▪️",
    "▫️",
    "◾️",
    "◽️",
    "◼️",
    "◻️",
    "⬛️",
    "⬜️",
    "🔈",
    "🔇",
    "🔉",
    "🔊",
    "🔔",
    "🔕",
    "📣",
    "📢",
    "👁‍🗨",
    "💬",
    "💭",
    "🗯",
    "♠️",
    "♣️",
    "♥️",
    "♦️",
    "🃏",
    "🎴",
    "🀄️",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
    "🕜",
    "🕝",
    "🕞",
    "🕟",
    "🕠",
    "🕡",
    "🕢",
    "🕣",
    "🕤",
    "🕥",
    "🕦",
    "🕧",
  ],
  flags: [
    "🏳️",
    "🏴",
    "🏁",
    "🚩",
    "🏳️‍🌈",
    "🇦🇫",
    "🇦🇽",
    "🇦🇱",
    "🇩🇿",
    "🇦🇸",
    "🇦🇩",
    "🇦🇴",
    "🇦🇮",
    "🇦🇶",
    "🇦🇬",
    "🇦🇷",
    "🇦🇲",
    "🇦🇼",
    "🇦🇺",
    "🇦🇹",
    "🇦🇿",
    "🇧🇸",
    "🇧🇭",
    "🇧🇩",
    "🇧🇧",
    "🇧🇾",
    "🇧🇪",
    "🇧🇿",
    "🇧🇯",
    "🇧🇲",
    "🇧🇹",
    "🇧🇴",
    "🇧🇶",
    "🇧🇦",
    "🇧🇼",
    "🇧🇷",
    "🇮🇴",
    "🇻🇬",
    "🇧🇳",
    "🇧🇬",
    "🇧🇫",
    "🇧🇮",
    "🇨🇻",
    "🇰🇭",
    "🇨🇲",
    "🇨🇦",
    "🇮🇨",
    "🇰🇾",
    "🇨🇫",
    "🇹🇩",
    "🇨🇱",
    "🇨🇳",
    "🇨🇽",
    "🇨🇨",
    "🇨🇴",
    "🇰🇲",
    "🇨🇬",
    "🇨🇩",
    "🇨🇰",
    "🇨🇷",
    "🇨🇮",
    "🇭🇷",
    "🇨🇺",
    "🇨🇼",
    "🇨🇾",
    "🇨🇿",
    "🇩🇰",
    "🇩🇯",
    "🇩🇲",
    "🇩🇴",
    "🇪🇨",
    "🇪🇬",
    "🇸🇻",
    "🇬🇶",
    "🇪🇷",
    "🇪🇪",
    "🇪🇹",
    "🇪🇺",
    "🇫🇰",
    "🇫🇴",
    "🇫🇯",
    "🇫🇮",
    "🇫🇷",
    "🇬🇫",
    "🇵🇫",
    "🇹🇫",
    "🇬🇦",
    "🇬🇲",
    "🇬🇪",
    "🇩🇪",
    "🇬🇭",
    "🇬🇮",
    "🇬🇷",
    "🇬🇱",
    "🇬🇩",
    "🇬🇵",
    "🇬🇺",
    "🇬🇹",
    "🇬🇬",
    "🇬🇳",
    "🇬🇼",
    "🇬🇾",
    "🇭🇹",
    "🇭🇳",
    "🇭🇰",
    "🇭🇺",
    "🇮🇸",
    "🇮🇳",
    "🇮🇩",
    "🇮🇷",
    "🇮🇶",
    "🇮🇪",
    "🇮🇲",
    "🇮🇱",
    "🇮🇹",
    "🇯🇲",
    "🇯🇵",
    "🎌",
    "🇯🇪",
    "🇯🇴",
    "🇰🇿",
    "🇰🇪",
    "🇰🇮",
    "🇽🇰",
    "🇰🇼",
    "🇰🇬",
    "🇱🇦",
    "🇱🇻",
    "🇱🇧",
    "🇱🇸",
    "🇱🇷",
    "🇱🇾",
    "🇱🇮",
    "🇱🇹",
    "🇱🇺",
    "🇲🇴",
    "🇲🇰",
    "🇲🇬",
    "🇲🇼",
    "🇲🇾",
    "🇲🇻",
    "🇲🇱",
    "🇲🇹",
    "🇲🇭",
    "🇲🇶",
    "🇲🇷",
    "🇲🇺",
    "🇾🇹",
    "🇲🇽",
    "🇫🇲",
    "🇲🇩",
    "🇲🇨",
    "🇲🇳",
    "🇲🇪",
    "🇲🇸",
    "🇲🇦",
    "🇲🇿",
    "🇲🇲",
    "🇳🇦",
    "🇳🇷",
    "🇳🇵",
    "🇳🇱",
    "🇳🇨",
    "🇳🇿",
    "🇳🇮",
    "🇳🇪",
    "🇳🇬",
    "🇳🇺",
    "🇳🇫",
    "🇲🇵",
    "🇰🇵",
    "🇳🇴",
    "🇴🇲",
    "🇵🇰",
    "🇵🇼",
    "🇵🇸",
    "🇵🇦",
    "🇵🇬",
    "🇵🇾",
    "🇵🇪",
    "🇵🇭",
    "🇵🇳",
    "🇵🇱",
    "🇵🇹",
    "🇵🇷",
    "🇶🇦",
    "🇷🇪",
    "🇷🇴",
    "🇷🇺",
    "🇷🇼",
    "🇧🇱",
    "🇸🇭",
    "🇰🇳",
    "🇱🇨",
    "🇵🇲",
    "🇻🇨",
    "🇼🇸",
    "🇸🇲",
    "🇸🇹",
    "🇸🇦",
    "🇸🇳",
    "🇷🇸",
    "🇸🇨",
    "🇸🇱",
    "🇸🇬",
    "🇸🇽",
    "🇸🇰",
    "🇸🇮",
    "🇸🇧",
    "🇸🇴",
    "🇿🇦",
    "🇬🇸",
    "🇰🇷",
    "🇸🇸",
    "🇪🇸",
    "🇱🇰",
    "🇸🇩",
    "🇸🇷",
    "🇸🇿",
    "🇸🇪",
    "🇨🇭",
    "🇸🇾",
    "🇹🇼",
    "🇹🇯",
    "🇹🇿",
    "🇹🇭",
    "🇹🇱",
    "🇹🇬",
    "🇹🇰",
    "🇹🇴",
    "🇹🇹",
    "🇹🇳",
    "🇹🇷",
    "🇹🇲",
    "🇹🇨",
    "🇹🇻",
    "🇺🇬",
    "🇺🇦",
    "🇦🇪",
    "🇬🇧",
    "🇺🇸",
    "🇻🇮",
    "🇺🇾",
    "🇺🇿",
    "🇻🇺",
    "🇻🇦",
    "🇻🇪",
    "🇻🇳",
    "🇼🇫",
    "🇪🇭",
    "🇾🇪",
    "🇿🇲",
    "🇿🇼",
  ],
};

export const categories = {
  people: "😀",
  nature: "🐶",
  foods: "🍏",
  activity: "⚽️",
  places: "🚗",
  objects: "⌚️",
  symbols: "🈺",
  flags: "🏳",
};

export const categoriesList = Object.keys(categories);

export const unicodeEmojis = categoriesList.reduce((prevVal, category) => {
  prevVal[category] = _unicodeEmojis[category].map((unicodeString: string) => ({
    type: "unicode",
    unicodeString,
  }));
  return prevVal;
}, {});
