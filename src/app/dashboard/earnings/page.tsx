import { won, CARD, PageHead, Stat } from "@/components/ui";
import { ProgressBar } from "@/components/Gauge";

const rows = [
  { date: "2026.06.15", sales: 1240000, rate: 3.2, dist: 84000, point: 21000 },
  { date: "2026.06.14", sales: 980000, rate: 3.0, dist: 58800, point: 14700 },
  { date: "2026.06.13", sales: 1520000, rate: 3.5, dist: 106400, point: 26600 },
  { date: "2026.06.12", sales: 760000, rate: 2.5, dist: 38000, point: 9500 },
  { date: "2026.06.11", sales: 1100000, rate: 3.0, dist: 66000, point: 16500 },
  { date: "2026.06.10", sales: 0, rate: 0, dist: 0, point: 0 },
  { date: "2026.06.09", sales: 1340000, rate: 3.3, dist: 88440, point: 22110 },
];

export default function Earnings() {
  const totalDist = rows.reduce((s, r) => s + r.dist, 0);
  const totalSales = rows.reduce((s, r) => s + r.sales, 0);
  const maxDist = Math.max(...rows.map((r) => r.dist), 1);

  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="수익 · 분배 💸" desc="매일 회사 이익에서 돌려받은 분배 내역이에요." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="이번 주 분배금" value={won(totalDist)} accent sub="취소 제외" />
        <Stat label="이번 주 매출" value={won(totalSales)} />
        <Stat label="평균 분배율" value="3.1%" sub="회사 재량·변동" />
        <Stat label="누적 분배금" value={won(1842000)} sub="이번 달" />
      </div>

      {/* 분배 추이 */}
      <div className={CARD + " mt-4"}>
        <h2 className="font-bold">일별 분배금 추이</h2>
        <div className="mt-5 space-y-3">
          {rows.map((r) => (
            <div key={r.date} className="flex items-center gap-3">
              <span className="w-20 shrink-0 text-xs text-sub">{r.date.slice(5)}</span>
              <div className="flex-1">
                <ProgressBar value={(r.dist / maxDist) * 100} height={14} />
              </div>
              <span className="w-24 shrink-0 text-right text-sm font-semibold tabular-nums text-brand">
                {won(r.dist)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-3 mt-8 font-bold">상세 내역</h2>
      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">날짜</th>
              <th className="px-5 py-3 text-right font-semibold">매출</th>
              <th className="px-5 py-3 text-right font-semibold">분배율</th>
              <th className="px-5 py-3 text-right font-semibold">분배금</th>
              <th className="px-5 py-3 text-right font-semibold">포인트</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.date} className="border-b border-line/50 last:border-0">
                <td className="px-5 py-3">{r.date}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(r.sales)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{r.rate ? `${r.rate}%` : "—"}</td>
                <td className="px-5 py-3 text-right font-semibold tabular-nums text-brand">{won(r.dist)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(r.point)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-sub">
        ※ 분배금은 실제 회사 이익 발생 시 회사 재량으로 지급되며 확정 수익률·원금 보장이 아닙니다.
      </p>
    </div>
  );
}
