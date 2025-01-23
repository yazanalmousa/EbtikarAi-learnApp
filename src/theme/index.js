import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#FFE8F0",
      100: "#FFB3C1",
      200: "#FF7A92",
      300: "#FF4D5A",
      400: "#EE1D52",
      500: "#C70039",
      600: "#900C3F",
      700: "#343434",
      800: "#222222",
      900: "#121212",
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
        transition: "0.3s",
        _hover: { transform: "scale(1.05)" },
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: {
          bg: "brand.400",
          color: "white",
          _hover: { bg: "brand.500" },
        },
        outline: {
          border: "2px solid",
          borderColor: "brand.400",
          color: "brand.400",
          _hover: {
            bg: "brand.50",
            color: "brand.500",
          },
        },
        ghost: {
          bg: "transparent",
          color: "brand.400",
          _hover: {
            bg: "brand.700",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "solid",
        colorScheme: "brand",
      },
    },
  },

  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        height: "100vh",
        overflowY: "hidden",
      },
      h1: {
        fontSize: "2xl",
        fontWeight: "bold",
        color: "brand.400",
      },
      a: {
        color: "brand.200",
        _hover: {
          textDecoration: "underline",
          color: "brand.400",
        },
      },
    },
  },
});

export default theme;
