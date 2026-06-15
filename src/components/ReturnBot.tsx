"use client";

import { useState } from "react";

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
    ],
  },
  {
    cat: "분배·수익",
    items: [
      {
        q: "분배금은 어떻게 받나요?",
        a: "회사에 실제 이익이 생기면 그 1~5%를 매일 회사 재량으로 분배해요. 대시보드의 ‘수익·분배’에서 매일 내역을 볼 수 있어요. 수익이 없는 날은 분배되지 않을 수 있어요.",
      },
      {
        q: "분배율은 왜 매일 달라지나요?",
        a: "확정 수익이 아니라 실제 회사 이익에 연동된 변동 분배예요. 이익이 클수록 분배율도 올라가고, 잉여는 운영자금으로 보유해 안정적으로 운영해요.",
      },
    ],
  },
  {
    cat: "쇼핑포인트",
    items: [
      {
        q: "포인트는 어디서 보나요?",
        a: "‘포인트 지갑’ 메뉴에서 잔액·적립·사용 내역을 볼 수 있어요. 분배금을 포인트로 전환하면 충전 보너스(5%)도 드려요.",
      },
      {
        q: "포인트로 뭘 할 수 있나요?",
        a: "‘공동구매 매입’에서 상품을 쿠팡보다 싸게 떼올 때 사용해요. 포인트를 쓰면 매입가가 더 내려가요.",
      },
    ],
  },
  {
    cat: "창업·교육",
    items: [
      {
        q: "창업비가 많이 드나요?",
        a: "기존 프랜차이즈보다 훨씬 낮은 소자본으로 시작하도록 설계했어요. 창업비는 본인 사업의 판권·자산 비용이에요.",
      },
      {
        q: "교육·컨설팅도 받나요?",
        a: "네! ‘교육 센터’에서 온라인 마케팅·최신 AI 활용 강의를 무료로 듣고, ‘컨설팅’에서 전문 컨설턴트와 1:1 상담을 예약할 수 있어요.",
      },
    ],
  },
];

export default function ReturnBot() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<QA | null>(null);

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
            {/* 인사 */}
            <div className="mb-4 rounded-2xl rounded-tl-sm bg-surface-2 p-3 text-sm">
              안녕하세요! 리턴루프 도우미 리턴봇이에요 🤖
              <br />
              아래에서 궁금한 걸 눌러보세요.
            </div>

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
