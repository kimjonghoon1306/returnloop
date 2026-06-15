import { PageHead } from "@/components/ui";
import NotiList, { type Noti } from "@/components/NotiList";

const items: Noti[] = [
  { icon: "💰", type: "수익", title: "오늘 수익 집계 완료", body: "회사 수익 ₩8,400,000 집계 — 분배를 실행하세요.", time: "방금", unread: true },
  { icon: "🧑‍🍳", type: "가맹", title: "신규 창업 신청", body: "‘행복분식 김사장’님이 창업을 신청했어요.", time: "30분 전", unread: true },
  { icon: "🏭", type: "제조사", title: "신규 제조사 등록 요청", body: "‘베이커리온’이 공급 제휴를 요청했어요.", time: "2시간 전" },
  { icon: "📦", type: "재고", title: "재고 부족 경고", body: "유기농 채소 박스 공급 재고가 임박했어요.", time: "어제" },
  { icon: "🧑‍🍳", type: "창업자", title: "휴면 전환 알림", body: "‘정육왕 최사장’ 매장이 7일 무거래로 휴면 처리됐어요.", time: "어제" },
];

export default function AdminNotifications() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead title="알림 🔔" desc="수익·가맹·제조사·재고 관리 알림을 확인하세요." />
      <div className="mb-3 flex justify-end">
        <button className="text-xs font-semibold text-brand hover:underline">모두 읽음 처리</button>
      </div>
      <NotiList items={items} />
    </div>
  );
}
