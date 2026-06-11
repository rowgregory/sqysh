export type Stats = {
  totalRevenue: number;
  netProfit: number;
  orderCount: number;
  failedCount: number;
};

export type OrderItemShape = {
  printfulVariantId: number;
  productName: string;
  colorway: string | null;
  size: string | null;
  image: string | null;
  quantity: number;
  unitAmount: number;
};

export type SerializedOrder = {
  id: string;
  stripeSessionId: string;
  items: OrderItemShape[];
  amountTotal: number;
  currency: string;
  status: string;
  printfulOrderId: number | null;
  failureReason: string | null;
  email: string;
  country: string | null;
  region: string | null;
  city: string | null;
  createdAt: string;
  trackingNumber: string | null;
  trackingUrl: string | null;
  printfulCost: number | null;
};
