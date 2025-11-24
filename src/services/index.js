import { api } from "../api";

// Auth Services
export const register = async (data) => {
  const res = await api.post("/api/users/register", data);
  if (res.status === 201) {
    return res.data;
  } else {
    throw new Error("Registration failed");
  }
};

export const login = async (data) => {
  const res = await api.post("/api/users/login", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Login failed");
  }
};

export const getProfile = async () => {
  const res = await api.get("/api/users/profile");
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Failed to fetch profile");
  }
};

export const verify = async (data) => {
  const res = await api.post("/api/users/verify-otp", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Verification failed");
  }
};

export const resendOtp = async (data) => {
  const res = await api.post("/api/users/resend-otp", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Resend OTP failed");
  }
};

export const forgotPassword = async (data) => {
  const res = await api.post("/api/users/forgot-password", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Forgot Password failed");
  }
};

export const resetPassword = async (data) => {
  const res = await api.post("/api/users/reset-password", data);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Reset Password failed");
  }
};



export const getOperations = async () => {
  const res = await api.get("/api/cash-bank");
  // console.log(res.data);
  
  return res.data;
};

export const createOperation = async (data) => {
  const res = await api.post("/api/cash-bank", data);
  // console.log(res.data);
  
  return res.data;
};

export const updateOperation = async (id, data) => {
  const res = await api.put(`/api/cash-bank/${id}`, data);
  return res.data;
};

export const deleteOperation = async (id) => {
  const res = await api.delete(`/api/cash-bank/${id}`);
  return res.data;
};

export const paymentsSchedule = async () => {
  const res = await api.get("/api/payments");      
  return res.data;
}
export const createPayment  = async (data) => {
  const res = await api.post("/api/payments", data);
  return res.data;
}
export const generalLedger =  async () => {
  const res =  await api.get("/api/general-ledger")
  // console.log(res.data);
  
  return res.data
}

export const financeDashChart = async () => {
  const res = await api.get("/api/dashboard/finance/last6months")
  // console.log(res.data);
  
  return res.data
}

// Accounting Dashboard Services
export const getDashboardStats = async () => {
  const res = await api.get("/api/dashboard/stats");
  return res.data;
};

export const getDashboardAssets = async () => {
  const res = await api.get("/api/dashboard/assets");
  return res.data;
};

export const getProfitDynamics = async () => {
  const res = await api.get("/api/dashboard/profit-dynamics");
  return res.data;
};

export const getBalancePercentage = async () => {
  const res = await api.get("/api/dashboard/balance-percentage");
  return res.data;
};

// Products Services
export const getProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};

