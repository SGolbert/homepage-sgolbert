import App from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2B57B8",
    primaryDark: "#003087",
    primaryLight: "#6784EB",
    secondary: "#5ED640",
    secondaryDark: "#19A400",
    secondaryLight: "#95FF72",
    textBlack: "#001233",
    textWhite: "#FFFFFF",
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
