import { PageHead } from "@/components/ui";
import DistributePanel from "@/components/DistributePanel";

export default function Distribute() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead
        title="분배 실행 💸"
        desc="회사 이익에서 분배율을 정하고, 창업자별로 분배합니다. 잉여는 운영자금으로 보유돼요."
      />
      <DistributePanel revenue={8400000} />
      <p className="mt-5 text-xs text-sub">
        ※ 분배는 실제 발생한 회사 이익 내에서만 집행되며, 신규 가맹비·예치금 등 원금은 분배 재원에서 제외됩니다.
        분배는 회사 재량이며 확정 수익률·원금 보장이 아닙니다.
      </p>
    </div>
  );
}
