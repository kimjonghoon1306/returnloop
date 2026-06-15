"use client";

import { useState } from "react";

const won = (n: number) => "₩" + Math.round(n).toLocaleString("ko-KR");

const members = [
  { name: "베리팜 김창업", sales: 1240000 },
  { name: "오늘반찬 이사장", sales: 980000 },
  { name: "수산직송 박대표", sales: 1520000 },
  { name: "정육왕 최사장", sales: 760000 },
  { name: "베이커리온 정점주", sales: 1100000 },
];

// 분배율을 바꾸면 회사 이익 → Pool → 창업자별 분배가 실시간 재계산되는 패널
export default function DistributePanel({ revenue }: { revenue: number }) {
  const [rate, setRate] = useState(3.2);
  const pool = revenue * (rate / 100);
  const reserve = revenue - pool;
  const totalSales = members.reduce((s, m) => s + m.sales, 0);

  return (
    <div className="space-y-4">
      {/* 분배율 조정 */}
      <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-brand-2/5 p-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm text-sub">오늘 분배율 (회사 재량)</div>
            <div className="mt-1 text-4xl font-extrabold grad tabular-nums">{rate.toFixed(1)}%</div>
          </div>
          <div className="text-right text-sm">
            <div className="text-sub">분배 재원 (Pool)</div>
            <div className="text-2xl font-extrabold tabular-nums">{won(pool)}</div>
          </div>
        </div>
        <input
          type="range"
          min={1}
          max={5}
          step={0.1}
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="mt-5 w-full accent-[#2dd4a7]"
        />
        <div className="mt-1 flex justify-between text-[11px] text-sub">
          <span>1% (보수적)</span>
          <span>5% (공격적)</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-surface-2 p-3">
            <div className="text-xs text-sub">회사 수익</div>
            <div className="mt-0.5 font-bold tabular-nums">{won(revenue)}</div>
          </div>
          <div className="rounded-xl bg-surface-2 p-3">
            <div className="text-xs text-sub">운영 보유 (잉여)</div>
            <div className="mt-0.5 font-bold tabular-nums text-sub">{won(reserve)}</div>
          </div>
        </div>
        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3.5 text-sm font-bold text-[#04140f]">
          {won(pool)} 분배 확정하기
        </button>
      </div>

      {/* 창업자별 미리보기 */}
      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-sub">
              <th className="px-5 py-3 font-semibold">창업자</th>
              <th className="px-5 py-3 text-right font-semibold">매출</th>
              <th className="px-5 py-3 text-right font-semibold">비중</th>
              <th className="px-5 py-3 text-right font-semibold">분배금</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => {
              const share = m.sales / totalSales;
              return (
                <tr key={m.name} className="border-b border-line/50 last:border-0">
                  <td className="px-5 py-3 font-medium">{m.name}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-sub">{won(m.sales)}</td>
                  <td className="px-5 py-3 text-right tabular-nums text-sub">{Math.round(share * 100)}%</td>
                  <td className="px-5 py-3 text-right font-semibold tabular-nums text-brand">{won(pool * share)}</td>
                </tr>
              );
            })}
            <tr className="bg-surface-2/50 font-bold">
              <td className="px-5 py-3">합계</td>
              <td className="px-5 py-3 text-right tabular-nums">{won(totalSales)}</td>
              <td className="px-5 py-3 text-right text-sub">100%</td>
              <td className="px-5 py-3 text-right tabular-nums text-brand">{won(pool)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
