import { won, CARD, PageHead, Stat, Badge } from "@/components/ui";

const INPUT = "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand";

export default function Store() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHead title="내 매장 🏪" desc="매장 정보와 운영 현황을 관리하세요." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label="운영 일수" value="142일" sub="개업 후" />
        <Stat label="누적 매출" value={won(28400000)} accent />
        <Stat label="단골 고객" value="86명" />
        <Stat label="매장 등급" value="🌱 새싹" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* 매장 정보 */}
        <div className={CARD}>
          <h2 className="font-bold">매장 정보</h2>
          <div className="mt-4 space-y-3">
            <div>
              <label className="mb-1 block text-xs text-sub">매장 이름</label>
              <input className={INPUT} defaultValue="베리팜 신선마켓" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-sub">업종</label>
              <input className={INPUT} defaultValue="신선식품 / 농수산" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-sub">주소</label>
              <input className={INPUT} defaultValue="서울시 강남구 ○○로 12" />
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

        {/* 운영 현황 */}
        <div className="space-y-4">
          <div className={CARD}>
            <h2 className="font-bold">연결된 프랜차이즈</h2>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-2 p-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-2xl">🍓</span>
              <div>
                <div className="font-semibold">베리팜 본사</div>
                <div className="text-xs text-sub">2026.01.25 가맹 · 판권 보유</div>
              </div>
              <span className="ml-auto"><Badge tone="ok">정상</Badge></span>
            </div>
          </div>
          <div className={CARD}>
            <h2 className="font-bold">담당 컨설턴트</h2>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-2 p-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-2/15 text-2xl">🧑‍💼</span>
              <div>
                <div className="font-semibold">박상생 컨설턴트</div>
                <div className="text-xs text-sub">프랜차이즈 10년 · 신선식품 전문</div>
              </div>
              <button className="ml-auto rounded-lg border border-line px-3 py-1.5 text-xs">상담</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
