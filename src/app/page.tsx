"use client";

import { useState, useRef } from "react";

interface TodoItem {
  id: number;
  text: string;
  status: "open" | "closed";
}

export default function Home() {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState("");
  const nextId = useRef(1);

  function addItem() {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    setItems((prev) => [
      ...prev,
      { id: nextId.current++, text: trimmed, status: "open" },
    ]);
    setInputText("");
  }

  function toggleItem(id: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "open" ? "closed" : "open" }
          : item
      )
    );
  }

  const openItems = items.filter((item) => item.status === "open");
  const closedItems = items.filter((item) => item.status === "closed");

  return (
    <div className="flex min-h-screen justify-center bg-white dark:bg-black px-4 py-12">
      <main className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center">
          To-Do List
        </h1>

        {/* Item entry form */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItem();
            }}
            placeholder="Add a new to-do item…"
            className="flex-1 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addItem}
            className="rounded bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-colors"
          >
            Add
          </button>
        </div>

        {/* Open items */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Open ({openItems.length})
          </h2>
          {openItems.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">
              No open items — add one above!
            </p>
          ) : (
            <ul className="space-y-2">
              {openItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2"
                >
                  <span className="flex-1 text-sm text-black dark:text-white">
                    {item.text}
                  </span>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="rounded bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs font-medium transition-colors"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Closed / completed items */}
        {closedItems.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
              Completed ({closedItems.length})
            </h2>
            <ul className="space-y-2">
              {closedItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 px-3 py-2"
                >
                  <span className="flex-1 text-sm text-gray-400 dark:text-gray-500 line-through">
                    {item.text}
                  </span>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="rounded bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 text-xs font-medium transition-colors"
                  >
                    Reopen
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
