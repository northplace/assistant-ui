"use client";

import { Thread } from "apps/registry/components/assistant-ui/thread";
import { ThreadList } from "apps/registry/components/assistant-ui/thread-list";

export default function Home() {
  return (
    <main className="h-dvh">
      <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
        <ThreadList />
        <Thread />
      </div>
    </main>
  );
}