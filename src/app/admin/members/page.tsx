import Link from "next/link";
import { won, PageHead, Stat, Badge } from "@/components/ui";

const members = [
  { id: "1", name: "베리팜 김창업", biz: "신선식품", grade: "새싹", sales: 28400000, dist: 1842000, status: "정상", join: "01.25" },
  { id: "2", name: "오늘반찬 이사장", biz: "반찬", grade: "씨앗", sales: 12600000, dist: 720000, status: "정상", join: "03.12" },
  { id: "3", name: "수산직송 박대표", biz: "수산", grade: "나무", sales: 41200000, dist: 2880000, status: "정상", join: "11.08" },
  { id: "4", name: "정육왕 최사장", biz: "정육", grade: "씨앗", sales: 8900000, dist: 445000, status: "휴면", join: "04.20" },
  { id: "5", name: "베이커리온 정점주", biz: "베이커리", grade: "새싹", sales: 19800000, dist: 1188000, status: "정상", join: "02.15" },
];

export default function Members() {
  const active = members.filter((m) => m.status === "정상").length;
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="창업자 관리 🧑‍🍳" desc="가맹 창업자와 매장 현황을 관리합니다." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="전체 창업자" value={`${members.length}명`} accent />
        <Stat label="활성" value={`${active}명`} />
        <Stat label="휴면" value={`${members.length - active}명`} />
        <Stat label="이번 달 신규" value="2명" />
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">창업자</th>
              <th className="px-5 py-3 font-semibold">업종</th>
              <th className="px-5 py-3 font-semibold">등급</th>
              <th className="px-5 py-3 text-right font-semibold">누적 매출</th>
              <th className="px-5 py-3 text-right font-semibold">누적 분배</th>
              <th className="px-5 py-3 text-center font-semibold">상태</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.name} className="border-b border-line/50 last:border-0 transition hover:bg-white/5">
                <td className="px-5 py-3 font-medium">
                  <Link href={`/admin/members/${m.id}`} className="transition hover:text-brand">
                    {m.name}
                  </Link>
                  <div className="text-[11px] text-sub">가맹 {m.join}</div>
                </td>
                <td className="px-5 py-3 text-sub">{m.biz}</td>
                <td className="px-5 py-3">🌱 {m.grade}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{won(m.sales)}</td>
                <td className="px-5 py-3 text-right tabular-nums font-semibold text-brand">{won(m.dist)}</td>
                <td className="px-5 py-3 text-center">
                  <Badge tone={m.status === "정상" ? "ok" : "sub"}>{m.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
