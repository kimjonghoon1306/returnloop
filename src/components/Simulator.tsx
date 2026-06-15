"use client";

import { useState } from "react";

const won = (n: number) => "₩" + Math.round(n).toLocaleString("ko-KR");

// 랜딩 후킹용 — 내 매출을 넣으면 매일/매월 받는 분배금·포인트를 체험
export default function Simulator() {
  const [sales, setSales] = useState(1000000); // 일 매출
  const [rate, setRate] = useState(3); // 분배율 %

  const daily = sales * (rate / 100);
  const point = daily * 0.25; // 분배금의 25%를 포인트로 가정
  const monthly = daily * 26; // 주말 제외 약 26일

  return (
    <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/5 p-7 sm:p-10">
      <div className="text-center">
        <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">수익 시뮬레이터</span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          나는 매일 <span className="grad">얼마</span>를 돌려받을까?
        </h3>
        <p className="mt-2 text-sm text-sub">내 매장 매출을 넣어보세요. 매일 받는 분배금이 바로 계산돼요.</p>
      </div>

      <div className="mx-auto mt-9 max-w-xl space-y-7">
        {/* 일 매출 */}
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-sub">하루 평균 매출</span>
            <b className="text-lg tabular-nums">{won(sales)}</b>
          </div>
          <input
            type="range"
            min={200000}
            max={5000000}
            step={100000}
            value={sales}
            onChange={(e) => setSales(parseInt(e.target.value))}
            className="w-full accent-[#2dd4a7]"
          />
          <div className="mt-1 flex justify-between text-[11px] text-sub">
            <span>20만원</span>
            <span>500만원</span>
          </div>
        </div>

        {/* 분배율 */}
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-sub">분배율 (회사 이익에 따라 변동)</span>
            <b className="text-lg tabular-nums">{rate}%</b>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={rate}
            onChange={(e) => setRate(parseInt(e.target.value))}
            className="w-full accent-[#2dd4a7]"
          />
          <div className="mt-1 flex justify-between text-[11px] text-sub">
            <span>1%</span>
            <span>5%</span>
          </div>
        </div>
      </div>

      {/* 결과 */}
      <div className="mt-9 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-surface/70 p-5 text-center">
          <div className="text-xs text-sub">매일 받는 분배금</div>
          <div className="mt-1 text-2xl font-extrabold grad tabular-nums">{won(daily)}</div>
        </div>
        <div className="rounded-2xl border border-line bg-surface/70 p-5 text-center">
          <div className="text-xs text-sub">매월 예상 (26일)</div>
          <div className="mt-1 text-2xl font-extrabold tabular-nums">{won(monthly)}</div>
        </div>
        <div className="rounded-2xl border border-line bg-surface/70 p-5 text-center">
          <div className="text-xs text-sub">매일 적립 포인트</div>
          <div className="mt-1 text-2xl font-extrabold tabular-nums">{won(point)}</div>
        </div>
      </div>

      <p className="mt-5 text-center text-[11px] text-sub">
        ※ 예시 계산입니다. 분배율·지급 여부는 회사 이익에 따라 회사 재량으로 정해지며, 확정 수익률·원금 보장이 아닙니다.
      </p>
    </div>
  );
}
