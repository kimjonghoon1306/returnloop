import { won, CARD, PageHead, Badge } from "@/components/ui";
import { ProgressBar } from "@/components/Gauge";
import PointCharger from "@/components/PointCharger";

const balance = 312000;
const monthGoal = 500000; // 이번 달 포인트 목표(재미 요소)

const ledger = [
  { date: "06.15", type: "적립", memo: "분배금 포인트 전환", amount: 21000 },
  { date: "06.15", type: "사용", memo: "공동구매 매입 (사과 2박스)", amount: -48000 },
  { date: "06.14", type: "적립", memo: "분배금 포인트 전환", amount: 14700 },
  { date: "06.13", type: "충전", memo: "포인트 충전 +보너스", amount: 105000 },
  { date: "06.12", type: "사용", memo: "공동구매 매입 (식자재)", amount: -32000 },
  { date: "06.11", type: "적립", memo: "분배금 포인트 전환", amount: 16500 },
];

export default function Wallet() {
  const pct = (balance / monthGoal) * 100;
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="포인트 지갑 🎁" desc="분배금을 포인트로 전환해 더 싸게 매입하세요." />

      <div className="grid gap-4 lg:grid-cols-3">
        {/* 잔액 카드 */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/15 to-brand-2/5 p-7">
            <div className="flex items-center gap-2 text-sm text-sub">💎 보유 쇼핑포인트</div>
            <div className="mt-2 text-5xl font-extrabold grad tabular-nums">{won(balance)}</div>
            <div className="mt-6">
              <div className="mb-1.5 flex justify-between text-xs text-sub">
                <span>이번 달 적립 목표</span>
                <span>{won(monthGoal)}</span>
              </div>
              <ProgressBar value={pct} height={12} />
              <p className="mt-2 text-xs text-sub">
                목표까지 <b className="text-brand">{won(Math.max(0, monthGoal - balance))}</b> 남았어요. 조금만 더! 🔥
              </p>
            </div>
          </div>

          {/* 통계 */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className={CARD + " text-center"}>
              <div className="text-xs text-sub">이번 달 적립</div>
              <div className="mt-1 text-xl font-bold tabular-nums">{won(157200)}</div>
            </div>
            <div className={CARD + " text-center"}>
              <div className="text-xs text-sub">이번 달 사용</div>
              <div className="mt-1 text-xl font-bold tabular-nums">{won(80000)}</div>
            </div>
            <div className={CARD + " text-center"}>
              <div className="text-xs text-sub">누적 절약액</div>
              <div className="mt-1 text-xl font-bold tabular-nums text-brand">{won(2310000)}</div>
            </div>
          </div>
        </div>

        {/* 충전 */}
        <PointCharger balance={balance} />
      </div>

      {/* 내역 */}
      <h2 className="mb-3 mt-8 font-bold">포인트 내역</h2>
      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">날짜</th>
              <th className="px-5 py-3 font-semibold">구분</th>
              <th className="px-5 py-3 font-semibold">내용</th>
              <th className="px-5 py-3 text-right font-semibold">증감</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((l, i) => (
              <tr key={i} className="border-b border-line/50 last:border-0">
                <td className="px-5 py-3 text-sub">{l.date}</td>
                <td className="px-5 py-3">
                  <Badge tone={l.type === "사용" ? "sub" : l.type === "충전" ? "brand" : "ok"}>{l.type}</Badge>
                </td>
                <td className="px-5 py-3 text-sub">{l.memo}</td>
                <td
                  className={
                    "px-5 py-3 text-right font-semibold tabular-nums " +
                    (l.amount < 0 ? "text-sub" : "text-brand")
                  }
                >
                  {l.amount < 0 ? "" : "+"}
                  {won(l.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
