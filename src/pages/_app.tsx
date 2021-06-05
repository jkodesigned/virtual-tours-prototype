import type { AppProps } from "next/app";
import { LinguiProvider } from "locales/LinguiProvider";
import { PageHead } from "components/shared";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LinguiProvider>
      <PageHead />
      <Component {...pageProps} />
    </LinguiProvider>
  );
}

export default MyApp;
