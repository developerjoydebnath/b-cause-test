/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table, TData, THead, TRow } from "./table-elements";

export default function DataTable({
  columns,
  data,
}: {
  columns: {
    id?: string | number;
    type?: "label" | "default";
    head: React.ReactNode | (() => React.ReactNode);
    cell: (row: any) => React.ReactNode;
    classNames?: Record<string, string> & {
      th?: string;
      td?: string;
    };
  }[];
  data: any[];
}) {
  return (
    <Table>
      <TRow>
        {columns.map((col, idx) => (
          <THead col={col} key={col?.id || idx} />
        ))}
      </TRow>

      {data.map((row, idx) => (
        <TRow key={idx}>
          {columns.map((col, idx) => (
            <TData row={row} col={col} key={col?.id || idx} />
          ))}
        </TRow>
      ))}
    </Table>
  );
}
