import { won, CARD, PageHead, Badge } from "@/components/ui";

const products = [
  { emoji: "🍎", name: "프리미엄 사과 2kg", market: 18000, ours: 11900, stock: "충분" },
  { emoji: "🥩", name: "한우 등심 500g", market: 49000, ours: 36000, stock: "충분" },
  { emoji: "🥬", name: "유기농 채소 박스", market: 32000, ours: 21000, stock: "마감임박" },
  { emoji: "🍞", name: "수제 식빵 5개입", market: 15000, ours: 9800, stock: "충분" },
  { emoji: "🐟", name: "제주 갈치 1kg", market: 42000, ours: 29000, stock: "충분" },
  { emoji: "🧀", name: "수입 치즈 모음", market: 28000, ours: 18500, stock: "마감임박" },
];

export default function Purchase() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="공동구매 매입 🛒" desc="여럿이 모여 대량으로 — 쿠팡보다 싸게 떼옵니다." />

      <div className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/5 px-5 py-4">
        <span className="text-2xl">💎</span>
        <p className="flex-1 text-sm text-sub">
          보유 포인트 <b className="grad">{won(312000)}</b> 로 매입하면 추가 할인! 포인트는 분배금에서 충전돼요.
        </p>
        <span className="rounded-lg bg-brand/15 px-3 py-1.5 text-xs font-bold text-brand">포인트 사용 가능</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const off = Math.round((1 - p.ours / p.market) * 100);
          return (
            <div key={p.name} className={CARD + " lift"}>
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-surface-2 text-3xl">{p.emoji}</span>
                <Badge tone={p.stock === "마감임박" ? "warn" : "ok"}>{p.stock}</Badge>
              </div>
              <h3 className="mt-4 font-bold">{p.name}</h3>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-xl font-extrabold grad tabular-nums">{won(p.ours)}</span>
                <span className="mb-0.5 text-sm text-sub line-through tabular-nums">{won(p.market)}</span>
                <span className="mb-0.5 text-xs font-bold text-rose-400">-{off}%</span>
              </div>
              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-2.5 text-sm font-bold text-[#04140f]">
                매입하기
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
