import { PageHead } from "@/components/ui";
import NotiList, { type Noti } from "@/components/NotiList";

const items: Noti[] = [
  { icon: "💸", type: "분배", title: "오늘 분배금이 도착했어요", body: "회사 이익의 3.2%, ₩84,000이 분배됐어요.", time: "방금", unread: true },
  { icon: "🎁", type: "포인트", title: "포인트가 적립됐어요", body: "분배금 전환으로 ₩21,000 적립 (잔액 ₩312,000)", time: "10분 전", unread: true },
  { icon: "🛒", type: "공동구매", title: "마감 임박 상품 알림", body: "유기농 채소 박스 공동구매가 곧 마감돼요.", time: "1시간 전" },
  { icon: "🎓", type: "교육", title: "새 강좌가 열렸어요", body: "‘챗봇으로 고객응대 자동화’ 수강 신청을 받아요.", time: "어제" },
  { icon: "🤝", type: "컨설팅", title: "상담 일정 확정", body: "06.18(목) 14:00 인스타 광고 세팅 상담이 확정됐어요.", time: "어제" },
];

export default function Notifications() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead title="알림 🔔" desc="분배·포인트·공동구매·교육 소식을 한눈에." />
      <div className="mb-3 flex justify-end">
        <button className="text-xs font-semibold text-brand hover:underline">모두 읽음 처리</button>
      </div>
      <NotiList items={items} />
    </div>
  );
}
