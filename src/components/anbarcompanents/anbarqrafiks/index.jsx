"use client"; //esas sehife sol qrafik
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import { useTranslation } from "react-i18next";

const AdataRaw = ["jan","feb","mar","apr","may","jun"];

export function MonthlyStockChart() {
  const { t } = useTranslation();
  const Adata = AdataRaw.map(key => ({ name: t(`common.months.${key}`), value: ({jan:450,feb:520,mar:390,apr:610,may:480,jun:530}[key]) }));
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{t('pages.warehouse.charts.monthlyStock')}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={Adata}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#000000" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
////////////////////// esas sehife sag qrafik

const SdataKeys = ["rawMaterials","finishedGoods","spareParts","packaging"];

const COLORS = ["#000000", "#4B5563", "#9CA3AF", "#D1D5DB"];

export function CategoryDistributionChart() {
  const { t } = useTranslation();
  const Sdata = SdataKeys.map(k => ({ name: t(`pages.warehouse.categories.${k}`), value: ({rawMaterials:35,finishedGoods:28,spareParts:22,packaging:15}[k]) }));
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{t('pages.warehouse.charts.categoryDistribution')}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={Sdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {Sdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}



// Demo data (backend hazir olanda buradan fetch olunacaq)



const stokDovriyeKeys = ["jan","feb","mar","apr","may","jun"];

const anbarDeyeriKeys = ["jan","feb","mar","apr","may","jun"];

export function StokDovriyeChart() {
  const { t } = useTranslation();
  const stokDovriyeData = stokDovriyeKeys.map(k => ({ ay: t(`common.months.${k}`), deyer: ({jan:4.2,feb:4.5,mar:4.1,apr:4.8,may:4.6,jun:4.9}[k]) }));
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">{t('pages.warehouse.charts.stockTurnoverRatio')}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stokDovriyeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ay" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="deyer" stroke="#3b82f6" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AnbarDeyeriChart() {
  const { t } = useTranslation();
  const anbarDeyeriData = anbarDeyeriKeys.map(k => ({ ay: t(`common.months.${k}`), deyer: ({jan:420000,feb:450000,mar:430000,apr:470000,may:460000,jun:480000}[k]) }));
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">{t('pages.warehouse.charts.inventoryValueDynamics')}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={anbarDeyeriData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ay" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="deyer" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ChartsGroup() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1"><StokDovriyeChart /></div>
      <div className="flex-1"><AnbarDeyeriChart /></div>
    </div>
  );
}

