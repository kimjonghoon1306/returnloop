import { CARD, PageHead, Badge } from "@/components/ui";

const INPUT = "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand";
const topics = ["창업 아이템 선정", "입지·상권 분석", "마케팅 전략", "AI 도입", "수익 구조 점검", "메뉴·상품 구성"];
const upcoming = [
  { date: "06.18 (목) 14:00", topic: "인스타 광고 세팅", who: "박상생 컨설턴트", status: "확정" },
  { date: "06.22 (월) 11:00", topic: "여름 신메뉴 기획", who: "박상생 컨설턴트", status: "대기" },
];

export default function Consulting() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHead title="컨설팅 🤝" desc="10년 노하우의 전문 컨설턴트와 1:1로 상담하세요." />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 예약 폼 */}
        <div className={CARD}>
          <h2 className="font-bold">상담 예약</h2>
          <div className="mt-4 space-y-3">
            <div>
              <label className="mb-1.5 block text-xs text-sub">상담 주제</label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t, i) => (
                  <span
                    key={t}
                    className={
                      "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition " +
                      (i === 2 ? "border-brand bg-brand/15 text-brand" : "border-line text-sub hover:border-brand/40")
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-sub">희망 일시</label>
              <input className={INPUT} type="datetime-local" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-sub">상담 내용</label>
              <textarea className={INPUT + " min-h-[90px] resize-y"} placeholder="어떤 고민이 있으신가요?" />
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3 text-sm font-bold text-[#04140f]">
              상담 예약하기
            </button>
          </div>
        </div>

        {/* 담당 + 예정 */}
        <div className="space-y-4">
          <div className={CARD}>
            <h2 className="font-bold">담당 컨설턴트</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-2/15 text-2xl">🧑‍💼</span>
              <div>
                <div className="font-bold">박상생 컨설턴트</div>
                <div className="text-xs text-sub">프랜차이즈 10년 · 신선식품/외식 전문</div>
                <div className="mt-1 text-xs text-brand">⭐ 4.9 · 상담 320건</div>
              </div>
            </div>
          </div>
          <div className={CARD}>
            <h2 className="font-bold">예정된 상담</h2>
            <div className="mt-4 space-y-2">
              {upcoming.map((u) => (
                <div key={u.date} className="flex items-center gap-3 rounded-xl bg-surface-2 p-3">
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{u.topic}</div>
                    <div className="text-xs text-sub">{u.date} · {u.who}</div>
                  </div>
                  <Badge tone={u.status === "확정" ? "ok" : "warn"}>{u.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
