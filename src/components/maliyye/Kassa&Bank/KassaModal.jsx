import React from "react";
import { IoClose } from "react-icons/io5";
import Overlay from "../../overlay";

const KassaModal = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <div className="bg-white w-[550px] rounded-xl shadow-lg p-6 relative">
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Yeni Əməliyyat</h2>
            <p className="text-gray-500 text-sm">Kassa və ya bank əməliyyatı əlavə edin</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">
            <IoClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm">Əməliyyat növü</label>
            <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Seçin</option>
              <option>Daxilolma</option>
              <option>Çıxış</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm">Məbləğ</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Valyuta</label>
            <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
              <option>AZN</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm">Kateqoriya</label>
            <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Seçin</option>
              <option>Maaş</option>
              <option>Satış</option>
              <option>Digər</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm">İzah</label>
            <textarea
              placeholder="Əməliyyat haqqında qeyd..."
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Ləğv et
          </button>
          <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Əlavə et
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default KassaModal;
