# Music Player Application

[repo](https://github.com/CodeWithGionatha-Labs/music-player)

## Expo Setup

```bash
yarn create expo-app . -t

npx expo lint

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native

yarn lint --fix
```

```js
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
  },
};
```

## Expo Router Setup

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

"main": "expo-router/entry"

"scheme": "plantly"
```

create app folder and move App.tsx to that and change to index.tsx and create _layout.tsx

## NativeWind Setup

```bash
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

npx tailwindcss init
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

add global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

add babel preset

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

metro.config.js setup

```bash
npx expo customize metro.config.js
```

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });

import "./global.css"
```

nativewind-env.d.ts

```ts
/// <reference types="nativewind/types" />
```

[expo-router nativewind](https://www.nativewind.dev/getting-started/expo-router)

[typescript nativewind](https://www.nativewind.dev/getting-started/typescript)

## Development Build

```bash
npx expo install expo-dev-client

npx expo prebuild --platform ios
npx expo prebuild --platform android

npx expo run:ios
npx expo run:android
```

```bash
npx expo install expo-blur
```

[cssInterop](https://github.com/nativewind/nativewind/discussions/989)

Upgrade the Expo SDK

```bash
yarn add expo@latest

npx expo install --fix
```

FastImage

```bash
npx expo install react-native-fast-image
```

Image type inference in import

```ts
declare module "*.png";
declare module "*.jpg";
```
