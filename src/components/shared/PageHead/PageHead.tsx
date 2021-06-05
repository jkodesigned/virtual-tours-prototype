import Head from "next/head";
import { t } from "@lingui/macro";

// TODO: title, description, favicon

export function PageHead() {
  return (
    <Head>
      <title>{t`Virtual Tours`}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
