This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## State Management with Zustand

This project uses [Zustand](https://zustand-demo.pmnd.rs/) as its global state management solution.

### Store Structure

```
src/
└── store/
    ├── index.ts       # Creates and exports the unified Zustand store
    └── appSlice.ts    # App-level state slice (appName, welcomeMessage)
```

### How It Works

The store is created in `src/store/index.ts` by composing individual slices. Each slice is defined in its own file under `src/store/` and follows the [`StateCreator`](https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md) pattern for modularity.

**Reading state in a component:**

```tsx
"use client";

import { useStore } from "@/store";

export default function MyComponent() {
  const { welcomeMessage, appName } = useStore();
  return <h1>{welcomeMessage}</h1>;
}
```

**Updating state:**

```tsx
const { setWelcomeMessage } = useStore();
setWelcomeMessage("New message");
```

### Adding a New Slice

1. Create `src/store/mySlice.ts` and export a `StateCreator`:

   ```ts
   import { StateCreator } from "zustand";

   export interface MySlice {
     count: number;
     increment: () => void;
   }

   export const createMySlice: StateCreator<MySlice> = (set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
   });
   ```

2. Add the slice to `src/store/index.ts`:

   ```ts
   import { MySlice, createMySlice } from "./mySlice";

   export type StoreState = AppSlice & MySlice;

   export const useStore = create<StoreState>()((...args) => ({
     ...createAppSlice(...args),
     ...createMySlice(...args),
   }));
   ```

## Running Tests

```bash
npm test
```

Tests are located in `src/__tests__/` and cover both the Zustand store logic and component integration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