export const createProduct = async (data) => {
  const res = await api.post("/api/products", data);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/api/products/${id}`);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await api.patch(`/api/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/api/products/${id}`);
  return res.data;
};

export const updateProductStatus = async (id, status) => {
  const res = await api.patch(`/api/products/${id}/status`, { status });
  return res.data;
};

// General Ledger Services
export const getGeneralLedger = async () => {
  const res = await api.get("/api/general-ledger");
  return res.data;
};

// Transaction Services
export const createTransaction = async (data) => {
  const res = await api.post("/api/transactions", data);
  return res.data;
};

export const getTransactions = async () => {
  const res = await api.get("/api/transactions");
  return res.data;
};

export const getTransactionById = async (id) => {
  const res = await api.get(`/api/transactions/${id}`);
  return res.data;
};

export const updateTransaction = async (id, data) => {
  const res = await api.put(`/api/transactions/${id}`, data);
  return res.data;
};

export const deleteTransaction = async (id) => {
  const res = await api.delete(`/api/transactions/${id}`);
  return res.data;
};

// Supplier Services
export const getSuppliers = async () => {
  const res = await api.get("/api/suppliers");
  return res.data;
};

export const createSupplier = async (data) => {
  const res = await api.post("/api/suppliers", data);
  return res.data;
};

export const getSupplierById = async (id) => {
  const res = await api.get(`/api/suppliers/${id}`);
  return res.data;
};

export const updateSupplier = async (id, data) => {
  const res = await api.patch(`/api/suppliers/${id}`, data);
  return res.data;
};

export const updateSupplierStatus = async (id, status) => {
  const res = await api.patch(`/api/suppliers/${id}/status`, { status });
  return res.data;
};

// Supplier Payment Services
export const getSupplierPayments = async () => {
  const res = await api.get("/api/supplier-payments");
  return res.data;
};

export const createSupplierPayment = async (data) => {
  const res = await api.post("/api/supplier-payments", data);
  return res.data;
};

export const getSupplierPaymentById = async (id) => {
  const res = await api.get(`/api/supplier-payments/${id}`);
  return res.data;
};

export const updateSupplierPayment = async (id, data) => {
  const res = await api.patch(`/api/supplier-payments/${id}`, data);
  return res.data;
};

export const updateSupplierPaymentStatus = async (id, status) => {
  const res = await api.patch(`/api/supplier-payments/${id}/status`, { status });
  return res.data;
};

// Agreements Services
export const getAgreements = async () => {
  const res = await api.get("/api/agreements");
  return res.data;
};

export const createAgreement = async (data) => {
  const res = await api.post("/api/agreements", data);
  return res.data;
};

export const getAgreementById = async (id) => {
  const res = await api.get(`/api/agreements/${id}`);
  return res.data;
};

export const updateAgreement = async (id, data) => {
  const res = await api.patch(`/api/agreements/${id}`, data);
  return res.data;
};

export const updateAgreementStatus = async (id, status) => {
  const res = await api.patch(`/api/agreements/${id}/status`, { status });
  return res.data;
};

// Inventory Services
export const getInventory = async () => {
  const res = await api.get("/api/inventory");
  return res.data;
};

export const createInventoryItem = async (data) => {
  const res = await api.post("/api/inventory", data);
  return res.data;
};

export const getInventoryItemById = async (id) => {
  const res = await api.get(`/api/inventory/${id}`);
  return res.data;
};

export const updateInventoryItem = async (id, data) => {
  const res = await api.patch(`/api/inventory/${id}`, data);
  return res.data;
};

export const updateInventoryItemStatus = async (id, status) => {
  const res = await api.patch(`/api/inventory/${id}/status`, { status });
  return res.data;
};

// Customer Services
export const getCustomers = async () => {
  const res = await api.get("/api/customers");
  return res.data;
};

export const createCustomer = async (data) => {
  const res = await api.post("/api/customers", data);
  return res.data;
};

export const getCustomerById = async (id) => {
  const res = await api.get(`/api/customers/${id}`);
  return res.data;
};

export const updateCustomer = async (id, data) => {
  const res = await api.patch(`/api/customers/${id}`, data);
  return res.data;
};

// Warehouse Operations Services
export const createGRN = async (data) => {
  const res = await api.post("/api/warehouse/grn", data);
  return res.data;
};

export const createDelivery = async (data) => {
  const res = await api.post("/api/warehouse/delivery", data);
  return res.data;
};

export const createTransfer = async (data) => {
  const res = await api.post("/api/warehouse/transfer", data);
  return res.data;
};

export const getWarehouseHistory = async () => {
  const res = await api.get("/api/warehouse/history");
  return res.data;
};

// Calendar Services
export const createCalendarDay = async (userId, data) => {
  const res = await api.post(`/api/users/${userId}/calendar`, data);
  return res.data;
};

export const getCalendar = async (userId) => {
  const res = await api.get(`/api/users/${userId}/calendar`);
  return res.data;
};

export const updateCalendarDay = async (userId, dayId, data) => {
  const res = await api.put(`/api/users/${userId}/calendar/${dayId}`, data);
  return res.data;
};

export const getCalendarDay = async (userId, dayId) => {
  const res = await api.get(`/api/users/${userId}/calendar/${dayId}`);
  return res.data;
};

export const deleteCalendarDay = async (userId, dayId) => {
  const res = await api.delete(`/api/users/${userId}/calendar/${dayId}`);
  return res.data;
};

export const createCalendarEvent = async (userId, dayId, data) => {
  const res = await api.post(`/api/users/${userId}/calendar/${dayId}/events`, data);
  return res.data;
};

export const getCalendarEvents = async (userId, dayId) => {
  const res = await api.get(`/api/users/${userId}/calendar/${dayId}/events`);
  return res.data;
};

export const getCalendarEvent = async (userId, dayId, eventId) => {
  const res = await api.get(`/api/users/${userId}/calendar/${dayId}/events/${eventId}`);
  return res.data;
};

export const updateCalendarEvent = async (userId, dayId, eventId, data) => {
  const res = await api.put(`/api/users/${userId}/calendar/${dayId}/events/${eventId}`, data);
  return res.data;
};

export const deleteCalendarEvent = async (userId, dayId, eventId) => {
  const res = await api.delete(`/api/users/${userId}/calendar/${dayId}/events/${eventId}`);
  return res.data;
};

// Budget Services
export const createBudget = async (data) => {
  const res = await api.post("/api/budgets", data);
  return res.data;
};

export const getBudgets = async () => {
  const res = await api.get("/api/budgets");
  return res.data;
};

export const exportBudgetsExcel = async () => {
  const res = await api.get("/api/budgets/export/excel", { responseType: 'blob' });
  return res.data;
};

export const getDepartmentBudget = async (department, year) => {
  const res = await api.get(`/api/budgets/${department}/${year}`);
  return res.data;
};

export const updateBudget = async (id, data) => {
  const res = await api.put(`/api/budgets/${id}`, data);
  return res.data;
};

export const deleteBudget = async (id) => {
  const res = await api.delete(`/api/budgets/${id}`);
  return res.data;
};

export const getBudgetReport = async () => {
  const res = await api.get("/api/budgets/report");
  return res.data;
};

// Asset Management Services
export const getAssets = async (userId, params = {}) => {
  const res = await api.get(`/api/assests/${userId}/assets`, { params });
  return res.data;
};

export const getAssetById = async (userId, assetId) => {
  const res = await api.get(`/api/assests/${userId}/assets/${assetId}`);
  return res.data;
};

export const createAsset = async (userId, data) => {
  const res = await api.post(`/api/assests/${userId}/assets`, data);
  return res.data;
};

export const updateAsset = async (userId, assetId, data) => {
  const res = await api.put(`/api/assests/${userId}/assets/${assetId}`, data);
  return res.data;
};

export const deleteAsset = async (userId, assetId) => {
  const res = await api.delete(`/api/assests/${userId}/assets/${assetId}`);
  return res.data;
};

export const uploadAssetDocument = async (userId, assetId, formData) => {
  // formData should be a FormData instance with the file under a field like 'file'
  const res = await api.post(`/api/assests/${userId}/assets/${assetId}/upload-document`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
};

export const downloadAssetDocument = async (userId, assetId) => {
  const res = await api.get(`/api/assests/${userId}/assets/${assetId}/download-document`, { responseType: 'blob' });
  return res.data; // caller can createObjectURL or save
};

export const deleteAssetDocuments = async (userId, assetId) => {
  const res = await api.delete(`/api/assests/${userId}/assets/${assetId}/documents`);
  return res.data;
};

// Asset Categories
export const getAssetCategories = async (userId) => {
  const res = await api.get(`/api/assests/${userId}/categories`);
  return res.data;
};

export const createAssetCategory = async (userId, data) => {
  const res = await api.post(`/api/assests/${userId}/categories`, data);
  return res.data;
};

export const updateAssetCategory = async (userId, categoryId, data) => {
  const res = await api.put(`/api/assests/${userId}/categories/${categoryId}`, data);
  return res.data;
};

export const deleteAssetCategory = async (userId, categoryId) => {
  const res = await api.delete(`/api/assests/${userId}/categories/${categoryId}`);
  return res.data;
};

// Asset Reports
export const getAssetReports = async (userId, params = {}) => {
  const res = await api.get(`/api/assests/${userId}/reports`, { params });
  return res.data;
};

export const downloadAssetReportsExcel = async (userId, params = {}) => {
  const res = await api.get(`/api/assests/${userId}/reports/excel/download`, { params, responseType: 'blob' });
  return res.data;
};

export const downloadAssetReportsPdf = async (userId, params = {}) => {
  const res = await api.get(`/api/assests/${userId}/reports/pdf/download`, { params, responseType: 'blob' });
  return res.data;
};

export const getAssetStatistics = async (userId) => {
  const res = await api.get(`/api/assests/${userId}/statistics`);
  return res.data;
};

