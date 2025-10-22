import { useTranslation } from "react-i18next";

export default function Info({ item }) {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.form.contactPerson")}</p>
                <p>{item.contactPerson}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.form.phone")}</p>
                <p>{item.phone}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.form.taxId")}</p>
                <p>{item.taxNumber}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.table.columns.segment")}</p>
                <p>
                    <span
                        className={`badge font-semibold text-xs ${
                            item.segmentCode === "overdue"
                                ? "badge-error"
                                : item.segmentCode === "new"
                                ? "badge-ghost"
                                : "badge-neutral"
                        }`}
                    >
                        {t(`pages.sales.customers.segments.${item.segmentCode}`)}
                    </span>
                </p>
            </div>
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.table.columns.totalSales")}</p>
                <p>{item.totalSales}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">{t("pages.sales.customers.table.columns.debt")}</p>
                <p className={`${item.debt === "₼0" ? "text-green-600" : "text-red-600"}`}>{item.debt}</p>
            </div>
        </div>
    );
}
