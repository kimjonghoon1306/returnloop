const won = (n: number) => "₩" + n.toLocaleString("ko-KR");

// 데모 데이터
const company = { revenue: 8400000, reserve: 5040000, rate: 3.2, pool: 268800 };
const members = [
  { name: "베리팜 김창업", sales: 1240000, dist: 84000, point: 21000 },
  { name: "오늘반찬 이사장", sales: 980000, dist: 58800, point: 14700 },
  { name: "수산직송 박대표", sales: 1520000, dist: 106400, point: 26600 },
  { name: "정육왕 최사장", sales: 760000, dist: 38000, point: 9500 },
  { name: "베이커리온 정점주", sales: 1100000, dist: 66000, point: 16500 },
];

const card = "rounded-2xl border border-line bg-surface/60 p-5";

export default function Admin() {
  const totalSales = members.reduce((s, m) => s + m.sales, 0);
  const totalDist = members.reduce((s, m) => s + m.dist, 0);
  return (
    <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold sm:text-3xl">정산 · 분배 관리</h1>
        <p className="mt-1 text-sm text-sub">2026년 6월 15일 · 오늘의 회사 이익을 집계하고 분배합니다.</p>

        {/* 회사 수익 요약 */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className={card}>
            <div className="text-xs text-sub">오늘 회사 수익</div>
            <div className="mt-1.5 text-2xl font-extrabold">{won(company.revenue)}</div>
          </div>
          <div className={card}>
            <div className="text-xs text-sub">잉여 적립 (운영보유)</div>
            <div className="mt-1.5 text-2xl font-extrabold text-sub">{won(company.reserve)}</div>
          </div>
          <div className="rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/10 to-brand-2/5 p-5">
            <div className="text-xs text-sub">분배 재원 (Pool)</div>
            <div className="mt-1.5 text-2xl font-extrabold grad">{won(company.pool)}</div>
          </div>
          <div className={card}>
            <div className="text-xs text-sub">적용 분배율</div>
            <div className="mt-1.5 text-2xl font-extrabold">{company.rate}%</div>
          </div>
        </div>

        {/* 분배율 조정 */}
        <div className={card + " mt-4"}>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1">
              <h2 className="font-bold">오늘 분배율 설정</h2>
              <p className="mt-1 text-sm text-sub">
                회사 이익에 따라 <b className="text-brand">1~5%</b> 사이에서 재량으로 정합니다. 잉여는 운영자금으로 보유됩니다.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <span
                  key={r}
                  className={
                    "grid h-11 w-11 place-items-center rounded-xl border text-sm font-bold " +
                    (r === Math.round(company.rate)
                      ? "border-brand bg-brand/15 text-brand"
                      : "border-line bg-surface-2 text-sub")
                  }
                >
                  {r}%
                </span>
              ))}
              <button className="ml-2 rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-2.5 text-sm font-bold text-[#04140f]">
                분배 확정
              </button>
            </div>
          </div>
        </div>

        {/* 창업자별 분배 */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="font-bold">창업자별 분배 ({members.length})</h2>
          <span className="text-xs text-sub">총 분배 {won(totalDist)}</span>
        </div>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-surface/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs text-sub">
                <th className="px-5 py-3 font-semibold">창업자</th>
                <th className="px-5 py-3 text-right font-semibold">오늘 매출</th>
                <th className="px-5 py-3 text-right font-semibold">기여 비중</th>
                <th className="px-5 py-3 text-right font-semibold">분배금</th>
                <th className="px-5 py-3 text-right font-semibold">포인트 전환</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.name} className="border-b border-line/50 last:border-0">
                  <td className="px-5 py-3 font-medium">{m.name}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-sub">{won(m.sales)}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-sub">
                    {Math.round((m.sales / totalSales) * 100)}%
                  </td>
                  <td className="px-5 py-3 text-right font-semibold tabular-nums text-brand">{won(m.dist)}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-sub">{won(m.point)}</td>
                </tr>
              ))}
              <tr className="bg-surface-2/50 font-bold">
                <td className="px-5 py-3">합계</td>
                <td className="px-5 py-3 text-right tabular-nums">{won(totalSales)}</td>
                <td className="px-5 py-3 text-right text-sub">100%</td>
                <td className="px-5 py-3 text-right tabular-nums text-brand">{won(totalDist)}</td>
                <td className="px-5 py-3 text-right tabular-nums">{won(members.reduce((s, m) => s + m.point, 0))}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs text-sub">
          ⚠️ 분배금은 실제 발생한 회사 이익에서 회사 재량으로 지급되며, 확정 수익률·원금 보장이 아닙니다.
          수익이 없는 날은 분배되지 않을 수 있습니다.
        </p>
    </div>
  );
}
