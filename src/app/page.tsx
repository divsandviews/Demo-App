"use client";

import { useStore } from "@/store";

export default function Home() {
  const { appName, welcomeMessage } = useStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="text-center">
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          {welcomeMessage}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {appName}
        </p>
      </main>
    </div>
  );
}
