"use client";

import { useEffect, useState } from "react";
import { ICON } from "./CineIcons";
import ThemeToggle from "./ThemeToggle";

// 6컷 시네마틱 인트로 — 대기업급 모던 모션그래픽
const DURATIONS = [3200, 3400, 3600, 3600, 3800, 4600];
const TOTAL = 6;

// 궤도 도는 라인 아이콘
const ORBIT = [
  { k: "shop", radius: 250, dur: 22, start: 0 },
  { k: "cash", radius: 250, dur: 22, start: 120 },
  { k: "gift", radius: 250, dur: 22, start: 240 },
  { k: "handshake", radius: 360, dur: 34, start: 60 },
  { k: "store", radius: 360, dur: 34, start: 200 },
  { k: "ai", radius: 360, dur: 34, start: 320 },
];

export default function Cinema() {
  const [scene, setScene] = useState(0);
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("rl_intro") === "1") {
      setGone(true);
      return;
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) finish();
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
      {/* 배경 레이어 */}
      <div className="cine-grid" />
      <div className="cine-bg" />
      <div className="cine-sweep" />

      {/* 상단 바: 진행 + 테마 + 스킵 */}
      <div className="cine-progress" style={{ width: `${progress}%` }} />
      <div className="cine-top">
        <div className="cine-brandmini">
          <span className="cine-brandmark">{ICON.loop}</span>
          <span>ReturnLoop</span>
        </div>
        <div className="cine-top-right">
          <ThemeToggle />
          <button className="cine-skip" onClick={finish}>건너뛰기</button>
        </div>
      </div>

      {/* 회전 궤도 + 라인 아이콘 */}
      <div className="cine-orbit r1" style={{ width: 500, height: 500 }} />
      <div className="cine-orbit r2" style={{ width: 720, height: 720 }} />
      <div className="cine-orbit r3" style={{ width: 940, height: 940 }} />
      {ORBIT.map((f, i) => (
        <div key={i} className="cine-fly" style={{ animationDuration: `${f.dur}s`, transform: `rotate(${f.start}deg)` }}>
          <span
            className="cine-chip"
            style={{ left: f.radius, marginLeft: -26, marginTop: -26, animationDuration: `${f.dur}s` }}
          >
            {ICON[f.k]}
          </span>
        </div>
      ))}

      {/* 빛 입자 */}
      {Array.from({ length: 16 }).map((_, i) => {
        const size = 3 + (i % 4) * 2;
        return (
          <span
            key={"p" + i}
            className="cine-particle"
            style={{
              width: size,
              height: size,
              left: `${(i * 37) % 100}%`,
              bottom: `${(i * 19) % 80}%`,
              animationDuration: `${7 + (i % 5)}s`,
              animationDelay: `${(i % 7) * 0.7}s`,
            }}
          />
        );
      })}

      {/* 씬 0 — 로고 */}
      <div className={"scene" + (scene === 0 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-logo cine-core">{ICON.loop}</div>
          <h1 className="cine-rise d1 cine-h1">
            Return<span className="cine-shine">Loop</span>
          </h1>
          <p className="cine-rise d2 cine-tag">버는 만큼 돌려주고, 돌려준 만큼 다시 큰다</p>
        </div>
      </div>

      {/* 씬 1 — 캐치프레이즈 */}
      <div className={"scene" + (scene === 1 ? " on" : "")}>
        <div className="cine-stage">
          <p className="cine-rise cine-eyebrow">RETURNLOOP 창업</p>
          <h2 className="cine-rise d1 cine-h2">
            창업 한 번으로<br />
            <span className="cine-shine">많은 혜택</span>을 받아가세요
          </h2>
          <p className="cine-rise d2 cine-sub">소자본으로 시작하고, 매일 수익을 돌려받는 새로운 창업</p>
        </div>
      </div>

      {/* 씬 2 — 쇼핑몰 혜택 */}
      <div className={"scene" + (scene === 2 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-pop cine-core cine-bigicon">{ICON.shop}</div>
          <h2 className="cine-rise d1 cine-h2"><span className="cine-shine">쇼핑몰 혜택</span></h2>
          <p className="cine-rise d2 cine-sub">쿠팡보다 싼 공동구매가로 매입하고</p>
          <p className="cine-rise d3 cine-sub">분배금이 쇼핑포인트로 다시 쌓여요</p>
        </div>
      </div>

      {/* 씬 3 — 프랜차이즈 컨설팅 */}
      <div className={"scene" + (scene === 3 ? " on" : "")}>
        <div className="cine-stage cine-wide">
          <h2 className="cine-rise cine-h2">전문 <span className="cine-shine">프랜차이즈 컨설턴트</span>가 함께</h2>
          <p className="cine-rise d1 cine-sub">10년 노하우로 다양한 프랜차이즈 창업을 설계해 드려요</p>
          <div className="cine-chips">
            {[
              { k: "handshake", t: "1:1 창업 컨설팅" },
              { k: "store", t: "검증된 브랜드 연결" },
              { k: "shop", t: "공급망·물류 지원" },
              { k: "cash", t: "매일 운영 지원금" },
            ].map((c, i) => (
              <span key={c.t} className={`cine-pop p${i + 1} cine-pill`}>
                <span className="cine-pill-ic">{ICON[c.k]}</span>
                {c.t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 씬 4 — 마케팅 & AI 교육 */}
      <div className={"scene" + (scene === 4 ? " on" : "")}>
        <div className="cine-stage cine-wide">
          <p className="cine-rise cine-eyebrow">교육까지 무료 지원</p>
          <h2 className="cine-rise d1 cine-h2"><span className="cine-shine">온라인 마케팅</span> &amp; <span className="cine-shine">최신 AI 교육</span></h2>
          <div className="cine-cards">
            <div className="cine-pop p1 cine-card">
              <span className="cine-card-ic">{ICON.chart}</span>
              <h3>온라인 마케팅 교육</h3>
              <p>SNS·검색·광고로 손님을 부르는 실전 노하우</p>
            </div>
            <div className="cine-pop p2 cine-card">
              <span className="cine-card-ic">{ICON.ai}</span>
              <h3>최신 AI 활용 교육</h3>
              <p>AI로 상세페이지·콘텐츠·운영을 자동화하는 법</p>
            </div>
          </div>
        </div>
      </div>

      {/* 씬 5 — 피날레 */}
      <div className={"scene" + (scene === 5 ? " on" : "")}>
        <div className="cine-stage">
          <div className="cine-logo cine-core loop-rotate">{ICON.loop}</div>
          <h2 className="cine-rise d1 cine-h2">지금, <span className="cine-shine">리턴루프</span>와<br />함께 시작하세요</h2>
          <p className="cine-rise d2 cine-sub">모두가 이기는 상생 창업의 루프 속으로</p>
          <button className="cine-rise d3 cine-enter" onClick={finish}>입장하기 →</button>
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
