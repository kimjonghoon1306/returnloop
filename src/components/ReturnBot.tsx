"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

// 페이지 맥락별 인사말
function greetFor(path: string): string {
  if (path.startsWith("/dashboard/wallet")) return "포인트 지갑을 보고 계시네요 🎁 충전·사용이 궁금하면 눌러보세요.";
  if (path.startsWith("/dashboard/earnings")) return "오늘 분배는 잘 받으셨나요? 💸 분배가 궁금하면 눌러보세요.";
  if (path.startsWith("/dashboard/education")) return "교육 들으러 오셨군요 🎓 강의·컨설팅이 궁금하면 물어보세요.";
  if (path.startsWith("/dashboard")) return "창업자님 환영해요 🧑‍🍳 분배·포인트 뭐든 물어보세요.";
  if (path.startsWith("/admin")) return "본사 관리자님 안녕하세요 🏢 운영이 궁금하면 눌러보세요.";
  if (path.startsWith("/login") || path.startsWith("/signup")) return "창업이 궁금하세요? 🌱 아래에서 골라보세요.";
  return "안녕하세요! 리턴루프 도우미 리턴봇이에요 🤖 아래에서 궁금한 걸 눌러보세요.";
}

// 리턴봇 — 정해진 문구(FAQ)를 누르면 답해주는 클릭형 챗봇.
// 지금은 기능 설명용. 나중에 답변/문구만 수정하면 됨.
type QA = { q: string; a: string };

const FAQ: { cat: string; items: QA[] }[] = [
  {
    cat: "리턴루프란?",
    items: [
      {
        q: "리턴루프가 뭐예요?",
        a: "창업자와 회사가 함께 만든 수익을 매일 나누고, 그 분배금이 쇼핑포인트로 다시 순환하는 상생 창업 플랫폼이에요. ‘버는 만큼 돌려주고, 돌려준 만큼 다시 큰다’가 핵심이에요.",
      },
      {
        q: "어떻게 수익이 도나요?",
        a: "① 창업자가 물건을 팔면 회사에 수익이 쌓이고 ② 그 일부를 매일 분배하고 ③ 분배금 일부는 쇼핑포인트로 전환돼 ④ 다시 매입에 쓰여 또 매출이 됩니다. 4단계 루프예요.",
      },
      {
        q: "기존 프랜차이즈와 뭐가 달라요?",
        a: "기존엔 본사·컨설턴트가 위에서 비용을 떼갔다면, 리턴루프는 함께 만든 수익을 다시 나눠요. 떼가는 구조가 아니라 ‘같이 만들고 같이 나누는’ 구조예요.",
      },
    ],
  },
  {
    cat: "가입·창업",
    items: [
      {
        q: "어떻게 가입하나요?",
        a: "메인 화면의 ‘시작하기 / 창업 신청하기’를 누르고 이름·연락처·이메일·희망 업종을 입력하면 돼요. 신청 후 담당 컨설턴트가 안내를 도와드려요.",
      },
      {
        q: "창업비가 많이 드나요?",
        a: "기존 프랜차이즈보다 훨씬 낮은 소자본으로 시작하도록 설계했어요. 창업비는 본인 사업의 판권·자산 비용이에요.",
      },
      {
        q: "어떤 업종을 할 수 있나요?",
        a: "신선식품·반찬·수산·정육·베이커리·카페 등 다양한 업종이 가능해요. 희망 업종을 알려주시면 컨설턴트가 맞는 브랜드를 연결해 드려요.",
      },
      {
        q: "탈퇴하면 어떻게 되나요?",
        a: "언제든 탈퇴할 수 있어요. 보유 포인트·정산 예정 분배금은 안내에 따라 정리되며, 자세한 절차는 컨설팅에서 도와드려요.",
      },
    ],
  },
  {
    cat: "분배·수익",
    items: [
      {
        q: "분배금은 어떻게 받나요?",
        a: "회사에 실제 이익이 생기면 그 일부를 매일 회사 재량으로 분배해요. 대시보드의 ‘수익·분배’에서 매일 내역을 볼 수 있어요. 수익이 없는 날은 분배되지 않을 수 있어요.",
      },
      {
        q: "분배율은 왜 매일 달라지나요?",
        a: "확정 수익이 아니라 실제 회사 이익에 연동된 변동 분배예요. 이익에 따라 분배율이 달라지고, 잉여는 운영자금으로 보유해 안정적으로 운영해요. 확정 수익률·원금 보장은 아니에요.",
      },
      {
        q: "정산은 언제 되나요?",
        a: "기본은 매일 정산이에요. 회사 수익 집계 후 분배가 확정되며, 현금 또는 쇼핑포인트로 받을 수 있어요. (정산 주기는 정책에 따라 달라질 수 있어요.)",
      },
      {
        q: "현금으로도 받을 수 있나요?",
        a: "네. 설정에 등록한 정산 계좌로 현금 수령이 가능하고, 포인트 전환을 선택하면 충전 보너스 혜택이 있어요.",
      },
    ],
  },
  {
    cat: "쇼핑포인트",
    items: [
      {
        q: "포인트는 어디서 보나요?",
        a: "‘포인트 지갑’ 메뉴에서 잔액·적립·사용 내역을 볼 수 있어요. 분배금을 포인트로 전환하면 충전 보너스도 드려요.",
      },
      {
        q: "포인트로 뭘 할 수 있나요?",
        a: "‘공동구매 매입’에서 상품을 쿠팡보다 싸게 떼올 때 사용해요. 포인트를 쓰면 매입가가 더 내려가요.",
      },
      {
        q: "포인트 충전 보너스가 뭐예요?",
        a: "포인트를 충전하면 충전 금액의 일부를 보너스로 더 드려요. 포인트 지갑의 ‘충전’에서 금액을 고르면 보너스가 바로 계산돼요.",
      },
      {
        q: "포인트도 환불되나요?",
        a: "사용하지 않은 충전 포인트는 정책에 따라 환불받을 수 있어요. 보너스 포인트는 환불 대상에서 제외될 수 있어요. 자세한 건 고객센터로 문의해 주세요.",
      },
    ],
  },
  {
    cat: "교육·컨설팅",
    items: [
      {
        q: "교육은 어떤 게 있나요?",
        a: "‘교육 센터’에서 온라인 마케팅(SNS·광고)과 최신 AI 활용(상세페이지·콘텐츠·자동화) 강의를 무료로 들을 수 있어요. 강의마다 진도율도 표시돼요.",
      },
      {
        q: "컨설팅은 어떻게 받나요?",
        a: "‘컨설팅’ 메뉴에서 상담 주제와 희망 일시를 골라 1:1 예약하면 돼요. 10년 경력의 프랜차이즈 전문 컨설턴트가 도와드려요.",
      },
    ],
  },
  {
    cat: "등급·재미",
    items: [
      {
        q: "창업 등급은 뭐예요?",
        a: "누적 분배금에 따라 씨앗 → 새싹 → 나무 → 숲 으로 등급이 올라가요. 대시보드에서 다음 등급까지 얼마 남았는지 진행바로 볼 수 있어요.",
      },
      {
        q: "등급을 올리면 좋은 점은요?",
        a: "활동을 꾸준히 할수록 등급이 오르고, 매일 받는 재미와 함께 성장하는 기록이 쌓여요. (등급별 혜택은 점차 확대될 예정이에요.)",
      },
    ],
  },
];

