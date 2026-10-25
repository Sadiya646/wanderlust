# Wanderlust

Travel landing-page site on Next.js 16.4.3 (App Router). Current code is still the create-next-app starter (`src/app/page.tsx`); design assets for the real page live in `public/images/`.

## Commands

- npm is the package manager (package-lock.json). Scripts: `npm run dev` / `build` / `lint`.
- No test suite and no typecheck script. For typechecking run `npx tsc --noEmit`; `npm run build` is the strongest check (it also type-checks).
- `tsconfig.json` includes generated route types from `.next/types/` and `.next/dev/types/` — run dev or build before `tsc` if those were cleaned.

## Toolchain quirks

- `next.config.ts` enables `cacheComponents`, `partialPrefetching`, and `reactCompiler`. Consequences (see `node_modules/next/dist/docs/`, note block below):
  - Data fetching is dynamic by default; opt into caching with `use cache` and keep dynamic reads (params, searchParams, cookies, fetch) inside `<Suspense>` (PPR/static-shell model).
  - React Compiler handles memoization — do not add manual `useMemo`/`useCallback`.
  - Navigation preserves component state via React `<Activity>` (previous routes stay mounted hidden); effects are cleaned up on hide and recreated on show.
- Tailwind v4, CSS-first: all theme tokens/config live in `src/app/globals.css`; there is no `tailwind.config` (CSS is wired through the `turbopack.rules` entry in `next.config.ts`).
- shadcn uses style `base-nova` (components.json): primitives in `src/components/ui/` are built on **Base UI (`@base-ui/react`), not Radix** — import paths and props differ from the Radix-based shadcn components in common training data. Check an existing primitive before adding new ones. Icons: lucide.
- Path alias: `@/*` → `src/*`. Font: Josefin Sans via `next/font`, exposed as `--font-josefin-sans` in `src/app/layout.tsx`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
