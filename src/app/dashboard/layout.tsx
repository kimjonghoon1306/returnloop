import ConsoleShell, { type NavItem } from "@/components/ConsoleShell";

const NAV: NavItem[] = [
  { href: "/dashboard", label: "오늘의 루프", icon: "♻️" },
  { href: "/dashboard/earnings", label: "수익·분배", icon: "💸" },
  { href: "/dashboard/wallet", label: "포인트 지갑", icon: "🎁" },
  { href: "/dashboard/purchase", label: "공동구매 매입", icon: "🛒" },
  { href: "/dashboard/store", label: "내 매장", icon: "🏪" },
  { href: "/dashboard/education", label: "교육 센터", icon: "🎓" },
  { href: "/dashboard/consulting", label: "컨설팅", icon: "🤝" },
  { href: "/dashboard/notifications", label: "알림", icon: "🔔" },
  { href: "/dashboard/settings", label: "설정", icon: "⚙️" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConsoleShell role="founder" nav={NAV} user="베리팜 · 김창업님">
      {children}
    </ConsoleShell>
  );
}
