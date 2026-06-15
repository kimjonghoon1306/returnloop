"use client";

// 대문(시네마틱 인트로) 다시보기 — 세션 기록을 지우고 새로고침해 인트로를 재생
export default function ReplayIntro({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  function replay() {
    try {
      sessionStorage.removeItem("rl_intro");
    } catch {}
    location.assign("/");
  }
  return (
    <button onClick={replay} className={className}>
      {children}
    </button>
  );
}
