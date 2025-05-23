"use client";

import { ThreadPrimitive, MessagePrimitive, ComposerPrimitive } from "@/app/imports";

export function Thread() {
  return (
    <ThreadPrimitive.Root className="bg-background box-border flex h-full flex-col overflow-hidden">
      <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4 pt-8">
        <ThreadPrimitive.Empty>
          <div className="flex w-full max-w-[42rem] flex-grow flex-col">
            <div className="flex w-full flex-grow flex-col items-center justify-center">
              <p className="mt-4 font-medium">How can I help you today?</p>
            </div>
          </div>
        </ThreadPrimitive.Empty>
        
        <ThreadPrimitive.Messages
          components={{
            UserMessage: () => (
              <div className="w-full max-w-[42rem] py-4">
                <div className="bg-muted text-foreground max-w-[80%] break-words rounded-3xl px-5 py-2.5 ml-auto">
                  <ThreadPrimitive.If user>
                    <MessagePrimitive.Content />
                  </ThreadPrimitive.If>
                </div>
              </div>
            ),
            AssistantMessage: () => (
              <div className="w-full max-w-[42rem] py-4">
                <div className="text-foreground max-w-[80%] break-words leading-7">
                  <ThreadPrimitive.If assistant>
                    <MessagePrimitive.Content />
                  </ThreadPrimitive.If>
                </div>
              </div>
            ),
          }}
        />
        
        <div className="sticky bottom-0 mt-3 flex w-full max-w-[42rem] flex-col items-center justify-end rounded-t-lg bg-inherit pb-4">
          <ComposerPrimitive.Root className="focus-within:border-ring/20 flex w-full flex-wrap items-end rounded-lg border bg-inherit px-2.5 shadow-sm transition-colors ease-in">
            <ComposerPrimitive.Input
              rows={1}
              autoFocus
              placeholder="Write a message..."
              className="placeholder:text-muted-foreground max-h-40 flex-grow resize-none border-none bg-transparent px-2 py-4 text-sm outline-none focus:ring-0 disabled:cursor-not-allowed"
            />
            <ComposerPrimitive.Send className="my-2.5 size-8 p-2 transition-opacity ease-in" />
          </ComposerPrimitive.Root>
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
}