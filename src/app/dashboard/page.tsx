import Link from "next/link";
import Gauge, { ProgressBar } from "@/components/Gauge";
import { won, CARD } from "@/components/ui";

// 데모 데이터 (나중에 Supabase 연동)
const today = { distribution: 84000, goal: 100000, point: 21000, sales: 1240000, rate: 3.2 };
const month = { dist: 1842000, point: 460500, sales: 28400000, pointBalance: 312000 };

// 등급(누적 분배 기준)
const LEVELS = [
  { name: "씨앗", min: 0 },
  { name: "새싹", min: 1000000 },
  { name: "나무", min: 3000000 },
  { name: "숲", min: 8000000 },
];

const history = [
  { date: "06.15", sales: 1240000, dist: 84000, point: 21000, rate: 3.2 },
  { date: "06.14", sales: 980000, dist: 58800, point: 14700, rate: 3.0 },
  { date: "06.13", sales: 1520000, dist: 106400, point: 26600, rate: 3.5 },
  { date: "06.12", sales: 760000, dist: 38000, point: 9500, rate: 2.5 },
  { date: "06.11", sales: 1100000, dist: 66000, point: 16500, rate: 3.0 },
  { date: "06.10", sales: 0, dist: 0, point: 0, rate: 0 },
];

export default function Dashboard() {
  const maxSales = Math.max(...history.map((h) => h.sales), 1);
  const goalPct = (today.distribution / today.goal) * 100;

  // 등급 계산
  const lv = LEVELS.reduce((acc, l, i) => (month.dist >= l.min ? i : acc), 0);
  const cur = LEVELS[lv];
  const next = LEVELS[lv + 1];
  const lvPct = next ? ((month.dist - cur.min) / (next.min - cur.min)) * 100 : 100;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">오늘의 루프 ♻️</h1>
          <p className="mt-1 text-sm text-sub">2026년 6월 15일 · 함께 만든 수익이 매일 돌아옵니다.</p>
        </div>
        <Link
          href="/admin"
          className="rounded-lg border border-line px-3 py-1.5 text-xs text-sub transition hover:border-brand/50"
        >
          본사 화면 →
        </Link>
      </div>

      {/* 히어로: 게이지 + 등급 */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* 오늘 분배 게이지 */}
        <div className={CARD + " flex flex-col items-center justify-center text-center"}>
          <Gauge value={goalPct} centerTop="오늘 분배 달성" label={won(today.distribution)} sub={`목표 ${won(today.goal)}`} />
          <p className="mt-3 text-xs text-sub">
            오늘 회사 이익의 <b className="text-brand">{today.rate}%</b>가 분배됐어요 💸
          </p>
        </div>

        {/* 등급 + 누적 */}
        <div className={CARD + " lg:col-span-2"}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-sub">내 창업 등급</div>
              <div className="mt-0.5 flex items-center gap-2 text-2xl font-extrabold">
                <span>🌱</span> <span className="grad">{cur.name}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-sub">누적 분배금</div>
              <div className="text-xl font-bold grad">{won(month.dist)}</div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-1.5 flex justify-between text-xs text-sub">
              <span>{cur.name}</span>
              <span>{next ? `다음: ${next.name} (${won(next.min)})` : "최고 등급 달성! 🏆"}</span>
            </div>
            <ProgressBar value={lvPct} height={12} />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-surface-2 p-3 text-center">
              <div className="text-[11px] text-sub">이번 달 매출</div>
              <div className="mt-0.5 font-bold tabular-nums">{won(month.sales)}</div>
            </div>
            <div className="rounded-xl bg-surface-2 p-3 text-center">
              <div className="text-[11px] text-sub">포인트 적립</div>
              <div className="mt-0.5 font-bold tabular-nums">{won(month.point)}</div>
            </div>
            <div className="rounded-xl bg-surface-2 p-3 text-center">
              <div className="text-[11px] text-sub">오늘 매출</div>
              <div className="mt-0.5 font-bold tabular-nums">{won(today.sales)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 포인트 지갑 카드 */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/12 to-brand-2/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-sub">🎁 쇼핑포인트 잔액</div>
            <div className="mt-1 text-3xl font-extrabold grad tabular-nums">{won(month.pointBalance)}</div>
            <p className="mt-1 text-xs text-sub">분배금을 포인트로 전환하면 공동구매가 더 싸져요</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/dashboard/wallet"
              className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-3 text-sm font-bold text-[#04140f]"
            >
              포인트 충전 +
            </Link>
            <Link
              href="/dashboard/purchase"
              className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold"
            >
              매입에 쓰기
            </Link>
          </div>
        </div>
      </div>

      {/* 매출 차트 */}
      <div className={CARD + " mt-4"}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold">최근 매출 &amp; 분배</h2>
          <span className="text-xs text-sub">최근 6일</span>
        </div>
        <div className="mt-6 flex items-end justify-between gap-3">
          {history.map((h) => (
            <div key={h.date} className="flex flex-1 flex-col items-center justify-end gap-2">
              <span className="text-[10px] tabular-nums text-sub">{h.sales ? `${Math.round(h.sales / 10000)}만` : "0"}</span>
              <div
                className="w-full max-w-10 rounded-t-lg bg-gradient-to-t from-[#2dd4a7] to-[#38bdf8]"
                style={{ height: `${Math.max(6, (h.sales / maxSales) * 150)}px` }}
                title={won(h.sales)}
              />
              <span className="text-[11px] text-sub">{h.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 분배 내역 */}
      <h2 className="mb-3 mt-8 font-bold">분배 내역</h2>
      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">날짜</th>
              <th className="px-5 py-3 text-right font-semibold">내 매출</th>
              <th className="px-5 py-3 text-right font-semibold">분배율</th>
              <th className="px-5 py-3 text-right font-semibold">분배금</th>
              <th className="px-5 py-3 text-right font-semibold">포인트</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.date} className="border-b border-line/50 last:border-0">
                <td className="px-5 py-3">{h.date}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(h.sales)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{h.rate ? `${h.rate}%` : "—"}</td>
                <td className="px-5 py-3 text-right font-semibold tabular-nums text-brand">{won(h.dist)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(h.point)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
