# FEM Frontend Mentor Monorepo

Monorepo for Frontend Mentor solutions across multiple frameworks, with shared assets and consistent engineering conventions.

## Scope

- Maintain challenge implementations for React and Vue in one repository.
- Reuse shared fonts, global styles, and challenge resources.
- Keep development, build, and preview workflows consistent across apps.

## Repository Layout

```text
.
|- apps/
|  |- react/
|  |  |- src/
|  |  |  |- layouts/
|  |  |  |- router/
|  |  |  |- solutions/
|  |- vue/
|     |- src/
|- packages/
|  |- fonts/
|  |- styles/
|  |- tailwindcss/
|  |- tsconfig/
|  |- ui/
|- resources/
|- scripts/
|- dist/ (generated)
```

## Technology

- Package manager: npm workspaces
- Build tool: Vite 8
- Frameworks: React 19, Vue 3
- Styling: Tailwind CSS v4 + shared CSS packages
- Tooling: TypeScript, commitlint, husky, tsx

## Prerequisites

- Node.js >= 20
- npm >= 10 (`packageManager` is pinned to `npm@11.12.1`)

Install dependencies:

```bash
npm install
```

## Development Commands

Start React app:

```bash
npm run react
```

Start Vue app:

```bash
npm run vue
```

Current React route implemented:

- `/newbie/qr-code-component`

## Build, Preview, and Maintenance

| Command                 | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| `npm run build`         | Build both React and Vue                  |
| `npm run build:react`   | Build React to `dist/react`               |
| `npm run build:vue`     | Build Vue to `dist/vue`                   |
| `npm run preview:react` | Preview React production output           |
| `npm run preview:vue`   | Preview Vue production output             |
| `npm run clean`         | Remove `dist`                             |
| `npm run clean:react`   | Remove `dist/react`                       |
| `npm run clean:vue`     | Remove `dist/vue`                         |
| `npm run lint`          | Run lint in workspaces that expose `lint` |

Note: `npm run clean` returns an error if `dist` does not exist.

## Path Aliases

Configured in both app workspaces:

- `@` -> `./src`
- `@resource` -> `../../resources`

Example:

```ts
import '@resource/newbie/qr-code-component/css/index.css';
import QrImage from '@resource/newbie/qr-code-component/images/image-qr-code.png';
```

## Shared Packages

`@package/fonts`

- Exposes CSS entries for Inter, Outfit, and Roboto.

`@package/styles`

- Imports Tailwind CSS v4.
- Imports shared fonts.
- Declares global font theme variables.

## Challenge Status

| Framework | Challenge                  | Status                                   |
| --------- | -------------------------- | ---------------------------------------- |
| React     | `newbie/qr-code-component` | Implemented and routed                   |
| Vue       | N/A                        | Base app ready for additional challenges |

## Contribution Workflow

### Add a new React challenge

1. Add challenge assets to `resources/<level>/<challenge-name>/`.
2. Create `apps/react/src/solutions/<level>/<challenge-name>/index.tsx`.
3. Import assets/styles through `@resource`.
4. Register the route in `apps/react/src/router/index.tsx`.
5. Add page metadata through `react-helmet-async` when applicable.

### Add a new Vue challenge

1. Add challenge assets to `resources/<level>/<challenge-name>/`.
2. Create a page/component in `apps/vue/src/solutions/...`.
3. Import shared styles from `@package/styles` and assets via `@resource`.
4. Mount in `App.vue` or add Vue Router integration as the app grows.

## Deploy Notes

- React output directory: `dist/react`
- Vue output directory: `dist/vue`
- Both apps include Netlify SPA redirect configuration in `netlify.toml`.

## Commit Standards

- Conventional commits enforced by `commitlint.config.ts`.
- Git hooks managed with husky (`prepare` script).

Examples:

```text
feat(react): add social-links-profile solution page
fix(vue): correct asset import alias in newbie challenge
chore(repo): refine workspace scripts
```

## Planned Improvements

- Expand challenge coverage for both frameworks.
- Introduce Vue routing module when multiple pages are in place.
- Align lint configuration across workspaces.
- Add a shared UI package if reuse warrants it.
