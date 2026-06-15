import { CARD, PageHead, Stat, Badge } from "@/components/ui";

const courses = [
  { cat: "온라인 마케팅", title: "SNS로 손님 부르기 기초", lessons: 8, learners: 142, status: "공개" },
  { cat: "온라인 마케팅", title: "네이버·인스타 광고 실전", lessons: 10, learners: 96, status: "공개" },
  { cat: "AI 활용", title: "AI로 상세페이지 10분 완성", lessons: 6, learners: 88, status: "공개" },
  { cat: "AI 활용", title: "챗봇으로 고객응대 자동화", lessons: 7, learners: 0, status: "작성중" },
  { cat: "운영", title: "재고·발주 관리의 기술", lessons: 5, learners: 54, status: "공개" },
];

export default function AdminEducation() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHead title="교육 콘텐츠 🎓" desc="창업자에게 제공하는 마케팅·AI 강의를 관리합니다." />

      <div className="grid grid-cols-3 gap-3">
        <Stat label="등록 강좌" value={`${courses.length}개`} accent />
        <Stat label="총 수강생" value="380명" />
        <Stat label="평균 완주율" value="62%" />
      </div>

      <div className="mt-4 mb-4 flex justify-end">
        <button className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-2.5 text-sm font-bold text-[#04140f]">
          + 강좌 등록
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">강좌</th>
              <th className="px-5 py-3 font-semibold">카테고리</th>
              <th className="px-5 py-3 text-right font-semibold">강의 수</th>
              <th className="px-5 py-3 text-right font-semibold">수강생</th>
              <th className="px-5 py-3 text-center font-semibold">상태</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.title} className="border-b border-line/50 last:border-0 hover:bg-white/5">
                <td className="px-5 py-3 font-medium">{c.title}</td>
                <td className="px-5 py-3 text-sub">{c.cat}</td>
                <td className="px-5 py-3 text-right tabular-nums text-sub">{c.lessons}강</td>
                <td className="px-5 py-3 text-right tabular-nums">{c.learners}명</td>
                <td className="px-5 py-3 text-center">
                  <Badge tone={c.status === "공개" ? "ok" : "warn"}>{c.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
