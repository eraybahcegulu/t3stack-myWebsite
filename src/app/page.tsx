import { unstable_noStore as noStore } from "next/cache";

import { api } from "app/trpc/server";
import Navigation from "./_components/Navigation";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-start gap-12 p-4 ">
        <div className="navigation w-full flex justify-end">
          <Navigation />
        </div>
        <div>
          <span> ERAY BAHÇEGÜLÜ </span>
        </div>
      </div>
    </main>
  );
}
