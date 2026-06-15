"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export type NavItem = { href: string; label: string; icon: string };

export default function ConsoleShell({
  role,
  nav,
  user,
  children,
}: {
  role: "founder" | "admin";
  nav: NavItem[];
  user: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isAdmin = role === "admin";

  const Side = (
    <>
      <Link href="/" className="px-2 py-1">
        <Logo size={26} />
      </Link>

      <div
        className={
          "mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold " +
          (isAdmin ? "bg-brand-2/15 text-brand-2" : "bg-brand/15 text-brand")
        }
      >
        {isAdmin ? "🏢 본사 관리자" : "🧑‍🍳 창업자"}
      </div>

      <Link
        href={isAdmin ? "/dashboard" : "/admin"}
        className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm font-semibold transition hover:border-brand/50"
      >
        <span>{isAdmin ? "🧑‍🍳" : "🏢"}</span> {isAdmin ? "창업자 화면" : "본사 화면"}
      </Link>

      <nav className="mt-5 flex flex-col gap-1">
        <span className="px-2 pb-1 text-[10px] font-bold tracking-widest text-sub">메뉴</span>
        {nav.map((n) => {
          const active = n.href === path || (n.href !== "/dashboard" && n.href !== "/admin" && path.startsWith(n.href));
          return (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={
                "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition " +
                (active
                  ? "bg-brand/12 text-brand"
                  : "text-sub hover:bg-black/5 hover:text-text dark:hover:bg-white/5")
              }
            >
              <span>{n.icon}</span> {n.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2 pt-5">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-sub transition hover:bg-black/5 dark:hover:bg-white/5"
        >
          <span>←</span> 홈으로
        </Link>
        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="truncate text-xs text-sub">{user}</div>
          <button className="mt-2 w-full rounded-lg border border-line py-1.5 text-xs text-sub transition hover:border-rose-400 hover:text-rose-500">
            로그아웃
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen">
      {/* 데스크탑 사이드바 */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-surface/70 p-4 backdrop-blur-xl lg:flex">
        {Side}
      </aside>

      {/* 모바일 상단바 */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-bg/80 px-4 py-3 backdrop-blur lg:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="메뉴"
          className="grid h-9 w-9 place-items-center rounded-lg border border-line"
        >
          ☰
        </button>
        <Logo size={22} />
        <ThemeToggle />
      </header>

      {/* 모바일 드로어 */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col bg-surface p-4">{Side}</aside>
        </div>
      )}

      {/* 데스크탑 우상단 테마토글 */}
      <div className="fixed right-5 top-4 z-20 hidden lg:block">
        <ThemeToggle />
      </div>

      {/* 콘텐츠 */}
      <main className="px-4 py-6 sm:px-6 lg:ml-64 lg:px-10 lg:py-10">{children}</main>
    </div>
  );
}
