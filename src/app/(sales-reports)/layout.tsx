import React, { Suspense } from "react";

export default function layout({
  children,
  monthDays,
  weekly,
  monthly,
}: {
  children: React.ReactNode;
  monthDays: React.ReactNode;
  weekly: React.ReactNode;
  monthly: React.ReactNode;
}) {
  return (
    <div className="container mx-auto space-y-20 py-20">
      {children}
      <Suspense>{monthDays}</Suspense>
      <Suspense>{monthly}</Suspense>
      <Suspense>{weekly}</Suspense>
    </div>
  );
}
