import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { FaBarcode } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { createDelivery } from "../../../../services";

const newProduct = () => ({
  id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
  sku: "",
  quantity: 0,
  barcodeImage: null,
});

const Anbardn = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [exitType, setExitType] = useState("");
  const [reference, setReference] = useState("");
  const [products, setProducts] = useState([newProduct()]);
  const [notes, setNotes] = useState("");

  const handleProductChange = (idx, field, value) => {
    const updated = products.map((item, i) =>
      i === idx ? { ...item, [field]: value } : item
    );
    setProducts(updated);
  };
  const resetForm = () => {
    setDate(new Date().toISOString().split("T")[0]);
    setExitType("");
    setReference("");
    setProducts([newProduct()]);
    setNotes("");
  };
  const addProduct = () => setProducts([...products, newProduct()]);
  const removeProduct = (idx) =>
    setProducts(products.filter((_, i) => i !== idx));

  const handleSubmit = async () => {
    try {
      const data = {
        date,
        exitType,
        reference,
        products,
        notes
      };
      await createDelivery(data);
      resetForm();
      alert(t('common.success', { defaultValue: 'Operation successful' }));
    } catch (error) {
      console.error("Error creating delivery:", error);
      alert(t('common.error', { defaultValue: 'Operation failed' }));
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-6 xl:p-8 space-y-8 dark:text-white text-[#001233]">
      {/* Form */}
      <div className="bg-[#FFFFFF] dark:bg-[#001233] rounded-2xl border border-[#33415C] p-4 sm:p-6 space-y-6">
        {/* Başlıq */}
        <div>
          <h2 className="text-lg font-semibold dark:text-white text-[#023E7D]">
            {t("pages.warehouse.operations.dn.title")}
          </h2>
        </div>

        {/* Əsas məlumatlar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white text-[#5C677D]">
              {t("pages.warehouse.operations.common.date")}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#FFFFFF] dark:bg-[#001233] border border-[#979DAC] rounded px-3 py-2 text-[#001233] dark:text-white placeholder:text-[#7D8597]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white text-[#5C677D]">
              {t("pages.warehouse.operations.dn.exitType")}
            </label>
            <select
              value={exitType}
              onChange={(e) => setExitType(e.target.value)}
              className="w-full bg-[#FFFFFF]  dark:bg-[#001233]  border border-[#979DAC] rounded px-3 py-2 text-[#001233] dark:text-white"
            >
              <option hidden>
                {t("pages.warehouse.operations.common.select")}
              </option>
              <option value="sale">
                {t("pages.warehouse.operations.dn.exitTypeOptions.sale")}
              </option>
              <option value="to_production">
                {t(
                  "pages.warehouse.operations.dn.exitTypeOptions.toProduction"
                )}
              </option>
              <option value="return_supplier">
                {t(
                  "pages.warehouse.operations.dn.exitTypeOptions.returnToSupplier"
                )}
              </option>
              <option value="writeoff">
                {t("pages.warehouse.operations.dn.exitTypeOptions.writeOff")}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white text-[#5C677D]">
              {t("pages.warehouse.operations.dn.reference")}
            </label>
            <input
              type="text"
              value={reference}
              placeholder="INV-9012"
              onChange={(e) => setReference(e.target.value)}
              className="w-full bg-[#FFFFFF] dark:bg-[#001233] border border-[#979DAC] rounded px-3 py-2 text-[#001233] dark:text-white placeholder:text-[#7D8597]"
            />
          </div>
        </div>

        {/* Məhsullar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold dark:text-white text-[#023E7D]">
              {t("pages.warehouse.operations.common.products")}
            </span>
            <button
              type="button"
              onClick={addProduct}
              className="flex items-center gap-1 px-3 py-1 border border-[#979DAC] rounded dark:bg-[#001233] dark:text-white dark:hover:bg-[#002244] bg-[#FFFFFF] hover:bg-[#F5F8FF] text-[#023E7D]"
            >
              <FiPlus /> {t("pages.warehouse.operations.common.addProduct")}
            </button>
          </div>

          <div className="space-y-3">
            {products.map((item, idx) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row gap-2 items-center dark:text-white bg-[#FFFFFF] dark:bg-[#001233] border border-[#979DAC] rounded-lg p-3"
              >
                {/* SKU seçimi */}
                <div className="flex-1 flex items-center gap-2">
                  <select
                    value={item.sku}
                    onChange={(e) =>
                      handleProductChange(idx, "sku", e.target.value)
                    }
                    className="w-full bg-[#FFFFFF] border dark:bg-[#001233]  dark:text-white border-[#979DAC] rounded px-2 py-1 text-[#001233]"
                  >
                    <option value="">
                      {t("pages.warehouse.operations.common.select")}
                    </option>
                    <option value="XM-A101">XM-A101 - Xammal A-101</option>
                    <option value="HM-B205">
                      HM-B205 - Hazır məhsul B-205
                    </option>
                    <option value="BT-M1250">BT-M1250 - Bolt M12x50</option>
                  </select>

                  {/* Ştrixkod şəkli yükləmə */}
                  <label className="cursor-pointer bg-[#FFFFFF]   dark:bg-[#001233] border border-[#979DAC] hover:bg-[#F5F8FF] dark:hover:bg-[#002244] rounded p-2 flex items-center justify-center text-[#001233] dark:text-white">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleProductChange(
                          idx,
                          "barcodeImage",
                          e.target.files[0]
                        )
                      }
                    />
                    <FaBarcode />
                  </label>
                </div>

                {/* Miqdar */}
                <div className="flex-none w-full lg:w-36 xl:w-44">
                  <label className="block text-sm font-medium mb-1  dark:text-white text-[#5C677D]">
                    {t("pages.warehouse.operations.common.quantity")}
                  </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleProductChange(idx, "quantity", e.target.value)
                    }
                    className="w-full bg-[#FFFFFF]  dark:bg-[#001233] border border-[#979DAC] rounded px-2 py-1 text-[#001233] dark:text-white"
                    min="0"
                  />
                </div>

                {/* Sətir sil düyməsi */}
                {products.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProduct(idx)}
                    className="ml-2 text-red-500 hover:bg-[#F5F8FF] rounded p-1"
                    title={t("pages.warehouse.operations.common.removeRow")}
                  >
                    <FiMinus />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Qeydlər */}
        <div>
          <label className="block text-sm font-medium  dark:text-white mb-1 text-[#5C677D]">
            {t("pages.warehouse.operations.common.notes")}
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t(
              "pages.warehouse.operations.common.notesPlaceholder"
            )}
            className="w-full bg-[#FFFFFF]  dark:bg-[#001233] border border-[#979DAC] rounded px-3 py-2 text-[#001233] dark:text-white placeholder:text-[#7D8597]"
            rows={2}
          />
        </div>

        {/* Əməliyyat düymələri */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 rounded dark:bg-[#001233] dark:text-white bg-[#FFFFFF] border border-[#979DAC] text-[#023E7D] hover:bg-[#F5F8FF] dark:hover:bg-[#00264d] flex items-center gap-2 transition-all duration-400"
          >
            {t("common.cancel")}
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-[#0466CB] hover:bg-[#0453A4] text-white flex items-center gap-2"
          >
            <MdOutlineDone /> {t("pages.warehouse.operations.dn.confirm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anbardn;
