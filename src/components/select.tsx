"use client";

import React from "react";

export default function Select({ options }: { options: (string | number)[] }) {
  const [val, setVal] = React.useState("");

  return (
    <select
      className="h-10 rounded border px-3 py-1.5 outline-none"
      value={val}
      onChange={(e) => setVal(e.target.value)}
    >
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
