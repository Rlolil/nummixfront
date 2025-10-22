import { useTranslation } from "react-i18next";

export default function SalesHistory() {
    const { t } = useTranslation();
    return <div>{t("pages.sales.customers.tabs.salesHistory")}</div>;
}
