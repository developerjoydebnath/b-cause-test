import {
  addDays,
  format,
  getDaysInMonth,
  setMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const type = searchParams.get("type") as "monthDays" | "weekly" | "monthly";

  const defaultData = {
    estimatedNumber: 0,
    estimatedAmount: 0,
    numberOfOrders: 0,
    orderedAmount: 0,
    percentNumber: 0,
    percentAmount: 0,
    siteEstimationNumber: 0,
    siteEstimationPeriod: 0,
  };

  const generateSalesReport = (type: "monthDays" | "weekly" | "monthly") => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();

    if (type === "monthDays") {
      const monthDays = getDaysInMonth(new Date());

      const data = [];

      for (let i = 1; i <= monthDays; i++) {
        data.push({
          id: i,
          date: new Date(year, month, i).toISOString().split("T")[0],
          ...defaultData,
        });
      }

      return data;
    }

    if (type === "weekly") {
      const data = [];
      const firstDayOfMonth = startOfMonth(new Date(year, month));
      let firstMonday = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

      // Ensure firstMonday is actually within the current month
      if (firstMonday.getMonth() !== month) {
        firstMonday = addDays(firstMonday, 7);
      }

      let currentDate = firstMonday;

      for (let i = 0; i < 7; i++) {
        if (currentDate.getMonth() !== month) break; // Ensure we don't move into the next month

        data.push({
          id: i + 1,
          day:
            format(currentDate, "EEEE").charAt(0).toUpperCase() +
            format(currentDate, "EEEE").slice(1),
          ...defaultData,
        });

        currentDate = addDays(currentDate, 1);
      }

      return data;
    }

    if (type === "monthly") {
      const data = [];

      for (let i = 0; i < 12; i++) {
        const date = setMonth(new Date(), i);
        const firstDayOfMonth = startOfMonth(date);

        data.push({
          id: i + 1,
          date: format(firstDayOfMonth, "yyyy-MM-01"),
          month: format(firstDayOfMonth, "MMMM"),
          ...defaultData,
        });
      }

      return data;
    }
  };

  if (!type) {
    return Response.json(
      {
        data: null,
        message: "Invalid type!",
      },
      {
        status: 500,
      },
    );
  }

  return Response.json(
    {
      data: generateSalesReport(type),
      message: "Sales data fetched successfully!",
    },
    {
      status: 200,
    },
  );
}
