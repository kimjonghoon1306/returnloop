import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function AuthShell({
  title,
  sub,
  children,
  footer,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-10">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>
      <Link href="/" className="absolute left-5 top-5 text-sm text-sub transition hover:text-text">
        ← 홈으로
      </Link>

      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo size={30} />
        </div>
        <div className="rounded-3xl border border-line bg-surface/70 p-8 backdrop-blur-xl">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {sub && <p className="mt-1.5 text-sm text-sub">{sub}</p>}
          <div className="mt-7 space-y-4">{children}</div>
        </div>
        {footer && <div className="mt-6 text-center text-sm text-sub">{footer}</div>}
      </div>
    </div>
  );
}

const ICONS: Record<string, string> = {
  mail: "✉️",
  lock: "🔒",
  user: "🧑",
  phone: "📱",
  store: "🏪",
};

export function Field({
  icon,
  label,
  type = "text",
  placeholder,
}: {
  icon: keyof typeof ICONS;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-sub">{label}</span>
      <span className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5 focus-within:border-brand">
        <span className="text-sm opacity-70">{ICONS[icon]}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none placeholder:text-sub/60"
        />
      </span>
    </label>
  );
}
