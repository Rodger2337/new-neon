# ETYW - Empower to Thrive Youth and Women Network

A modern, production-ready NGO website built with React, Express, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + React Router 6 + TypeScript + Vite
- **Backend**: Express + Node.js
- **Styling**: Tailwind CSS 3 + Lucide Icons
- **Build**: Vite + TypeScript
- **Package Manager**: pnpm

## Project Structure

```
├── client/                 # React SPA frontend
│   ├── pages/             # Route pages (Index, About, Services, etc.)
│   ├── components/        # Reusable components (Layout, UI)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities (cn, etc.)
│   ├── main.tsx           # Entry point
│   └── global.css         # Tailwind + theme colors
├── server/                # Express backend
│   ├── index.ts           # Server setup & middleware
│   └── routes/            # API routes
├── shared/                # Shared types used by client & server
│   └── api.ts             # API response types
└── vite.config.ts         # Vite configuration
```

## Quick Start

### Prerequisites
- Node.js 18+ (check with `node --version`)
- pnpm (install with `npm install -g pnpm`)

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` if needed (optional for local development).

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Opens at `http://localhost:8080`

## Available Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server (client + server with hot reload) |
| `pnpm build` | Build for production (both client and server) |
| `pnpm start` | Start production server (requires `pnpm build` first) |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm format` | Auto-format code (Prettier) |

## Development Workflow

### Adding a New Page

1. Create `client/pages/MyPage.tsx`:
   ```tsx
   import { Layout } from "@/components/Layout";

   export default function MyPage() {
     return (
       <Layout>
         <section className="py-16 md:py-24 bg-white">
           {/* Your content */}
         </section>
       </Layout>
     );
   }
   ```

2. Add route in `client/main.tsx`:
   ```tsx
   <Route path="/my-page" element={<MyPage />} />
   ```

### Adding an API Endpoint

1. Create route handler in `server/routes/my-route.ts`:
   ```ts
   import { RequestHandler } from "express";

   export const handleMyRoute: RequestHandler = (req, res) => {
     res.json({ message: "Hello from API" });
   };
   ```

2. Register in `server/index.ts`:
   ```ts
   import { handleMyRoute } from "./routes/my-route";

   app.get("/api/my-route", handleMyRoute);
   ```

3. Call from React components:
   ```tsx
   const response = await fetch("/api/my-route");
   const data = await response.json();
   ```

## Building for Production

```bash
pnpm build
```

This creates:
- `dist/spa/` - Client SPA bundle
- `dist/server/` - Server bundle

Start the production server:
```bash
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo in [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy (automatic from `main` branch)

### Netlify

1. Push to GitHub
2. Connect repo in [Netlify Dashboard](https://app.netlify.com)
3. Set build command: `pnpm build`
4. Set publish directory: `dist/spa`

### Docker

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install
RUN pnpm build
EXPOSE 8080
CMD ["pnpm", "start"]
```

## Styling

- **Colors** defined in `client/global.css` as CSS variables (HSL format)
- **Theme** configured in `tailwind.config.ts`
- **Utilities** use `cn()` function from `client/lib/utils.ts`

Example:
```tsx
<button className={cn(
  "px-4 py-2 rounded-lg",
  { "bg-primary": isActive },
  className
)} />
```

## Environment Variables

See `.env.example` for available variables. For local development, create a `.env` file (never commit secrets).

## Debugging

### Development Logging

- Express logs all requests in development mode (see `server/index.ts`)
- React errors appear in browser console

### Production Logging

Enable request logging via `NODE_ENV=production` + check server logs.

### Build Issues

1. Check TypeScript errors: `pnpm typecheck`
2. Clear cache: `rm -rf dist node_modules && pnpm install`
3. Check Node version: `node --version` (should be 18+)

## Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **Formatting**: Run `pnpm format` before committing
- **Testing**: Add tests in `*.test.ts` files

## Performance Notes

- Images use Pexels CDN (lazy-loaded)
- CSS is tree-shaken by Tailwind
- Production build includes minification
- Server-side rendering not enabled (SPA only)

## License

MIT - See LICENSE file for details

## Support

For issues or questions:
1. Check the [AGENTS.md](./AGENTS.md) for architecture details
2. Review existing code patterns in similar files
3. Test locally before deploying

---

**Last Updated**: 2024
**Maintained by**: ETYW Team
