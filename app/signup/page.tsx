import Link from 'next/link';
import type { Metadata } from 'next';
import { SignupForm } from './signup-form';

export const metadata: Metadata = { title: 'Sign Up' };

export default function SignupPage() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-4 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="w-full max-w-md rounded-2xl border bg-card shadow-lg p-8 sm:p-10">
        <h1 className="font-display text-3xl font-bold text-brand-700 mb-2">Join the mission</h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Create your Clean Marines account.
        </p>
        <SignupForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-brand-700 font-medium hover:underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
