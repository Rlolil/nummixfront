import React, { useState } from 'react';
import { Package, Box, TrendingDown, Grid3x3, Search, Plus, MoreVertical, Download, FileText, Eye } from 'lucide-react';

export default function EsasVesaitler() {
  const [activeTab, setActiveTab] = useState('management');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCategoryReport, setShowCategoryReport] = useState(false);
  const [showBranchReport, setShowBranchReport] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    invNo: '',
    category: '',
    account: '111',
    purchaseDate: '',
    initialValue: '',
    residualValue: '',
    depreciationMethod: 'Düzxətli',
    location: '',
    branch: '',
    responsible: '',
    serialNo: '',
    warranty: '',
    notes: ''
  });

  // Asset data
  const assets = [
    {
      invNo: 'INV-2024-001',
      name: 'Dell Kompüter',
      category: 'Kompüter avadanlığı',
      account: '111',
      location: 'Bakı Ofisi',
      initialValue: '2,500',
      currentValue: '2,187.5',
      status: 'Aktiv'
    },
    {
      invNo: 'INV-2023-045',
      name: 'Toyota Camry',
      category: 'Nəqliyyat vasitələri',
      account: '112',
      location: 'Bakı Ofisi',
      initialValue: '45,000',
      currentValue: '32,500',
      status: 'Aktiv'
    },
    {
      invNo: 'INV-2024-012',
      name: 'HP Printer LaserJet',
      category: 'Ofis avadanlığı',
      account: '111',
      location: 'Bakı Ofisi',
      initialValue: '1,200',
      currentValue: '1,050',
      status: 'Aktiv'
    },
    {
      invNo: 'INV-2020-001',
      name: 'Ofis binası',
      category: 'Əmlak',
      account: '113',
      location: '28 May metrosu yaxınlığı',
      initialValue: '500,000',
      currentValue: '445,000',
      status: 'Aktiv'
    },
    {
      invNo: 'INV-2023-089',
      name: 'Samsung Monitor 27"',
      category: 'Kompüter avadanlığı',
      account: '111',
      location: 'Bakı Ofisi',
      initialValue: '450',
      currentValue: '300',
      status: 'Aktiv'
    }
  ];

  // Dashboard data
  const stats = [
    {
      title: 'Ümumi dəyər',
      value: '549,150',
      subtitle: 'İlkin dəyər',
      icon: <Package className="w-5 h-5" />
    },
    {
      title: 'Cari dəyər',
      value: '481,037.5',
      subtitle: 'Amortizasiya sonrası',
      icon: <Box className="w-5 h-5" />
    },
    {
      title: 'Amortizasiya',
      value: '68,112.5',
      subtitle: 'Yığılmış',
      icon: <TrendingDown className="w-5 h-5" />
    },
    {
      title: 'Aktiv sayı',
      value: '5',
      subtitle: 'Cəmi 5 aktivdən',
      icon: <Grid3x3 className="w-5 h-5" />
    }
  ];

  // Category distribution data
  const categories = [
    { name: 'Əmlak', count: 1, percentage: 65, color: '#FF8A65' },
    { name: 'Ofis avadanlığı', count: 1, percentage: 15, color: '#FFB74D' },
    { name: 'Nəqliyyat vasitələri', count: 1, percentage: 10, color: '#4DB6AC' },
    { name: 'Kompüter avadanlığı', count: 2, percentage: 10, color: '#64B5F6' }
  ];

  // Branch data
  const branchData = [
    { name: 'IT Şöbəsi', value: 25000 },
    { name: 'Nəqliyyat', value: 55000 },
    { name: 'Mühasibatlıq', value: 35000 },
    { name: 'Baş Ofis', value: 420000 },
    { name: 'Dizayn Şöbəsi', value: 15000 }
  ];

  const maxValue = Math.max(...branchData.map(d => d.value));

  // Generate Excel file for general report
  const generateExcelReport = () => {
    const csvContent = [
      ['İnv. №', 'Ad', 'Kateqoriya', 'Hesab', 'Yer', 'İlkin dəyər (₼)', 'Cari dəyər (₼)', 'Amortizasiya (₼)', 'Status'].join(','),
      ...assets.map(asset => [
        asset.invNo,
        asset.name,
        asset.category,
        asset.account,
        asset.location,
        asset.initialValue,
        asset.currentValue,
        (parseFloat(asset.initialValue.replace(/,/g, '')) - parseFloat(asset.currentValue.replace(/,/g, ''))).toFixed(2),
        asset.status
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `umumi_hesabat_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  // Generate PDF report for depreciation
  const generateDepreciationPDF = () => {
    // In a real application, you would use a library like jsPDF
    // For now, we'll generate a simple text-based report
    const reportContent = `
AMORTIZASIYA HESABATI
Tarix: ${new Date().toLocaleDateString('az-AZ')}

═══════════════════════════════════════════════════════════════

ÜMUMI MƏLUMAT
─────────────────────────────────────────────────────────────
Ümumi ilkin dəyər:        549,150 ₼
Cari dəyər:               481,037.5 ₼
Yığılmış amortizasiya:    68,112.5 ₼
Amortizasiya faizi:       12.4%

═══════════════════════════════════════════════════════════════

AKTIVLƏR ÜZRƏ AMORTIZASIYA
─────────────────────────────────────────────────────────────
${assets.map(asset => {
  const depreciation = parseFloat(asset.initialValue.replace(/,/g, '')) - parseFloat(asset.currentValue.replace(/,/g, ''));
  const depreciationRate = (depreciation / parseFloat(asset.initialValue.replace(/,/g, '')) * 100).toFixed(2);
  return `
${asset.name}
  İnv. №: ${asset.invNo}
  Kateqoriya: ${asset.category}
  İlkin dəyər: ${asset.initialValue} ₼
  Cari dəyər: ${asset.currentValue} ₼
  Amortizasiya: ${depreciation.toFixed(2)} ₼ (${depreciationRate}%)
  ─────────────────────────────────────────────────────────────`;
}).join('')}

═══════════════════════════════════════════════════════════════
Hesabat tarixi: ${new Date().toLocaleString('az-AZ')}
`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `amortizasiya_hesabati_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  };

  // Category report data
  const categoryReportData = [
    { name: 'Əmlak', count: 1, totalValue: 500000, currentValue: 445000, depreciation: 55000 },
    { name: 'Nəqliyyat vasitələri', count: 1, totalValue: 45000, currentValue: 32500, depreciation: 12500 },
    { name: 'Kompüter avadanlığı', count: 2, totalValue: 2950, currentValue: 2487.5, depreciation: 462.5 },
    { name: 'Ofis avadanlığı', count: 1, totalValue: 1200, currentValue: 1050, depreciation: 150 }
  ];

  // Branch report data
  const branchReportData = [
    { name: 'Bakı Ofisi', count: 4, totalValue: 49150, currentValue: 35737.5 },
    { name: '28 May metrosu yaxınlığı', count: 1, totalValue: 500000, currentValue: 445000 }
  ];

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.invNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Əsas Vəsaitlər Modulu
            </h1>
            <p className="text-gray-600">
              Aktivlərin idarəsi və amortizasiya uçotu
            </p>
          </div>
          {activeTab === 'assets' && (
            <button 
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Yeni aktiv
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 bg-white rounded-lg p-2 shadow-sm">
          <button
            onClick={() => setActiveTab('management')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'management'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Package className="w-4 h-4" />
            İdarə paneli
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'assets'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
            Aktivlər
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'reports'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            Hesabatlar
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'management' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 text-sm">{stat.title}</span>
                    <div className="text-gray-400">{stat.icon}</div>
                  </div>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                    {index < 3 && <span className="text-xl text-gray-500 ml-1">₼</span>}
                  </div>
                  <div className="text-sm text-gray-500">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Distribution */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Kateqoriya üzrə bölgü
                </h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {categories.map((cat, index) => {
                        const startAngle = categories
                          .slice(0, index)
                          .reduce((sum, c) => sum + (c.percentage * 3.6), 0);
                        const endAngle = startAngle + (cat.percentage * 3.6);
                        const largeArc = cat.percentage > 50 ? 1 : 0;
                        
                        const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
                        const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
                        const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
                        const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
                        
                        return (
                          <path
                            key={index}
                            d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                            fill={cat.color}
                            opacity="0.9"
                          />
                        );
                      })}
                    </svg>
                  </div>
                  <div className="ml-8 space-y-3">
                    {categories.map((cat, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-sm"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-sm text-gray-700">
                          {cat.name} ({cat.count})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Branch Values Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Şöbələr üzrə dəyər
                </h2>
                <div className="h-80 flex items-end justify-between gap-4 border-l border-b border-gray-200 pl-4 pb-4 relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-xs text-gray-500">
                    <span>600000</span>
                    <span>450000</span>
                    <span>300000</span>
                    <span>150000</span>
                    <span>0</span>
                  </div>
                  
                  {/* Bars */}
                  {branchData.map((branch, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center" style={{ height: '280px' }}>
                        <div
                          className="w-16 bg-indigo-500 rounded-t transition-all duration-700 hover:bg-indigo-600"
                          style={{ 
                            height: `${(branch.value / maxValue) * 100}%`,
                            minHeight: '4px'
                          }}
                          title={`${branch.value.toLocaleString()} ₼`}
                        />
                      </div>
                      <span className="text-xs text-gray-600 text-center transform -rotate-45 origin-top-left mt-8 whitespace-nowrap">
                        {branch.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'assets' && (
          <div className="bg-white rounded-lg shadow-sm">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Axtar (ad, inv. nömrə, kateqoriya)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      İnv. №
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Ad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Kateqoriya
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Hesab
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Yer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      İlkin dəyər
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Cari dəyər
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAssets.map((asset, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {asset.invNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {asset.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {asset.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {asset.account}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {asset.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {asset.initialValue} ₼
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {asset.currentValue} ₼
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-black text-white">
                          {asset.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="hover:text-gray-700">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ümumi hesabat */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Ümumi hesabat
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Bütün aktivlər üzrə tam hesabat
              </p>
              <button 
                onClick={generateExcelReport}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Excel yüklə
              </button>
            </div>

            {/* Amortizasiya hesabatı */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Amortizasiya hesabatı
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Aylıq və illik amortizasiya cədvəli
              </p>
              <button 
                onClick={generateDepreciationPDF}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                PDF yüklə
              </button>
            </div>

            {/* Kateqoriya üzrə */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Kateqoriya üzrə
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Kateqoriyalar üzrə qruplaşdırılmış məlumat
              </p>
              <button 
                onClick={() => setShowCategoryReport(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Bax
              </button>
            </div>

            {/* Şöbələr üzrə */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Şöbələr üzrə
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Şöbələr və filiallar üzrə bölgü
              </p>
              <button 
                onClick={() => setShowBranchReport(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Bax
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Asset Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Yeni aktiv əlavə et</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Aktivin adı */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aktivin adı <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* İnventarlaşdırma nömrəsi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İnventarlaşdırma nömrəsi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.invNo}
                    onChange={(e) => setFormData({...formData, invNo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Kateqoriya */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kateqoriya <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Kateqoriya seçin</option>
                    <option value="Kompüter avadanlığı">Kompüter avadanlığı</option>
                    <option value="Nəqliyyat vasitələri">Nəqliyyat vasitələri</option>
                    <option value="Ofis avadanlığı">Ofis avadanlığı</option>
                    <option value="Əmlak">Əmlak</option>
                  </select>
                </div>

                {/* Hesab kodu */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hesab kodu <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.account}
                    onChange={(e) => setFormData({...formData, account: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="111">111 - Maşın və avadanlıqlar</option>
                    <option value="112">112 - Nəqliyyat vasitələri</option>
                    <option value="113">113 - Binalar</option>
                  </select>
                </div>

                {/* Alınma tarixi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alınma tarixi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({...formData, purchaseDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* İlkin dəyər */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İlkin dəyər (₼) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.initialValue}
                    onChange={(e) => setFormData({...formData, initialValue: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Qalıq dəyər */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qalıq dəyər (₼) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.residualValue}
                    onChange={(e) => setFormData({...formData, residualValue: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Amortizasiya metodu */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amortizasiya metodu <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.depreciationMethod}
                    onChange={(e) => setFormData({...formData, depreciationMethod: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="Düzxətli">Düzxətli</option>
                    <option value="Azalan qalıq">Azalan qalıq</option>
                    <option value="İstehsal həcmi">İstehsal həcmi</option>
                  </select>
                </div>

                {/* Faydalı istifadə müddəti */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Faydalı istifadə müddəti (ay) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.warranty}
                    onChange={(e) => setFormData({...formData, warranty: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Yerləşmə */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yerləşmə <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Yer seçin</option>
                    <option value="Bakı Ofisi">Bakı Ofisi</option>
                    <option value="Sumqayıt filialı">Sumqayıt filialı</option>
                    <option value="Gəncə filialı">Gəncə filialı</option>
                  </select>
                </div>

                {/* Şöbə */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şöbə <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({...formData, branch: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Şöbə seçin</option>
                    <option value="IT Şöbəsi">IT Şöbəsi</option>
                    <option value="Mühasibatlıq">Mühasibatlıq</option>
                    <option value="Satış şöbəsi">Satış şöbəsi</option>
                    <option value="İnsan resursları">İnsan resursları</option>
                  </select>
                </div>

                {/* Təchizatçı */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Təchizatçı <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.responsible}
                    onChange={(e) => setFormData({...formData, responsible: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Seriya nömrəsi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seriya nömrəsi
                  </label>
                  <input
                    type="text"
                    value={formData.serialNo}
                    onChange={(e) => setFormData({...formData, serialNo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Təhkim olunub */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Təhkim olunub
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Zəmanət müddəti */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zəmanət müddəti (ay)
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Qeyd - Full width */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qeyd
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Ləğv et
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    // Here you would handle form submission
                  }}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Yadda saxla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Report Modal */}
      {showCategoryReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Kateqoriya üzrə hesabat</h2>
              <button 
                onClick={() => setShowCategoryReport(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Kateqoriya</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Aktiv sayı</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">İlkin dəyər</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cari dəyər</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amortizasiya</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Faiz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {categoryReportData.map((cat, index) => {
                      const percentage = ((cat.depreciation / cat.totalValue) * 100).toFixed(2);
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{cat.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{cat.count}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{cat.totalValue.toLocaleString()} ₼</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{cat.currentValue.toLocaleString()} ₼</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{cat.depreciation.toLocaleString()} ₼</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{percentage}%</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-gray-50 font-semibold">
                      <td className="px-6 py-4 text-sm text-gray-900">CƏMİ</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {categoryReportData.reduce((sum, cat) => sum + cat.count, 0)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {categoryReportData.reduce((sum, cat) => sum + cat.totalValue, 0).toLocaleString()} ₼
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {categoryReportData.reduce((sum, cat) => sum + cat.currentValue, 0).toLocaleString()} ₼
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {categoryReportData.reduce((sum, cat) => sum + cat.depreciation, 0).toLocaleString()} ₼
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {((categoryReportData.reduce((sum, cat) => sum + cat.depreciation, 0) / 
                           categoryReportData.reduce((sum, cat) => sum + cat.totalValue, 0)) * 100).toFixed(2)}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Branch Report Modal */}
      {showBranchReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Şöbələr və filiallar üzrə hesabat</h2>
              <button 
                onClick={() => setShowBranchReport(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Yer</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Aktiv sayı</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">İlkin dəyər</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cari dəyər</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pay</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {branchReportData.map((branch, index) => {
                      const totalValue = branchReportData.reduce((sum, b) => sum + b.totalValue, 0);
                      const share = ((branch.totalValue / totalValue) * 100).toFixed(2);
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{branch.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{branch.count}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{branch.totalValue.toLocaleString()} ₼</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{branch.currentValue.toLocaleString()} ₼</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{share}%</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-gray-50 font-semibold">
                      <td className="px-6 py-4 text-sm text-gray-900">CƏMİ</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {branchReportData.reduce((sum, b) => sum + b.count, 0)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {branchReportData.reduce((sum, b) => sum + b.totalValue, 0).toLocaleString()} ₼
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {branchReportData.reduce((sum, b) => sum + b.currentValue, 0).toLocaleString()} ₼
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}