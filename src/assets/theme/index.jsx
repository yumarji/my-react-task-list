import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

const Heading = {
  variants: {
    banner: {
      color: "white",
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "5px",
    },
  },
};

export const theme = extendTheme({ fonts, components: { Heading } });
