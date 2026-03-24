"use client";

import { useRef, useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  status: "open" | "closed";
}

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const nextId = useRef(1);

  const addTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: nextId.current++, text: trimmed, status: "open" },
    ]);
    setInputValue("");
  };

  const toggleStatus = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === "open" ? "closed" : "open" }
          : todo
      )
    );
  };

  const openItems = todos.filter((t) => t.status === "open");
  const closedItems = todos.filter((t) => t.status === "closed");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="w-full max-w-md px-4">
        <h1 className="mb-6 text-center text-3xl font-semibold text-black dark:text-white">
          To-Do App
        </h1>

        {/* Entry Form */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a new to-do item..."
            className="flex-1 rounded border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={addTodo}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>

        {/* Open Items */}
        {openItems.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-2 text-lg font-medium text-black dark:text-white">
              Open ({openItems.length})
            </h2>
            <ul className="space-y-2">
              {openItems.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 rounded border border-gray-200 px-3 py-2 dark:border-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => toggleStatus(todo.id)}
                    className="h-4 w-4 cursor-pointer accent-blue-500"
                  />
                  <span className="flex-1 text-black dark:text-white">
                    {todo.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Completed Items */}
        {closedItems.length > 0 && (
          <section>
            <h2 className="mb-2 text-lg font-medium text-gray-500 dark:text-gray-400">
              Completed ({closedItems.length})
            </h2>
            <ul className="space-y-2">
              {closedItems.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 rounded border border-gray-200 px-3 py-2 dark:border-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => toggleStatus(todo.id)}
                    className="h-4 w-4 cursor-pointer accent-blue-500"
                  />
                  <span className="flex-1 text-gray-400 line-through dark:text-gray-500">
                    {todo.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {todos.length === 0 && (
          <p className="text-center text-gray-400 dark:text-gray-500">
            No to-do items yet. Add one above!
          </p>
        )}
      </main>
    </div>
  );
}
