import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'JetBrains Mono', monospace`,
    heading: `'JetBrains Mono', monospace`,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
        backgroundColor: "black", // Use the custom gray color from the theme
        color: "#f8f8f2",
      },
    },
  },
  colors: {
    black: "#1f1f1f",
    gray: "#242424", // Assign a shade for gray
    red: "#e74c3c", // Assign a shade for red
    blue: "#3498db", // Assign a shade for blue
    green: "#1abc9c", // Assign a shade for green
  },
});

export default theme;
