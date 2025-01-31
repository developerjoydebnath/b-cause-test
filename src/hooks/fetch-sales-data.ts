import { config } from "@/lib/config";

export const fetchSalesData = async (
  type: "monthDays" | "weekly" | "monthly",
) => {
  const response = await fetch(
    config.app.url + `/api/v1/sales-data?type=${type}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch sales data");
  }

  return await response.json();
};
