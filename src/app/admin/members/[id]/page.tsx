import { won, CARD, PageHead, Stat, Badge } from "@/components/ui";
import { ProgressBar } from "@/components/Gauge";

// 데모: id로 조회하는 대신 고정 목업
const member = {
  name: "베리팜 김창업",
  biz: "신선식품 / 농수산",
  grade: "새싹",
  status: "정상",
  join: "2026.01.25",
  phone: "010-1234-5678",
  email: "founder@returnloop.kr",
  sales: 28400000,
  dist: 1842000,
  point: 460500,
};

const recent = [
  { date: "06.15", sales: 1240000, dist: 84000 },
  { date: "06.14", sales: 980000, dist: 58800 },
  { date: "06.13", sales: 1520000, dist: 106400 },
  { date: "06.12", sales: 760000, dist: 38000 },
  { date: "06.11", sales: 1100000, dist: 66000 },
];

export default function MemberDetail() {
  const maxSales = Math.max(...recent.map((r) => r.sales), 1);
  return (
    <div className="mx-auto max-w-4xl">
      <PageHead title={member.name} desc={member.biz} back={{ href: "/admin/members", label: "창업자 관리" }} />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge tone="brand">🌱 {member.grade}</Badge>
        <Badge tone={member.status === "정상" ? "ok" : "sub"}>{member.status}</Badge>
        <span className="text-xs text-sub">가맹 {member.join}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="누적 매출" value={won(member.sales)} accent />
        <Stat label="누적 분배금" value={won(member.dist)} />
        <Stat label="누적 포인트" value={won(member.point)} />
        <Stat label="평균 분배율" value="3.1%" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {/* 매출 추이 */}
        <div className={CARD + " lg:col-span-2"}>
          <h2 className="font-bold">최근 매출 · 분배</h2>
          <div className="mt-5 space-y-3">
            {recent.map((r) => (
              <div key={r.date} className="flex items-center gap-3">
                <span className="w-14 shrink-0 text-xs text-sub">{r.date}</span>
                <div className="flex-1">
                  <ProgressBar value={(r.sales / maxSales) * 100} height={12} />
                </div>
                <span className="w-24 shrink-0 text-right text-sm tabular-nums text-sub">{won(r.sales)}</span>
                <span className="w-20 shrink-0 text-right text-sm font-semibold tabular-nums text-brand">
                  {won(r.dist)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 연락처/관리 */}
        <div className="space-y-4">
          <div className={CARD}>
            <h2 className="font-bold">연락처</h2>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-sub">📱 연락처</span>
                <span>{member.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sub">✉️ 이메일</span>
                <span className="truncate">{member.email}</span>
              </div>
            </div>
          </div>
          <div className={CARD}>
            <h2 className="font-bold">관리</h2>
            <div className="mt-3 space-y-2">
              <button className="w-full rounded-xl border border-line py-2.5 text-sm font-semibold transition hover:border-brand/50">
                메시지 보내기
              </button>
              <button className="w-full rounded-xl border border-line py-2.5 text-sm font-semibold transition hover:border-amber-400/50">
                상태 변경 (휴면 처리)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
