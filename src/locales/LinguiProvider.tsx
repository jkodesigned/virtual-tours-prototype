import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { en as enPlurals, cs as csPlurals } from "make-plural";
import { messages as en } from "locales/en/messages.js";
import { messages as cs } from "locales/cs/messages.js";
import { Locales } from "locales";

// TODO: Dynamic imports for messages?

i18n.loadLocaleData(Locales.En, { plurals: enPlurals });
i18n.loadLocaleData(Locales.Cs, { plurals: csPlurals });

i18n.load(Locales.En, en);
i18n.load(Locales.Cs, cs);

i18n.activate(Locales.En);

interface Props {
  children: ReactNode;
}

export function LinguiProvider({ children }: Props) {
  const { locale } = useRouter();

  useEffect(() => {
    if (locale === Locales.En) i18n.activate(Locales.En);
    if (locale === Locales.Cs) i18n.activate(Locales.Cs);
  }, [locale]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
