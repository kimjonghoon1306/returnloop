import Link from "next/link";
import Logo from "@/components/Logo";

const won = (n: number) => "₩" + n.toLocaleString("ko-KR");

// 데모 데이터 (나중에 Supabase 연동)
const today = { distribution: 84000, point: 21000, sales: 1240000, rate: 3.2 };
const stats = [
  { label: "오늘 분배금", value: won(today.distribution), accent: true, sub: `회사 이익의 ${today.rate}%` },
  { label: "오늘 적립 포인트", value: won(today.point), sub: "쇼핑몰 매입에 사용" },
  { label: "오늘 내 매출", value: won(today.sales), sub: "판매 실적" },
  { label: "포인트 잔액", value: won(312000), sub: "사용 가능" },
];

const history = [
  { date: "06.15", sales: 1240000, dist: 84000, point: 21000, rate: 3.2 },
  { date: "06.14", sales: 980000, dist: 58800, point: 14700, rate: 3.0 },
  { date: "06.13", sales: 1520000, dist: 106400, point: 26600, rate: 3.5 },
  { date: "06.12", sales: 760000, dist: 38000, point: 9500, rate: 2.5 },
  { date: "06.11", sales: 1100000, dist: 66000, point: 16500, rate: 3.0 },
  { date: "06.10", sales: 0, dist: 0, point: 0, rate: 0 },
];

const card = "rounded-2xl border border-line bg-surface/60 p-5";

export default function Dashboard() {
  const maxSales = Math.max(...history.map((h) => h.sales), 1);
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header className="border-b border-line/60 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">🧑‍🍳 창업자</span>
            <span className="hidden text-sub sm:inline">베리팜 김창업님</span>
            <Link href="/admin" className="text-sub transition hover:text-text">관리자 →</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8">
        <h1 className="text-2xl font-bold sm:text-3xl">오늘의 루프</h1>
        <p className="mt-1 text-sm text-sub">2026년 6월 15일 · 함께 만든 수익이 매일 돌아옵니다.</p>

        {/* 통계 */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={
                "rounded-2xl border p-5 " +
                (s.accent
                  ? "border-brand/40 bg-gradient-to-br from-brand/10 to-brand-2/5"
                  : "border-line bg-surface/60")
              }
            >
              <div className="text-xs text-sub">{s.label}</div>
              <div className={"mt-1.5 text-2xl font-extrabold " + (s.accent ? "grad" : "")}>{s.value}</div>
              <div className="mt-1 text-[11px] text-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* 분배 안내 배너 */}
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-surface/60 px-5 py-4">
          <span className="text-2xl">💡</span>
          <p className="flex-1 text-sm text-sub">
            오늘 회사 이익이 발생해 <b className="text-brand">{today.rate}%</b>가 분배됐어요.
            분배율은 회사 이익에 따라 매일 달라지며, 수익이 없는 날은 분배되지 않을 수 있어요.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* 일별 매출 차트 */}
          <div className={card + " lg:col-span-2"}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold">최근 매출 & 분배</h2>
              <span className="text-xs text-sub">최근 6일</span>
            </div>
            <div className="mt-6 flex items-end justify-between gap-3">
              {history.map((h) => (
                <div key={h.date} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <span className="text-[10px] tabular-nums text-sub">
                    {h.sales ? `${Math.round(h.sales / 10000)}만` : "0"}
                  </span>
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

          {/* 누적 요약 */}
          <div className={card}>
            <h2 className="font-bold">이번 달 누적</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <div className="text-xs text-sub">누적 분배금</div>
                <div className="mt-0.5 text-xl font-bold grad">{won(1842000)}</div>
              </li>
              <li>
                <div className="text-xs text-sub">누적 포인트 적립</div>
                <div className="mt-0.5 text-xl font-bold">{won(460500)}</div>
              </li>
              <li>
                <div className="text-xs text-sub">누적 매출</div>
                <div className="mt-0.5 text-xl font-bold">{won(28400000)}</div>
              </li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3 text-sm font-bold text-[#04140f]">
              포인트로 매입하기
            </button>
          </div>
        </div>

        {/* 분배 내역 테이블 */}
        <h2 className="mb-3 mt-8 font-bold">분배 내역</h2>
        <div className={"overflow-x-auto rounded-2xl border border-line bg-surface/60"}>
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
      </main>
    </div>
  );
}
