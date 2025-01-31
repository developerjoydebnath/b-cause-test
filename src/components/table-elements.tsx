/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";

export const Table = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const TRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const colCount = React.Children.count(children);
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
      className={cn("grid", className)}
    >
      {children}
    </div>
  );
};

export const THead = ({
  col,
}: {
  col: {
    id?: string | number;
    type?: "label" | "default";
    head: React.ReactNode | (() => React.ReactNode);
    cell: (row: any) => React.ReactNode;
    classNames?: Record<string, string> & {
      th?: string;
      td?: string;
    };
  };
}) => {
  return (
    <div
      className={cn(
        "line-clamp-1 flex items-center justify-center border-y border-l border-black px-1.5 py-2 text-center text-sm font-semibold last:border-r",
        col.type === "label" &&
          "justify-end border-y-0 border-l-0 pr-4 last:border-r",
        col?.classNames?.th,
      )}
    >
      {typeof col.head === "function" ? col.head() : col.head}
    </div>
  );
};

export const TData = ({
  col,
  row,
}: {
  col: {
    id?: string | number;
    type?: "label" | "default";
    head: React.ReactNode | (() => React.ReactNode);
    cell: (row: any) => React.ReactNode;
    classNames?: Record<string, string> & {
      th?: string;
      td?: string;
    };
  };
  row: any;
}) => {
  return (
    <div
      className={cn(
        "border-b border-l border-black px-1.5 py-1 text-end text-sm last:border-r",
        col.type === "label" && "border-y-0 border-l-0 last:border-r",
        ["By Weekday", "By Month", "Day", "月別", "日", "曜日別"].indexOf(
          col.head as string,
        ) !== -1 && "line-clamp-1 break-all pr-4 text-end font-medium",
        col?.classNames?.td,
      )}
    >
      {col.cell(row)}
    </div>
  );
};
