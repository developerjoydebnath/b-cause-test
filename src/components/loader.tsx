import { cn } from "@/lib/utils";

export function Loader2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[400px] w-full flex-col items-center justify-center gap-2",
        className,
      )}
    >
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
      <h4 className="text-base-400 text-xl font-semibold">Loading...</h4>
    </div>
  );
}

export function Loader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[400px] w-full flex-col items-center justify-center gap-2",
        className,
      )}
    >
      <div className="loader">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
      </div>
    </div>
  );
}
