import { CARD, PageHead, Badge } from "@/components/ui";
import { ProgressBar } from "@/components/Gauge";

const courses = [
  { cat: "온라인 마케팅", emoji: "📈", title: "SNS로 손님 부르기 기초", lessons: 8, done: 8, tag: "수료" },
  { cat: "온라인 마케팅", emoji: "📣", title: "네이버·인스타 광고 실전", lessons: 10, done: 4, tag: "수강중" },
  { cat: "AI 활용", emoji: "🤖", title: "AI로 상세페이지 10분 완성", lessons: 6, done: 2, tag: "수강중" },
  { cat: "AI 활용", emoji: "🧠", title: "챗봇으로 고객응대 자동화", lessons: 7, done: 0, tag: "신규" },
  { cat: "운영", emoji: "📦", title: "재고·발주 관리의 기술", lessons: 5, done: 0, tag: "신규" },
  { cat: "운영", emoji: "💰", title: "초보 사장 세무 기초", lessons: 6, done: 6, tag: "수료" },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="교육 센터 🎓" desc="온라인 마케팅부터 최신 AI까지 — 잘 파는 법을 무료로 배워요." />

      {/* 진행 요약 */}
      <div className="mb-5 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-sub">내 학습 진행률</div>
            <div className="mt-0.5 text-2xl font-extrabold grad">58%</div>
          </div>
          <div className="text-right text-xs text-sub">
            완료 <b className="text-brand">2강좌</b> · 수강중 2강좌
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar value={58} height={12} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => {
          const pct = Math.round((c.done / c.lessons) * 100);
          return (
            <div key={c.title} className={CARD + " lift"}>
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">{c.emoji}</span>
                <Badge tone={c.tag === "수료" ? "ok" : c.tag === "수강중" ? "brand" : "sub"}>{c.tag}</Badge>
              </div>
              <div className="mt-3 text-[11px] font-bold text-brand">{c.cat}</div>
              <h3 className="mt-0.5 font-bold leading-snug">{c.title}</h3>
              <div className="mt-3">
                <ProgressBar value={pct} height={8} />
                <div className="mt-1.5 text-[11px] text-sub">
                  {c.done}/{c.lessons}강 · {pct}%
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl border border-line bg-surface py-2.5 text-sm font-semibold transition hover:border-brand/50">
                {c.tag === "수료" ? "다시 보기" : c.tag === "신규" ? "수강 시작" : "이어서 보기"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
