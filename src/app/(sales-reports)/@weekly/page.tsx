import DataTable from "@/components/data-table";
import { fetchDictionary } from "@/hooks/fetch-dictionary";
import { fetchSalesData } from "@/hooks/fetch-sales-data";
import { t } from "@/hooks/t";

export default async function WeeklySalesReport({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;

  const [dictionary, salesData] = await Promise.all([
    fetchDictionary(sp.lang as string),
    fetchSalesData("weekly"),
  ]);

  return (
    <div>
      <DataTable
        data={[...(salesData?.data || {})]}
        columns={[
          {
            type: "label",
            head: t("By Weekday", dictionary),
            cell: (row) => t(row.day, dictionary),
          },
          {
            head: t("Estimated number", dictionary),
            cell: (row) => row.estimatedNumber,
            classNames: { td: "bg-yellow-500" },
          },
          {
            head: t("Estimated amount", dictionary),
            cell: (row) => row.estimatedAmount,
            classNames: { td: "bg-yellow-500" },
          },

          {
            head: t("Number of orders", dictionary),
            cell: (row) => row.numberOfOrders,
            classNames: { td: "bg-yellow-500" },
          },

          {
            head: t("Ordered amount", dictionary),
            cell: (row) => row.orderedAmount,
            classNames: { td: "bg-yellow-500" },
          },

          {
            head: t("%(Number)", dictionary),
            cell: (row) => row.percentNumber + "%",
            classNames: { td: "bg-yellow-500" },
          },

          {
            head: t("%(Amount)", dictionary),
            cell: (row) => row.percentAmount + "%",
            classNames: { td: "bg-yellow-500" },
          },
          {
            head: t("Siteestimation Number", dictionary),
            cell: (row) => row.siteEstimationNumber,
            classNames: { td: "bg-yellow-500" },
          },

          {
            head: t("SiteEstimationPe", dictionary),
            cell: (row) => row.siteEstimationPeriod,
            classNames: { td: "bg-yellow-500" },
          },
        ]}
      />
    </div>
  );
}
