import { won, CARD, PageHead, Stat, Badge } from "@/components/ui";

const products = [
  { emoji: "🍎", name: "프리미엄 사과 2kg", supplier: "○○과수원", cost: 8000, ours: 11900, market: 18000, sold: 142 },
  { emoji: "🥩", name: "한우 등심 500g", supplier: "△△축산", cost: 28000, ours: 36000, market: 49000, sold: 88 },
  { emoji: "🥬", name: "유기농 채소 박스", supplier: "□□농장", cost: 14000, ours: 21000, market: 32000, sold: 210 },
  { emoji: "🍞", name: "수제 식빵 5개입", supplier: "베이커리온", cost: 6000, ours: 9800, market: 15000, sold: 175 },
];

export default function Products() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="상품 · 공동구매 📦" desc="공동구매 상품과 공급가를 관리합니다." />

      <div className="mb-4 flex items-center justify-between">
        <div className="grid flex-1 grid-cols-3 gap-3">
          <Stat label="등록 상품" value={`${products.length}종`} accent />
          <Stat label="이번 달 거래" value={won(38400000)} />
          <Stat label="평균 마진" value="34%" />
        </div>
      </div>

      <div className="mb-4 flex justify-end">
        <button className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-2.5 text-sm font-bold text-[#04140f]">
          + 상품 등록
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">상품</th>
              <th className="px-5 py-3 font-semibold">제조사</th>
              <th className="px-5 py-3 text-right font-semibold">원가</th>
              <th className="px-5 py-3 text-right font-semibold">공급가</th>
              <th className="px-5 py-3 text-right font-semibold">시장가</th>
              <th className="px-5 py-3 text-right font-semibold">판매</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name} className="border-b border-line/50 last:border-0 hover:bg-white/5">
                <td className="px-5 py-3 font-medium">
                  <span className="mr-2">{p.emoji}</span>
                  {p.name}
                </td>
                <td className="px-5 py-3 text-sub">{p.supplier}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(p.cost)}</td>
                <td className="px-5 py-3 text-right tabular-nums font-semibold text-brand">{won(p.ours)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub line-through">{won(p.market)}</td>
                <td className="px-5 py-3 text-right tabular-nums">{p.sold}건</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
