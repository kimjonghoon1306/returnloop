import Link from "next/link";
import AuthShell, { Field } from "@/components/AuthShell";

export default function Login() {
  return (
    <AuthShell
      title="로그인"
      sub="리턴루프 창업자·본사 콘솔에 입장하세요."
      footer={
        <>
          아직 회원이 아니신가요?{" "}
          <Link href="/signup" className="font-semibold text-brand hover:underline">
            창업 신청하기
          </Link>
        </>
      }
    >
      <Field icon="mail" label="이메일" type="email" placeholder="founder@returnloop.kr" />
      <Field icon="lock" label="비밀번호" type="password" placeholder="••••••••" />
      <div className="flex items-center justify-between text-xs text-sub">
        <label className="flex items-center gap-1.5">
          <input type="checkbox" className="accent-[#2dd4a7]" /> 자동 로그인
        </label>
        <Link href="#" className="hover:text-text">비밀번호 찾기</Link>
      </div>
      <Link
        href="/dashboard"
        className="block rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3 text-center text-sm font-bold text-[#04140f] transition hover:brightness-105"
      >
        로그인
      </Link>
      <Link
        href="/admin"
        className="block rounded-xl border border-line py-3 text-center text-sm font-semibold transition hover:border-brand/50"
      >
        🏢 본사 관리자로 로그인
      </Link>
    </AuthShell>
  );
}
