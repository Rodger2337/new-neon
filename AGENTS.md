# Fusion Starter - ETYW NGO Edition

A production-ready full-stack React application template with integrated Express server, featuring React Router 6 SPA mode, TypeScript, Vite, and modern tooling.

## Tech Stack

- **PNPM**: Prefer pnpm
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Lucide React icons + TailwindCSS 3

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home, About.tsx, etc.)
├── components/
│   ├── Layout.tsx        # Shared header, footer, nav
│   └── ui/               # Radix UI + Shadcn components
├── hooks/                # Custom React hooks (use-toast.ts)
├── lib/                  # Utilities (cn, etc.)
├── App.tsx               # App component with routing
├── main.tsx              # Entry point + createRoot
└── global.css            # TailwindCSS 3 theming

server/                   # Express API backend
├── index.ts              # Server setup, middleware, routes
└── routes/               # API handlers

shared/                   # Types shared between client & server
└── api.ts                # API response interfaces

vite.config.ts            # Vite client build config
vite.config.server.ts     # Vite server build config
```

## Key Features

### SPA Routing System

React Router 6 with file-based route organization:

- `client/pages/Index.tsx` → `/`
- `client/pages/About.tsx` → `/about`
- `client/pages/Services.tsx` → `/services`
- `client/pages/GetHelp.tsx` → `/get-help`
- `client/pages/Contact.tsx` → `/contact`
- `client/pages/Donate.tsx` → `/donate`

Routes defined in `client/main.tsx`:

```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    {/* ... */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme**: CSS variables in HSL format (defined in `client/global.css`)
- **UI Components**: Pre-built Radix UI + Shadcn components in `client/components/ui/`
- **Utility**: `cn()` function in `client/lib/utils.ts` (combines clsx + tailwind-merge)

Example:
```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className
)}
```

### Express Server Integration

Development:
- Single port (8080) for both frontend and backend
- Hot reload for client and server
- API endpoints prefixed with `/api/`
- Integrated with Vite via `expressPlugin()` in vite.config.ts

Production:
- Built server runs standalone
- Client SPA served from `/dist/spa/`
- Express handles API + static file serving

#### Example API Routes

- `GET /api/health` - Health check
- `GET /api/ping` - Ping with optional custom message
- `GET /api/demo` - Demo endpoint

### Shared Types

For type-safe API communication:

```typescript
// shared/api.ts
export interface DemoResponse {
  message: string;
}

// server/routes/demo.ts
import { DemoResponse } from "@shared/api";
export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = { message: "..." };
  res.json(response);
};

// client/components/SomeComponent.tsx
import { DemoResponse } from "@shared/api";
const response = await fetch("/api/demo");
const data: DemoResponse = await response.json();
```

Path aliases:
- `@/*` → `client/`
- `@shared/*` → `shared/`

## Development Commands

```bash
pnpm dev           # Start dev server (client + server)
pnpm build         # Production build
pnpm start         # Start production server
pnpm typecheck     # TypeScript validation
pnpm test          # Run Vitest tests
pnpm format        # Auto-format code (Prettier)
```

## Adding Features

### New Page Route

1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/main.tsx`:
   ```typescript
   import MyPage from "./pages/MyPage";
   <Route path="/my-page" element={<MyPage />} />
   ```

### New API Route

1. **Optional**: Create shared interface in `shared/api.ts`:
   ```typescript
   export interface MyRouteResponse {
     data: string;
   }
   ```

2. Create route handler in `server/routes/my-route.ts`:
   ```typescript
   import { RequestHandler } from "express";
   import { MyRouteResponse } from "@shared/api";

   export const handleMyRoute: RequestHandler = (req, res) => {
     const response: MyRouteResponse = { data: "..." };
     res.json(response);
   };
   ```

3. Register in `server/index.ts`:
   ```typescript
   import { handleMyRoute } from "./routes/my-route";
   app.get("/api/my-route", handleMyRoute);
   ```

4. Use in React with type safety:
   ```typescript
   import { MyRouteResponse } from "@shared/api";
   const response = await fetch("/api/my-route");
   const data: MyRouteResponse = await response.json();
   ```

## Production Deployment

### Build Process

```bash
pnpm build
```

Creates:
- `dist/spa/` - Client bundle
- `dist/server/` - Server bundle with source maps

### Deployment Options

1. **Vercel** (Recommended for SPA)
   - Connect GitHub repo
   - Auto-deploys from main branch
   - Handles production builds automatically

2. **Netlify**
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`

3. **Self-Hosted**
   - Run `pnpm build && pnpm start`
   - Server listens on PORT (default 8080)
   - Use PM2 or systemd for process management

## Architecture Notes

- Single-port dev server for convenience (real-time reload)
- TypeScript throughout for type safety
- Hot reload for both client and server code changes
- Strict TypeScript settings in production
- Environment variables via `.env` (with `.env.example` template)
- No hard-coded secrets; use env vars
- Minimal logging in production for performance
- Clear error handling without silent failures

## Customization Tips

### Change Theme Colors

Edit `client/global.css` and `tailwind.config.ts`:
- CSS variables in HSL format: `--primary: 181 45% 35%;`
- Tailwind uses them: `primary: "hsl(var(--primary))"`

### Add Database

For future data persistence:
1. Choose DB (PostgreSQL recommended)
2. Add connection in `server/index.ts`
3. Create data routes
4. Optionally add ORM (Prisma, TypeORM)

### Add Authentication

For future user features:
1. Add auth route in Express (signup, login, logout)
2. Use sessions or JWT tokens
3. Protect routes with middleware
4. Store user context in React state or query cache

## Guidelines for Developers

When modifying this codebase:

1. **Keep it simple**: Prefer explicit over clever
2. **Type everything**: Use TypeScript strict mode
3. **No commented code**: Delete or document intent
4. **Clear names**: Function and variable names should be obvious
5. **Error handling**: Never silent failures; log and respond clearly
6. **Testing**: Add tests for new routes and complex logic
7. **Logging**: Minimal in production; helpful in development
8. **Comments**: Explain "why", not "what" (code is the "what")

## Debugging

### Dev Server Issues

```bash
# Clear Vite cache
rm -rf dist node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Type Checking Errors

```bash
pnpm typecheck
```

### Build Failures

```bash
# Check Node version
node --version  # Should be 18+

# Check for import errors
pnpm typecheck

# Rebuild from scratch
rm -rf dist
pnpm build
```

## Performance Considerations

- Images: Use responsive images from CDN (Pexels)
- CSS: Tree-shaken by Tailwind (only used styles included)
- Bundle: Code split by route (React Router lazy loading possible)
- Server: Stateless Express app (scales horizontally)

## Security Notes

- No secrets in `.env.example` (template only)
- `.env` file is `.gitignored`
- CORS enabled for cross-origin requests
- Content-Type and other headers set by Express
- Always validate user input on server
- Use HTTPS in production

---

See [README.md](./README.md) for setup and deployment instructions.
