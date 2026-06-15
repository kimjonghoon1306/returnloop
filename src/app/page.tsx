import Link from "next/link";
import Logo from "@/components/Logo";
import Cinema from "@/components/Cinema";
import ThemeToggle from "@/components/ThemeToggle";
import Simulator from "@/components/Simulator";
import ReplayIntro from "@/components/ReplayIntro";

const LOOP = [
  { icon: "🛍️", title: "수익 발생", desc: "창업자가 물건을 팔면 회사에 실제 수익이 쌓여요." },
  { icon: "💸", title: "매일 분배", desc: "회사 이익의 일부를 매일 창업자에게 지원금으로 나눠요." },
  { icon: "🎁", title: "포인트 전환", desc: "분배금 일부는 쇼핑포인트로 — 더 싸게 매입할 수 있어요." },
  { icon: "🔄", title: "다시 순환", desc: "포인트가 쇼핑몰로 돌아와 또 매출이 되고, 또 분배돼요." },
];

const ROLES = [
  {
    tag: "창업자",
    emoji: "🧑‍🍳",
    title: "소자본으로 시작하고, 매일 지원받아요",
    points: ["쿠팡보다 싼 공동구매 매입가", "초기 정착까지 매일 운영·광고 지원금", "내 일일 수익·포인트 실시간 확인"],
  },
  {
    tag: "제조사",
    emoji: "🏭",
    title: "안정적인 판로를 확보해요",
    points: ["다수 창업자에게 대량 납품", "예측 가능한 정기 주문", "재고 부담 완화"],
  },
  {
    tag: "회사",
    emoji: "🏢",
    title: "분배가 비용이 아니라 매출이 돼요",
    points: ["포인트 환류로 이중 수익", "충성도 높은 창업자 네트워크", "공급망·플랫폼 운영 수익"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cinema />

      {/* 헤더 */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-sub lg:flex">
            <a href="#how" className="transition hover:text-text">순환 구조</a>
            <a href="#roles" className="transition hover:text-text">참여자</a>
            <a href="#edu" className="transition hover:text-text">교육 지원</a>
            <a href="#faq" className="transition hover:text-text">FAQ</a>
            <ReplayIntro className="transition hover:text-brand">🎬 대문 보기</ReplayIntro>
            <Link href="/login" className="transition hover:text-text">로그인</Link>
          </nav>
          <div className="flex items-center gap-3">
            <ReplayIntro className="hidden rounded-lg border border-line px-3 py-1.5 text-xs text-sub transition hover:border-brand/50 hover:text-text sm:block lg:hidden">
              🎬 대문
            </ReplayIntro>
            <ThemeToggle />
            <Link
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-4 py-2 text-sm font-bold text-[#04140f] transition hover:brightness-105"
            >
              시작하기
            </Link>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:pt-28">
        <div className="rise mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs text-sub">
          <span className="h-2 w-2 rounded-full bg-brand" /> 상생형 수익 분배 플랫폼
        </div>
        <h1 className="rise max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl">
          버는 만큼 <span className="grad">돌려주고</span>,<br />
          돌려준 만큼 <span className="grad">다시 큰다</span>
        </h1>
        <p className="rise mt-6 max-w-xl text-base leading-relaxed text-sub sm:text-lg">
          창업자와 회사가 함께 만든 수익을 매일 나누고,
          그 분배금이 쇼핑포인트로 다시 순환하는 구조. 모두가 이기는 루프.
        </p>
        <div className="rise mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-6 py-3.5 text-sm font-bold text-[#04140f] transition hover:brightness-105"
          >
            창업자로 시작하기
          </Link>
          <Link
            href="/admin"
            className="rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-sm font-semibold text-text transition hover:border-brand/50"
          >
            관리자 정산 보기
          </Link>
        </div>
        <ReplayIntro className="rise mt-4 text-sm text-sub transition hover:text-brand">
          🎬 대문 영상 다시 보기
        </ReplayIntro>

        {/* 순환 비주얼 */}
        <div className="rise relative mt-16 grid h-64 w-64 place-items-center sm:h-80 sm:w-80">
          <div className="loop-rotate absolute inset-0 rounded-full border-2 border-dashed border-brand/30" />
          <div className="absolute inset-6 rounded-full border border-brand-2/20" />
          <div className="grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-[#2dd4a7]/20 to-[#38bdf8]/10 text-center sm:h-40 sm:w-40">
            <div>
              <div className="text-3xl font-extrabold grad">∞</div>
              <div className="mt-1 text-xs text-sub">수익 순환</div>
            </div>
          </div>
          {["🛍️", "💸", "🎁", "🔄"].map((e, i) => (
            <span
              key={i}
              className="absolute grid h-12 w-12 place-items-center rounded-full border border-line bg-surface text-xl shadow-lg"
              style={{
                top: `${50 - 46 * Math.cos((i / 4) * 2 * Math.PI)}%`,
                left: `${50 + 46 * Math.sin((i / 4) * 2 * Math.PI)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {e}
            </span>
          ))}
        </div>
      </section>

      {/* 순환 구조 */}
      <section id="how" className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">수익이 도는 4단계 루프</h2>
          <p className="mt-3 text-sub">한 바퀴 돌 때마다 모두의 몫이 커집니다.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOOP.map((s, i) => (
            <div key={i} className="lift relative rounded-2xl border border-line bg-surface/60 p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">{s.icon}</div>
              <div className="text-xs font-bold text-brand">STEP {i + 1}</div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sub">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 수익 시뮬레이터 */}
      <section id="sim" className="mx-auto w-full max-w-4xl px-5 py-16">
        <Simulator />
      </section>

      {/* 참여자 */}
      <section id="roles" className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">모두가 이기는 구조</h2>
          <p className="mt-3 text-sub">누군가 떼가는 게 아니라, 같이 만들고 같이 나눕니다.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ROLES.map((r) => (
            <div key={r.tag} className="lift rounded-2xl border border-line bg-surface/60 p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-2xl">{r.emoji}</span>
                <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">{r.tag}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold leading-snug">{r.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-sub">
                    <span className="mt-0.5 text-brand">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 교육 지원 */}
      <section id="edu" className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="text-center">
          <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">무료 지원</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            창업만 하면 <span className="grad">교육까지 책임</span>집니다
          </h2>
          <p className="mt-3 text-sub">물건만 떼주는 게 아니라, 잘 팔리게 만드는 법까지 가르쳐 드려요.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="lift rounded-2xl border border-line bg-surface/60 p-7">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">📈</div>
            <h3 className="text-xl font-bold">온라인 마케팅 교육</h3>
            <p className="mt-2 text-sm leading-relaxed text-sub">
              SNS·검색·광고로 손님을 부르는 실전 마케팅을 처음부터 끝까지. 혼자 헤매지 않게 단계별로 가르쳐 드려요.
            </p>
          </div>
          <div className="lift rounded-2xl border border-line bg-surface/60 p-7">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-surface-2 text-2xl">🤖</div>
            <h3 className="text-xl font-bold">최신 AI 활용 교육</h3>
            <p className="mt-2 text-sm leading-relaxed text-sub">
              AI로 상세페이지·콘텐츠·고객응대·운영을 자동화하는 법. 남들보다 빠르게, 적은 인력으로 더 많이 파세요.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {["🤝 1:1 창업 컨설팅", "🏪 검증된 프랜차이즈 연결", "📦 공급망·물류 지원", "💸 매일 운영 지원금"].map((t) => (
            <span key={t} className="rounded-full border border-line bg-surface/60 px-5 py-2.5 text-sm font-semibold">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 후기 */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">먼저 시작한 창업자들</h2>
          <p className="mt-3 text-sub">소자본으로 시작해 매일 돌려받고 있어요.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { name: "김○○", biz: "신선마켓 사장", text: "창업비 부담이 적어 망설임 없이 시작했어요. 매일 분배금이 들어오니 초기 버티는 힘이 달라요.", emoji: "🍎" },
            { name: "이○○", biz: "반찬가게 운영", text: "쿠팡보다 싸게 떼와서 마진이 늘고, 포인트로 또 매입하니 진짜 선순환이에요.", emoji: "🥬" },
            { name: "박○○", biz: "수산직송", text: "마케팅·AI 교육까지 받으니 온라인 매출이 두 배가 됐어요. 컨설턴트 도움이 컸어요.", emoji: "🐟" },
          ].map((r) => (
            <div key={r.name} className="lift rounded-2xl border border-line bg-surface/60 p-7">
              <div className="flex gap-1 text-brand">{"★★★★★"}</div>
              <p className="mt-4 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-xl">{r.emoji}</span>
                <div>
                  <div className="text-sm font-bold">{r.name}</div>
                  <div className="text-xs text-sub">{r.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-3xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">자주 묻는 질문</h2>
        </div>
        <div className="mt-10 space-y-3">
          {[
            { q: "창업비는 얼마나 드나요?", a: "업종에 따라 다르지만, 기존 프랜차이즈보다 훨씬 낮은 소자본으로 시작할 수 있게 설계했어요. 창업비는 본인 사업의 판권·자산 비용입니다." },
            { q: "분배금은 어떻게 받나요?", a: "회사에 실제 이익이 발생하면, 그 일부(1~5%)를 매일 회사 재량으로 분배해요. 현금 또는 쇼핑포인트로 받을 수 있어요. 수익이 없는 날은 분배되지 않을 수 있어요." },
            { q: "쇼핑포인트는 어디에 쓰나요?", a: "공동구매 매입에 사용해 쿠팡보다 싸게 상품을 떼올 수 있어요. 충전 시 보너스도 드려요." },
            { q: "정말 매일 돈을 받을 수 있나요?", a: "확정 수익률·원금 보장은 아니에요. 실제 회사 이익이 있을 때 회사 재량으로 분배하는 구조라, 사업이 잘 될수록 함께 커집니다." },
            { q: "교육·컨설팅도 지원되나요?", a: "네. 온라인 마케팅·최신 AI 활용 교육과 1:1 프랜차이즈 컨설팅을 지원해 초기 정착을 돕습니다." },
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl border border-line bg-surface/60 p-5">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                {f.q}
                <span className="text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-sub">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-surface-2 p-10 text-center sm:p-16">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            지금 루프에 올라타세요
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sub">
            적은 자본으로 시작하고, 함께 키운 수익을 매일 돌려받는 가장 빠른 길.
          </p>
          <Link
            href="/dashboard"
            className="relative mt-8 inline-block rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] px-8 py-4 text-sm font-bold text-[#04140f] transition hover:brightness-105"
          >
            창업자로 시작하기 →
          </Link>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="mt-auto border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-sub sm:flex-row">
          <Logo size={22} />
          <p>© 2026 ReturnLoop. 함께 만들고 함께 나눕니다.</p>
        </div>
      </footer>
    </div>
  );
}
