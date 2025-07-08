# nextjs-monorepo-with-shadcnui-template

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](git@github.com:codewithmikee/nextjs-monorepo-with-shadcnui-template.git)

A modern monorepo template for building Next.js applications with [shadcn/ui](https://ui.shadcn.com/) and a shared UI package, powered by pnpm workspaces and TurboRepo.

---

## Features

- **Monorepo** structure with [pnpm workspaces](https://pnpm.io/workspaces)
- [TurboRepo](https://turbo.build/) for fast builds and task running
- [Next.js](https://nextjs.org/) app in `apps/web`
- Shared UI components in `packages/ui` using [shadcn/ui](https://ui.shadcn.com/)
- Shared ESLint and TypeScript config packages
- Pre-configured Tailwind CSS
- Strict linting and formatting

---

## Repository

- **GitHub:** [git@github.com:codewithmikee/nextjs-monorepo-with-shadcnui-template.git](git@github.com:codewithmikee/nextjs-monorepo-with-shadcnui-template.git)

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone git@github.com:codewithmikee/nextjs-monorepo-with-shadcnui-template.git
   cd nextjs-monorepo-with-shadcnui-template
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

   This starts the Next.js app at `apps/web`.

---

## Monorepo Structure

```
.
├── apps/
│   └── web/                # Next.js app
├── packages/
│   ├── ui/                 # Shared shadcn/ui components
│   ├── eslint-config/      # Shared ESLint config
│   └── typescript-config/  # Shared TypeScript config
├── package.json            # Monorepo root config
├── pnpm-workspace.yaml     # pnpm workspace config
├── turbo.json              # TurboRepo config
└── ...
```

---

## Usage

### Adding shadcn/ui Components

To add a new UI component to your app and share it via the `ui` package:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

This will place the component in `packages/ui/src/components`.

### Using Shared Components

Import shared components in your Next.js app like this:

```tsx
import { Button } from "@workspace/ui/components/button"
```

---

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build all packages/apps
- `pnpm lint` — Lint all packages/apps
- `pnpm format` — Format codebase
- `pnpm clean` — Clean build output

---

## Tailwind CSS

Tailwind is pre-configured. Global styles are in `packages/ui/src/styles/globals.css`.

---

## License

This project is provided as a template. See individual package licenses for details.
