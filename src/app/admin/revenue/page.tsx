import { won, CARD, PageHead, Stat } from "@/components/ui";

const INPUT = "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand";

const sources = [
  { name: "공급망 마진 (제조사 납품)", amount: 4200000 },
  { name: "플랫폼 운영 수수료", amount: 1800000 },
  { name: "쇼핑몰 매출 (포인트 환류)", amount: 1600000 },
  { name: "프랜차이즈 가맹·컨설팅", amount: 800000 },
];

const recent = [
  { date: "06.15", revenue: 8400000, pool: 268800, rate: "3.2%" },
  { date: "06.14", revenue: 6900000, pool: 207000, rate: "3.0%" },
  { date: "06.13", revenue: 9800000, pool: 343000, rate: "3.5%" },
  { date: "06.12", revenue: 5200000, pool: 130000, rate: "2.5%" },
];

export default function Revenue() {
  const total = sources.reduce((s, r) => s + r.amount, 0);
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="회사 수익 💰" desc="오늘의 회사 이익을 출처별로 집계합니다." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <Stat label="오늘 총 수익" value={won(total)} accent />
        <Stat label="이번 달 누적" value={won(214000000)} />
        <Stat label="전일 대비" value="+21.7%" sub="↑ 상승" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* 출처별 + 입력 */}
        <div className={CARD}>
          <h2 className="font-bold">수익 출처별 입력</h2>
          <div className="mt-4 space-y-3">
            {sources.map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <span className="flex-1 text-sm text-sub">{s.name}</span>
                <input className={INPUT + " w-36 text-right tabular-nums"} defaultValue={s.amount} />
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-line pt-3">
              <span className="font-bold">합계</span>
              <span className="text-xl font-extrabold grad tabular-nums">{won(total)}</span>
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3 text-sm font-bold text-[#04140f]">
              오늘 수익 확정
            </button>
          </div>
        </div>

        {/* 최근 */}
        <div className={CARD}>
          <h2 className="font-bold">최근 수익 집계</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs text-sub">
                  <th className="py-2 font-semibold">날짜</th>
                  <th className="py-2 text-right font-semibold">회사 수익</th>
                  <th className="py-2 text-right font-semibold">분배율</th>
                  <th className="py-2 text-right font-semibold">분배 Pool</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.date} className="border-b border-line/50 last:border-0">
                    <td className="py-2.5">{r.date}</td>
                    <td className="py-2.5 text-right tabular-nums">{won(r.revenue)}</td>
                    <td className="py-2.5 text-right tabular-nums text-sub">{r.rate}</td>
                    <td className="py-2.5 text-right tabular-nums font-semibold text-brand">{won(r.pool)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
