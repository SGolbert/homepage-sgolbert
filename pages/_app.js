import App from "next/app";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#2B57B8",
    primaryDark: "#003087",
    primaryLight: "#6784EB",
    grey: "#BFBFBF",
    secondary: "#5ED640",
    secondaryDark: "#19A400",
    secondaryLight: "#95FF72",
    textBlack: "#001233",
    textWhite: "#FFFFFF",
  },
  backgrounds: {
    about: "linear-gradient(180deg, #001233 0%, #003087 24.48%, #001233 100%)",
    blog: "linear-gradient(180deg, #001233 0%, #003087 100%)",
  },
  media_sizes: {
    mobile: "375px",
    mobileTransition: "800px",
    desktop: "1440px",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
