// 콘솔 페이지 공용 UI 조각 (목업·실데이터 공용)
import Link from "next/link";

export const won = (n: number) => "₩" + n.toLocaleString("ko-KR");

export const CARD =
  "rounded-2xl border border-line bg-surface/60 p-5";

export function PageHead({
  title,
  desc,
  back,
}: {
  title: string;
  desc?: string;
  back?: { href: string; label: string };
}) {
  return (
    <div className="mb-6">
      {back && (
        <Link href={back.href} className="text-sm text-sub transition hover:text-brand">
          ← {back.label}
        </Link>
      )}
      <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      {desc && <p className="mt-1 text-sm text-sub">{desc}</p>}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-5 " +
        (accent ? "border-brand/40 bg-gradient-to-br from-brand/10 to-brand-2/5" : "border-line bg-surface/60")
      }
    >
      <div className="text-xs text-sub">{label}</div>
      <div className={"mt-1.5 text-2xl font-extrabold " + (accent ? "grad" : "")}>{value}</div>
      {sub && <div className="mt-1 text-[11px] text-sub">{sub}</div>}
    </div>
  );
}

export function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "sub" | "warn" | "ok" }) {
  const map: Record<string, string> = {
    brand: "bg-brand/15 text-brand",
    sub: "bg-black/5 text-sub dark:bg-white/10",
    warn: "bg-amber-400/15 text-amber-500",
    ok: "bg-emerald-500/15 text-emerald-500",
  };
  return <span className={"rounded-full px-2.5 py-0.5 text-xs font-semibold " + map[tone]}>{children}</span>;
}

export function Soon({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-500">
      {children}
    </span>
  );
}
