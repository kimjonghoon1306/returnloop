import { CARD, PageHead } from "@/components/ui";

const INPUT = "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand";

function Toggle({ on }: { on?: boolean }) {
  return (
    <span
      className={
        "relative inline-flex h-6 w-11 items-center rounded-full transition " +
        (on ? "bg-brand" : "bg-line")
      }
    >
      <span
        className={"absolute h-5 w-5 rounded-full bg-white transition " + (on ? "left-[22px]" : "left-0.5")}
      />
    </span>
  );
}

export default function Settings() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead title="설정 ⚙️" desc="계정과 알림을 관리하세요." />

      <div className={CARD}>
        <h2 className="font-bold">계정</h2>
        <div className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-xs text-sub">이름</label>
            <input className={INPUT} defaultValue="김창업" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-sub">이메일 (아이디)</label>
            <input className={INPUT} defaultValue="founder@returnloop.kr" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-sub">연락처</label>
            <input className={INPUT} defaultValue="010-1234-5678" />
          </div>
          <button className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-2.5 text-sm font-bold text-[#04140f]">
            저장하기
          </button>
        </div>
      </div>

      <div className={CARD + " mt-4"}>
        <h2 className="font-bold">정산 계좌</h2>
        <p className="mt-1 text-xs text-sub">분배금을 현금으로 받을 계좌예요. (포인트 전환은 즉시)</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className={INPUT} defaultValue="○○은행" />
          <input className={INPUT} defaultValue="123-456-7890123" />
        </div>
      </div>

      <div className={CARD + " mt-4"}>
        <h2 className="font-bold">알림</h2>
        <div className="mt-4 space-y-3">
          {[
            { label: "매일 분배 완료 알림", on: true },
            { label: "포인트 적립·사용 알림", on: true },
            { label: "공동구매 마감임박 알림", on: true },
            { label: "교육·컨설팅 일정 알림", on: false },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-sm">{r.label}</span>
              <Toggle on={r.on} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
