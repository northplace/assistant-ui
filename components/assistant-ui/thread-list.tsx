"use client";

import { ThreadListPrimitive, ThreadListItemPrimitive } from "@/app/imports";

export function ThreadList() {
  return (
    <ThreadListPrimitive.Root className="flex flex-col items-stretch gap-1.5">
      <ThreadListPrimitive.New className="flex items-center justify-start gap-1 rounded-lg px-2.5 py-2 text-start hover:bg-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        New Thread
      </ThreadListPrimitive.New>
      <ThreadListPrimitive.Items
        components={{
          ThreadListItem: () => (
            <ThreadListItemPrimitive.Root className="flex items-center gap-2 rounded-lg transition-all hover:bg-muted focus-visible:bg-muted focus-visible:outline-none focus-visible:ring-2">
              <ThreadListItemPrimitive.Trigger className="flex-grow px-3 py-2 text-start">
                <p className="text-sm">
                  <ThreadListItemPrimitive.Title fallback="New Chat" />
                </p>
              </ThreadListItemPrimitive.Trigger>
            </ThreadListItemPrimitive.Root>
          ),
        }}
      />
    </ThreadListPrimitive.Root>
  );
}