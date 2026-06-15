import ConsoleShell, { type NavItem } from "@/components/ConsoleShell";

const NAV: NavItem[] = [
  { href: "/admin", label: "정산 대시보드", icon: "📊" },
  { href: "/admin/members", label: "창업자 관리", icon: "🧑‍🍳" },
  { href: "/admin/revenue", label: "회사 수익", icon: "💰" },
  { href: "/admin/distribute", label: "분배 실행", icon: "💸" },
  { href: "/admin/products", label: "상품·공동구매", icon: "📦" },
  { href: "/admin/suppliers", label: "제조사 관리", icon: "🏭" },
  { href: "/admin/education", label: "교육 콘텐츠", icon: "🎓" },
  { href: "/admin/notifications", label: "알림", icon: "🔔" },
  { href: "/admin/settings", label: "설정", icon: "⚙️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConsoleShell role="admin" nav={NAV} user="리턴루프 본사 · 관리자">
      {children}
    </ConsoleShell>
  );
}
