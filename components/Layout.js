import Head from "next/head";
import GlobalStyle from "styles/GlobalStyle";
import Footer from "components/Footer";
import Header from "components/Header";
import Contact from "components/Contact";
import Separator from "components/Separator";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Header />
      {children}
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