export default function ReturnBot() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<QA | null>(null);
  const path = usePathname();
  const greet = greetFor(path);

  return (
    <>
      {/* 토글 버튼 */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="리턴봇"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2dd4a7] to-[#38bdf8] text-2xl shadow-2xl transition hover:brightness-105"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* 패널 */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[520px] max-h-[75vh] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
          {/* 헤더 */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-5 py-4 text-[#04140f]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/30 text-xl">🤖</span>
            <div>
              <div className="font-bold">리턴봇</div>
              <div className="text-[11px] opacity-80">무엇이 궁금하세요?</div>
            </div>
          </div>

          {/* 본문 */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* 인사 (페이지 맥락별) */}
            <div className="mb-4 rounded-2xl rounded-tl-sm bg-surface-2 p-3 text-sm">{greet}</div>

            {/* 선택한 답변 */}
            {active && (
              <div className="mb-4">
                <div className="ml-auto mb-2 w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-brand/20 px-3.5 py-2 text-sm font-medium">
                  {active.q}
                </div>
                <div className="w-fit max-w-[90%] rounded-2xl rounded-tl-sm bg-surface-2 px-3.5 py-2.5 text-sm leading-relaxed">
                  {active.a}
                </div>
              </div>
            )}

            {/* 질문 버튼들 */}
            <div className="space-y-4">
              {FAQ.map((g) => (
                <div key={g.cat}>
                  <div className="mb-1.5 text-[11px] font-bold tracking-wide text-sub">{g.cat}</div>
                  <div className="flex flex-col gap-1.5">
                    {g.items.map((it) => (
                      <button
                        key={it.q}
                        onClick={() => setActive(it)}
                        className={
                          "rounded-xl border px-3.5 py-2 text-left text-sm transition " +
                          (active?.q === it.q
                            ? "border-brand bg-brand/10 text-brand"
                            : "border-line bg-surface hover:border-brand/40")
                        }
                      >
                        {it.q}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-line px-4 py-2.5 text-center text-[10px] text-sub">
            정해진 안내를 도와드려요 · 자세한 상담은 컨설팅에서
          </div>
        </div>
      )}
    </>
  );
}
