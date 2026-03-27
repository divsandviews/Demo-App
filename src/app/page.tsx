import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="text-center space-y-6">
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          Hello Everyone, Welcome to my Demo
        </h1>
        <Link
          href="/profile"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          View My Profile
        </Link>
      </main>
    </div>
  );
}
