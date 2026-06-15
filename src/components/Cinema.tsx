"use client";

import { useEffect, useState } from "react";

// 6컷 시네마틱 인트로 — 리턴루프 창업 혜택을 화려하게 후킹
const DURATIONS = [3000, 3200, 3400, 3600, 3800, 4500];
const TOTAL = 6;

export default function Cinema() {
  const [scene, setScene] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // 세션당 1회만 (새로고침 후 다시 들어오면 스킵)
    if (typeof window !== "undefined" && sessionStorage.getItem("rl_intro") === "1") {
      setGone(true);
      return;
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      finish();
      return;
    }
  }, []);

  useEffect(() => {
    if (gone || out) return;
    if (scene >= TOTAL) {
      finish();
      return;
    }
    const t = setTimeout(() => setScene((s) => s + 1), DURATIONS[scene]);
    return () => clearTimeout(t);
  }, [scene, gone, out]);

  function finish() {
    setOut(true);
    if (typeof window !== "undefined") sessionStorage.setItem("rl_intro", "1");
    setTimeout(() => setGone(true), 800);
  }

  if (gone) return null;

  const progress = Math.min(100, ((scene + 1) / TOTAL) * 100);

  return (
    <div className={"cine" + (out ? " out" : "")} role="dialog" aria-label="인트로">
      <div className="cine-bg" />
      <div className="cine-progress" style={{ width: `${progress}%` }} />
      <button className="cine-skip" onClick={finish}>
        건너뛰기 ✕
      </button>

      {/* 화려한 배경 — 다중 회전 궤도 + 날아다니는 아이콘 + 빛 입자 */}
      <div className="cine-orbit r1" style={{ width: 460, height: 460 }} />
      <div className="cine-orbit r2" style={{ width: 680, height: 680 }} />
      <div className="cine-orbit r3" style={{ width: 900, height: 900 }} />

      {/* 궤도를 도는 아이콘들 (반지름·속도·시작각 제각각) */}
      {[
        { e: "🛍️", radius: 230, dur: 18, start: 0 },
        { e: "💸", radius: 230, dur: 18, start: 120 },
        { e: "🎁", radius: 230, dur: 18, start: 240 },
        { e: "🤝", radius: 340, dur: 28, start: 60 },
        { e: "🏪", radius: 340, dur: 28, start: 200 },
        { e: "🤖", radius: 340, dur: 28, start: 320 },
      ].map((f, i) => (
        <div
          key={i}
          className="cine-fly"
          style={{ animationDuration: `${f.dur}s`, transform: `rotate(${f.start}deg)` }}
        >
          <span style={{ left: f.radius, marginLeft: -24, marginTop: -24, animationDuration: `${f.dur}s` }}>
            {f.e}
          </span>
        </div>
      ))}

      {/* 떠다니는 빛 입자 */}
      {Array.from({ length: 14 }).map((_, i) => {
        const size = 4 + (i % 4) * 3;
        return (
          <span
            key={"p" + i}
            className="cine-particle"
            style={{
              width: size,
              height: size,
              left: `${(i * 37) % 100}%`,
              bottom: `${(i * 23) % 80}%`,
              animationDuration: `${6 + (i % 5)}s`,
              animationDelay: `${(i % 7) * 0.6}s`,
            }}
          />
        );
      })}

      {/* 씬 0 — 로고 */}
      <div className={"scene" + (scene === 0 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-pop cine-core mx-auto mb-6 grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-[#2dd4a7] to-[#38bdf8] text-5xl shadow-2xl">
            ♻️
          </div>
          <h1 className="cine-rise d1 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Return<span className="cine-shine">Loop</span>
          </h1>
          <p className="cine-rise d2 mt-4 text-base text-sub sm:text-lg">버는 만큼 돌려주고, 돌려준 만큼 다시 큰다</p>
        </div>
      </div>

      {/* 씬 1 — 캐치프레이즈 */}
      <div className={"scene" + (scene === 1 ? " on" : "")}>
        <div className="cine-stage">
          <p className="cine-rise text-sm font-bold tracking-[0.3em] text-brand">RETURNLOOP 창업</p>
          <h2 className="cine-rise d1 mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
            창업 한 번으로<br />
            <span className="grad">많은 혜택</span>을 받아가세요
          </h2>
          <p className="cine-rise d2 mt-5 text-base text-sub sm:text-lg">소자본으로 시작하고, 매일 수익을 돌려받는 새로운 창업</p>
        </div>
      </div>

      {/* 씬 2 — 쇼핑몰 혜택 */}
      <div className={"scene" + (scene === 2 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-pop cine-core p1 mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-surface text-4xl shadow-xl">
            🛍️
          </div>
          <h2 className="cine-rise d1 text-4xl font-extrabold sm:text-6xl">
            <span className="grad">쇼핑몰 혜택</span>
          </h2>
          <p className="cine-rise d2 mt-4 text-lg text-sub sm:text-xl">쿠팡보다 싼 공동구매가로 매입하고</p>
          <p className="cine-rise d3 mt-1 text-lg text-sub sm:text-xl">분배금이 쇼핑포인트로 다시 쌓여요</p>
        </div>
      </div>

      {/* 씬 3 — 프랜차이즈 컨설팅 & 창업 혜택 */}
      <div className={"scene" + (scene === 3 ? " on" : "")}>
        <div className="cine-stage w-full max-w-3xl">
          <h2 className="cine-rise text-3xl font-extrabold sm:text-5xl">
            전문 <span className="grad">프랜차이즈 컨설턴트</span>가 함께
          </h2>
          <p className="cine-rise d1 mt-4 text-base text-sub sm:text-lg">10년 노하우로 다양한 프랜차이즈 창업을 설계해 드려요</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {["🤝 1:1 창업 컨설팅", "🏪 검증된 브랜드 연결", "📦 공급망·물류 지원", "💸 매일 운영 지원금"].map(
              (t, i) => (
                <span
                  key={t}
                  className={`cine-pop p${i + 1} rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold`}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* 씬 4 — 마케팅 & AI 교육 */}
      <div className={"scene" + (scene === 4 ? " on" : "")}>
        <div className="cine-stage w-full max-w-3xl">
          <p className="cine-rise text-sm font-bold tracking-[0.3em] text-brand">교육까지 무료 지원</p>
          <h2 className="cine-rise d1 mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="grad">온라인 마케팅</span> &amp; <span className="grad">최신 AI 교육</span>
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="cine-pop p1 rounded-2xl border border-line bg-surface p-6 text-left">
              <div className="text-3xl">📈</div>
              <h3 className="mt-3 text-lg font-bold">온라인 마케팅 교육</h3>
              <p className="mt-1 text-sm text-sub">SNS·검색·광고로 손님을 부르는 실전 노하우</p>
            </div>
            <div className="cine-pop p2 rounded-2xl border border-line bg-surface p-6 text-left">
              <div className="text-3xl">🤖</div>
              <h3 className="mt-3 text-lg font-bold">최신 AI 활용 교육</h3>
              <p className="mt-1 text-sm text-sub">AI로 상세페이지·콘텐츠·운영을 자동화하는 법</p>
            </div>
          </div>
        </div>
      </div>

      {/* 씬 5 — 피날레 */}
      <div className={"scene" + (scene === 5 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-pop cine-core mx-auto mb-7 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#2dd4a7] to-[#38bdf8] text-4xl shadow-2xl loop-rotate">
            ♻️
          </div>
          <h2 className="cine-rise d1 text-4xl font-extrabold leading-tight sm:text-6xl">
            지금, <span className="grad">리턴루프</span>와<br />함께 시작하세요
          </h2>
          <p className="cine-rise d2 mt-5 text-base text-sub sm:text-lg">모두가 이기는 상생 창업의 루프 속으로</p>
          <button
            className="cine-rise d3 mt-9 rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-8 py-4 text-sm font-bold text-[#04140f] transition hover:brightness-105"
            onClick={finish}
          >
            입장하기 →
          </button>
        </div>
      </div>

      {/* 진행 점 */}
      <div className="cine-dots">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <span key={i} className={"cine-dot" + (i === scene ? " on" : "")} />
        ))}
      </div>
    </div>
  );
}
