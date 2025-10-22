import { useTranslation } from "react-i18next";

export default function Payments() {
    const { t } = useTranslation();
    return <div>{t("pages.sales.customers.tabs.payments")}</div>;
}
