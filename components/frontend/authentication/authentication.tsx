"use client";

import { FormEvent, useState } from "react";

type Mode = "login" | "register";

export function Authentication() {
  const [mode, setMode] = useState<Mode>("login");
  const isLogin = mode === "login";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div
      id="signin"
      className="flex w-full flex-1 items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {isLogin ? "Login" : "Create account"}
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          {isLogin
            ? "Welcome back. Enter your details to continue."
            : "Fill in your details to register."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {!isLogin && (
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                Full name
              </span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
              />
            </label>
          )}

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-zinc-700">
              Email
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-zinc-700">
              Password
            </span>
            <input
              name="password"
              type="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
            />
          </label>

          {!isLogin && (
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                Confirm password
              </span>
              <input
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-900"
              />
            </label>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            {isLogin ? "Login" : "Sign up"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-zinc-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setMode(isLogin ? "register" : "login")}
            className="font-medium text-zinc-900 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
