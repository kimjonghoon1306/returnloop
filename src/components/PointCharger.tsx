"use client";

import { useState } from "react";

const won = (n: number) => "₩" + n.toLocaleString("ko-KR");
const PRESETS = [10000, 30000, 50000, 100000];

// 쇼핑포인트 충전(전환) UI — 분배금/계좌에서 포인트로. 보너스 5% 연출.
export default function PointCharger({ balance }: { balance: number }) {
  const [amount, setAmount] = useState(30000);
  const bonus = Math.floor(amount * 0.05);
  const after = balance + amount + bonus;

  return (
    <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/5 p-6">
      <div className="flex items-center gap-2 text-sm font-semibold">🎁 포인트 충전</div>
      <p className="mt-1 text-xs text-sub">충전 금액의 5%를 보너스로 더 드려요</p>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => setAmount(p)}
            className={
              "rounded-xl border py-3 text-sm font-bold transition " +
              (amount === p ? "border-brand bg-brand/15 text-brand" : "border-line bg-surface text-sub hover:border-brand/40")
            }
          >
            {p / 10000}만
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
          step={10000}
          className="w-full bg-transparent text-lg font-bold tabular-nums outline-none"
        />
        <span className="text-sub">원</span>
      </div>

      <div className="mt-4 space-y-1.5 rounded-xl bg-surface-2 p-4 text-sm">
        <div className="flex justify-between text-sub">
          <span>충전 금액</span>
          <span className="tabular-nums">{won(amount)}</span>
        </div>
        <div className="flex justify-between text-brand">
          <span>보너스 (+5%)</span>
          <span className="tabular-nums">+{won(bonus)}</span>
        </div>
        <div className="mt-1 flex justify-between border-t border-line pt-2 font-bold">
          <span>충전 후 잔액</span>
          <span className="tabular-nums grad">{won(after)}</span>
        </div>
      </div>

      <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3.5 text-sm font-bold text-[#04140f] transition hover:brightness-105">
        {won(amount)} 충전하기
      </button>
    </div>
  );
}
