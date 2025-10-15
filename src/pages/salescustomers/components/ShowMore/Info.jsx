export default function Info({ item }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <p className="font-semibold text-sm">Əlaqə Şəxs</p>
                <p>{item.contactPerson}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">Telefon</p>
                <p>{item.phone}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">VÖEN</p>
                <p>{item.taxNumber}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">Seqment</p>
                <p>
                    <span
                        className={`badge font-semibold text-xs ${
                            item.segment === "Gecikən Ödəniş"
                                ? "badge-error"
                                : item.segment === "Yeni Müştəri"
                                ? "badge-ghost"
                                : "badge-neutral"
                        }`}
                    >
                        {item.segment}
                    </span>
                </p>
            </div>
            <div>
                <p className="font-semibold text-sm">Ümumi Satış</p>
                <p>{item.totalSales}</p>
            </div>
            <div>
                <p className="font-semibold text-sm">Borc</p>
                <p className={`${item.debt === "₼0" ? "text-green-600" : "text-red-600"}`}>{item.debt}</p>
            </div>
        </div>
    );
}
