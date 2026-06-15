import { CARD, PageHead } from "@/components/ui";

const INPUT = "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-brand";

export default function AdminSettings() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead title="설정 ⚙️" desc="플랫폼 정책과 분배 기준을 설정합니다." />

      <div className={CARD}>
        <h2 className="font-bold">분배 정책</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-sub">최소 분배율 (%)</label>
            <input className={INPUT} defaultValue="1" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-sub">최대 분배율 (%)</label>
            <input className={INPUT} defaultValue="5" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-sub">기본 분배 주기</label>
            <select className={INPUT} defaultValue="daily">
              <option value="daily">매일</option>
              <option value="weekly">주간</option>
              <option value="monthly">월간</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-sub">포인트 충전 보너스 (%)</label>
            <input className={INPUT} defaultValue="5" />
          </div>
        </div>
        <button className="mt-4 rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-2.5 text-sm font-bold text-[#04140f]">
          정책 저장
        </button>
      </div>

      <div className={CARD + " mt-4"}>
        <h2 className="font-bold">분배 기준 안내</h2>
        <ul className="mt-3 space-y-2 text-sm text-sub">
          <li>• 분배 재원은 <b className="text-text">실제 발생한 회사 이익</b>에서만 산정됩니다.</li>
          <li>• 신규 가맹비·예치금 등 <b className="text-text">원금은 분배 재원에서 제외</b>됩니다.</li>
          <li>• 분배율·지급 여부는 <b className="text-text">회사 재량</b>이며 확정 수익률·원금 보장이 아닙니다.</li>
          <li>• 수익이 없는 기간에는 분배되지 않을 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
}
