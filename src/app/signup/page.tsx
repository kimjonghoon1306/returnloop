import Link from "next/link";
import AuthShell, { Field } from "@/components/AuthShell";

export default function Signup() {
  return (
    <AuthShell
      title="창업 신청 🌱"
      sub="소자본으로 시작하고, 매일 수익을 돌려받는 루프에 합류하세요."
      footer={
        <>
          이미 회원이신가요?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            로그인
          </Link>
        </>
      }
    >
      <Field icon="user" label="이름" placeholder="홍길동" />
      <Field icon="phone" label="연락처" type="tel" placeholder="010-1234-5678" />
      <Field icon="mail" label="이메일 (아이디)" type="email" placeholder="me@example.com" />
      <Field icon="store" label="희망 업종" placeholder="예: 신선식품, 반찬, 카페…" />
      <Field icon="lock" label="비밀번호" type="password" placeholder="8자 이상" />
      <label className="flex items-start gap-2 text-xs text-sub">
        <input type="checkbox" className="mt-0.5 accent-[#2dd4a7]" />
        <span>
          창업 안내·분배 정책에 동의합니다. 분배금은 회사 이익 발생 시 회사 재량으로 지급되며 확정 수익률·원금
          보장이 아님을 이해했습니다.
        </span>
      </label>
      <Link
        href="/dashboard"
        className="block rounded-xl bg-gradient-to-r from-[#2dd4a7] to-[#38bdf8] py-3 text-center text-sm font-bold text-[#04140f] transition hover:brightness-105"
      >
        창업 신청하기
      </Link>
    </AuthShell>
  );
}
