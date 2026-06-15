import { Badge } from "./ui";

export type Noti = {
  icon: string;
  type: string;
  title: string;
  body: string;
  time: string;
  unread?: boolean;
};

export default function NotiList({ items }: { items: Noti[] }) {
  return (
    <div className="space-y-2">
      {items.map((n, i) => (
        <div
          key={i}
          className={
            "flex items-start gap-3 rounded-2xl border p-4 transition " +
            (n.unread ? "border-brand/40 bg-brand/[0.06]" : "border-line bg-surface/60")
          }
        >
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-2 text-lg">
            {n.icon}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate text-sm font-semibold">{n.title}</span>
              {n.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />}
              <span className="ml-auto shrink-0 text-xs text-sub">{n.time}</span>
            </div>
            <p className="mt-0.5 text-sm text-sub">{n.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
