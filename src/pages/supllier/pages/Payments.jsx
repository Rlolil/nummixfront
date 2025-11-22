import { HiOutlineExclamation, HiPlus } from "react-icons/hi";
import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";
import { MdOutlinePayment } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getSupplierPayments, createSupplierPayment, updateSupplierPayment, updateSupplierPaymentStatus } from "../../../services";

export default function Payments() {
    const { t } = useTranslation();
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newPayment, setNewPayment] = useState({
        paymentNo: "",
        supplierName: "",
        amount: "",
        paidAmount: "",
        dueDate: "",
        status: "pending"
    });

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            const data = await getSupplierPayments();
            setPayments(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching payments:", error);
        }
    };

    const handleAddPayment = async (e) => {
        e.preventDefault();
        try {
            await createSupplierPayment(newPayment);
            fetchPayments();
            setNewPayment({
                paymentNo: "",
                supplierName: "",
                amount: "",
                paidAmount: "",
                dueDate: "",
                status: "pending"
            });
            document.getElementById("addPaymentModal")?.close();
        } catch (error) {
            console.error("Error creating payment:", error);
        }
    };

    const handlePay = async (payment) => {
        // Example: Mark as paid or update paid amount. 
        // For simplicity, let's just update status to 'paid' if it's not.
        try {
            if (payment.status !== 'paid') {
                await updateSupplierPaymentStatus(payment.id || payment._id, 'paid');
                fetchPayments();
            }
        } catch (error) {
            console.error("Error updating payment status:", error);
        }
    };

    const filteredPayments = payments.filter(p => 
        p.paymentNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.supplierName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full flex flex-col gap-6 bg-white text-[#001233] dark:bg-[#001233] dark:text-white">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#023E7D] dark:text-[#0466CB]">
                        {t("pages.supplier.payments.title")}
                    </h2>
                    <p className="text-[#7D8597] dark:text-[#5C677D]">
                        {t("pages.supplier.payments.subtitle")}
                    </p>
                </div>
                <button 
                    className="btn bg-[#0466CB] hover:bg-[#0453A4] text-white border-none gap-2"
                    onClick={() => document.getElementById("addPaymentModal")?.showModal()}
                >
                    <HiPlus className="w-5 h-5" />
                    {t("pages.supplier.payments.actions.newPayment") || "New Payment"}
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title={t("pages.supplier.payments.cards.pending.title")}
                    amount={<div className="text-2xl text-orange-600 dark:text-orange-400">10775.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.pending.description")}
                    icon={<MdOutlinePayment className="text-[#001233] dark:text-white" />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.paid.title")}
                    amount={<div className="text-2xl text-green-600 dark:text-green-400">5000.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.paid.description")}
                    icon={<HiOutlineExclamation className="text-green-600 dark:text-green-400" />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.overdue.title")}
                    amount={<div className="text-2xl text-red-600 dark:text-red-400">1</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.overdue.description")}
                    icon={<MdOutlinePayment className="text-red-600 dark:text-red-400" />}
                />
            </div>

            <label className="input w-full rounded-xl bg-[#f4f4f5] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#979DAC]">
                <svg className="h-[1em] opacity-50 text-[#001233] dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    className="grow placeholder:text-[#7D8597] dark:placeholder:text-[#5C677D] bg-transparent"
                    placeholder={t("pages.supplier.payments.searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>

            <BodyCard
                title={null}
                child={
                    <div className="w-full flex flex-col gap-6">
                        <h3 className="text-[#023E7D] dark:text-[#0466CB]">{t("pages.supplier.payments.table.title")}</h3>
                        <div className="overflow-x-auto ">
                            <table className="table text-base">
                                <thead>
                                    <tr className="text-[#001233] dark:text-white text-base">
                                        <th>{t("pages.supplier.payments.table.columns.paymentNo")}</th>
                                        <th className="hidden sm:table-cell">{t("pages.supplier.payments.table.columns.supplier")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.amount")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.paid")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.balance")}</th>
                                        <th className="hidden lg:table-cell">{t("pages.supplier.payments.table.columns.dueDate")}</th>
                                        <th className="hidden sm:table-cell">{t("pages.supplier.payments.table.columns.status")}</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>

                                <tbody className="border-t border-[#979DAC] dark:border-[#979DAC]">
                                    {filteredPayments.map((payment, index) => (
                                        <tr key={index} className="hover:bg-[#f8f9fa] dark:hover:bg-[#33415C]">
                                            <td className="font-medium">{payment.paymentNo}</td>
                                            <td className="hidden sm:table-cell">{payment.supplierName}</td>
                                            <td className="hidden md:table-cell">{payment.amount}</td>
                                            <td className="hidden md:table-cell">{payment.paidAmount}</td>
                                            <td className="hidden md:table-cell text-green-600 dark:text-green-400">
                                                {/* Calculate balance if possible, or use a field */}
                                                {payment.balance || "0 AZN"}
                                            </td>
                                            <td className="hidden lg:table-cell">
                                                <div className="space-y-1">
                                                    <p>{payment.dueDate}</p>
                                                </div>
                                            </td>
                                            <td className="hidden sm:table-cell">
                                                <span className={`badge font-semibold text-xs ${
                                                    payment.status === 'paid' ? 'badge-success' : 
                                                    payment.status === 'overdue' ? 'badge-error' : 'badge-warning'
                                                }`}>
                                                    {payment.status}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                {payment.status !== 'paid' && (
                                                    <button 
                                                        className="btn btn-sm rounded-md h-8 px-3 bg-[#0466CB] hover:bg-[#0453A4] text-white dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                                                        onClick={() => handlePay(payment)}
                                                    >
                                                        {t("pages.supplier.payments.actions.pay")}
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredPayments.length === 0 && (
                                        <tr>
                                            <td colSpan="8" className="text-center py-4">No payments found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />

            <BodyCard
                title={null}
                child={
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#023E7D] dark:text-[#0466CB]">{t("pages.supplier.payments.upcoming.title")}</h4>
                        <p className="text-center text-[#7D8597] dark:text-[#5C677D] py-8">
                            {t("pages.supplier.payments.upcoming.empty")}
                        </p>
                    </div>
                }
            />

            {/* Add Payment Modal */}
            <dialog id="addPaymentModal" className="modal">
                <div className="modal-box bg-white dark:bg-[#001233]">
                    <h3 className="font-bold text-lg text-[#023E7D] dark:text-[#0466CB]">Add New Payment</h3>
                    <form onSubmit={handleAddPayment} className="py-4 flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Payment No" 
                            className="input input-bordered w-full" 
                            value={newPayment.paymentNo}
                            onChange={(e) => setNewPayment({...newPayment, paymentNo: e.target.value})}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Supplier Name" 
                            className="input input-bordered w-full" 
                            value={newPayment.supplierName}
                            onChange={(e) => setNewPayment({...newPayment, supplierName: e.target.value})}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Amount" 
                            className="input input-bordered w-full" 
                            value={newPayment.amount}
                            onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Paid Amount" 
                            className="input input-bordered w-full" 
                            value={newPayment.paidAmount}
                            onChange={(e) => setNewPayment({...newPayment, paidAmount: e.target.value})}
                        />
                        <input 
                            type="date" 
                            placeholder="Due Date" 
                            className="input input-bordered w-full" 
                            value={newPayment.dueDate}
                            onChange={(e) => setNewPayment({...newPayment, dueDate: e.target.value})}
                            required
                        />
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={() => document.getElementById("addPaymentModal").close()}>Cancel</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
