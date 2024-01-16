// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    "gray": {
      "50": "#E8F0FD",
      "100": "#BED6F8",
      "200": "#94BBF4",
      "300": "#6BA1F0",
      "400": "#4186EC",
      "500": "#176CE8",
      "600": "#0E418B",
      "700": "#0E418B",
      "800": "#05162E",
      "900": "#05162E"
    }
      
    

  },
});

export default theme;
