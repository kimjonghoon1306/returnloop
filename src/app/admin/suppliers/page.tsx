import { won, CARD, PageHead, Stat, Badge } from "@/components/ui";

const suppliers = [
  { emoji: "🍎", name: "○○과수원", items: 4, monthly: 12400000, status: "정상" },
  { emoji: "🥩", name: "△△축산", items: 6, monthly: 21800000, status: "정상" },
  { emoji: "🥬", name: "□□유기농장", items: 8, monthly: 9600000, status: "정상" },
  { emoji: "🍞", name: "베이커리온", items: 3, monthly: 5200000, status: "신규" },
  { emoji: "🐟", name: "제주수산", items: 5, monthly: 14300000, status: "정상" },
];

export default function Suppliers() {
  const totalMonthly = suppliers.reduce((s, x) => s + x.monthly, 0);
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="제조사 관리 🏭" desc="공급 제조사와 납품 현황을 관리합니다." />

      <div className="grid grid-cols-3 gap-3">
        <Stat label="제휴 제조사" value={`${suppliers.length}곳`} accent />
        <Stat label="월 납품 규모" value={won(totalMonthly)} />
        <Stat label="공급 상품" value={`${suppliers.reduce((s, x) => s + x.items, 0)}종`} />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((s) => (
          <div key={s.name} className={CARD + " lift"}>
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">{s.emoji}</span>
              <Badge tone={s.status === "신규" ? "brand" : "ok"}>{s.status}</Badge>
            </div>
            <h3 className="mt-3 font-bold">{s.name}</h3>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between text-sub">
                <span>공급 상품</span>
                <span className="tabular-nums">{s.items}종</span>
              </div>
              <div className="flex justify-between text-sub">
                <span>월 납품액</span>
                <span className="tabular-nums font-semibold text-brand">{won(s.monthly)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
