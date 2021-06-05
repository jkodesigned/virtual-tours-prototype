import Head from "next/head";
import { t } from "@lingui/macro";
import { DesignSystem } from "components/pages";

export default function DesignSystemPage() {
  return (
    <>
      <Head>
        <title>Design System | {t`Virtual Tours`}</title>
      </Head>

      <DesignSystem />
    </>
  );
}
