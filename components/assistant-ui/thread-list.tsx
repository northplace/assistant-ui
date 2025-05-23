"use client";

import React from 'react';

export function ThreadList() {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Conversations</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Thread list items will go here */}
      </div>
    </div>
  );
}