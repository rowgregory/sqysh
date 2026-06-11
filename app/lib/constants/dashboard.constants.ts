export const STATUS_STYLES: Record<string, string> = {
  SUBMITTED: "text-brand-green border-brand-green/40 bg-brand-green/10",
  SHIPPED: "text-[#37e1c2] border-[#37e1c2]/40 bg-[#37e1c2]/10",
  PENDING: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  FULFILLMENT_FAILED: "text-red-400 border-red-400/40 bg-red-400/10",
};

export const STATUS_LABEL: Record<string, string> = {
  SUBMITTED: "submitted",
  SHIPPED: "shipped",
  PENDING: "pending",
  FULFILLMENT_FAILED: "failed",
};
