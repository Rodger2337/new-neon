# Deployment Guide

Complete checklist and instructions for deploying ETYW NGO website to production.

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `pnpm typecheck` - no TypeScript errors
- [ ] Run `pnpm format` - code is formatted
- [ ] Run `pnpm test` - all tests pass
- [ ] No console.error or console.warn in production code
- [ ] No commented-out code blocks
- [ ] No `console.log()` debugging statements

### Security
- [ ] No hardcoded secrets or API keys in source
- [ ] `.env` file not committed (verify `.gitignore`)
- [ ] All environment variables documented in `.env.example`
- [ ] HTTPS enabled on production domain
- [ ] CORS configured appropriately (`cors()` middleware in server)

### Configuration
- [ ] `.env.example` updated with all required vars
- [ ] `NODE_ENV=production` set in deployment platform
- [ ] Database/external service credentials in env vars only
- [ ] Build command is `pnpm build`
- [ ] Start command is `pnpm start`

### Performance
- [ ] Images lazy-loaded where appropriate
- [ ] No unused packages in `package.json`
- [ ] Production build optimized (`minify: false` removed if needed)
- [ ] Bundle size acceptable (check with `pnpm build`)

### Testing
- [ ] Tested locally: `pnpm dev` works
- [ ] Tested locally: `pnpm build && pnpm start` works
- [ ] Pages load without errors
- [ ] API endpoints respond correctly
- [ ] Forms work and submit data
- [ ] Images display properly

## Deployment Platforms

### Vercel (Recommended)

**Setup:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import GitHub repository
5. Framework preset: `Other`
6. Build command: `pnpm build`
7. Output directory: `dist/spa`
8. Install command: `pnpm install`
9. Add environment variables in Settings → Environment Variables

**Environment Variables to Set:**
```
NODE_ENV=production
PING_MESSAGE=pong  # Optional
```

**Deploy:**
- Push to `main` branch → Auto-deploys
- Or click "Deploy" button in Vercel dashboard

**Verify:**
- Check deployment URL works
- All pages load
- Images display
- API routes respond

---

### Netlify

**Setup:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select repository
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`
   - Runtime: Node.js 18+
6. Deploy settings → Environment:
   - `NODE_ENV=production`
   - Any other required variables

**Notes:**
- Netlify only handles static files for SPA
- For API routes, use Netlify Functions separately
- Or better: use Vercel which handles full-stack

**Verify:**
- Check live URL works
- All pages load correctly
- Check Netlify build logs for errors

---

### Self-Hosted (VPS / Own Server)

**Requirements:**
- Linux VPS (Ubuntu 22.04+ recommended)
- Node.js 18+ installed
- pnpm or npm installed
- PM2 for process management (optional but recommended)

**Setup Steps:**

1. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd etyw-ngo
   ```

2. **Install dependencies**
   ```bash
   pnpm install --prod
   ```

3. **Set environment variables**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your settings
   ```

4. **Build application**
   ```bash
   pnpm build
   ```

5. **Start with PM2** (persistent across reboots)
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name etyw-ngo
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx reverse proxy**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     location / {
       proxy_pass http://localhost:8080;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Setup HTTPS with Let's Encrypt**
   ```bash
   certbot --nginx -d yourdomain.com
   ```

**Monitoring:**
```bash
pm2 logs
pm2 status
pm2 restart etyw-ngo
```

---

### Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy files
COPY . .

# Install dependencies
RUN pnpm install --prod

# Build
RUN pnpm build

# Expose port
EXPOSE 8080

# Start
CMD ["pnpm", "start"]
```

**Build and run:**
```bash
docker build -t etyw-ngo .
docker run -p 8080:8080 -e NODE_ENV=production etyw-ngo
```

---

## Post-Deployment

### Immediate (within 1 hour)

- [ ] Test live URL in browser
- [ ] Check all pages load
- [ ] Test forms and interactions
- [ ] Verify API endpoints work
- [ ] Check images display correctly
- [ ] Monitor error logs

### Daily (first week)

- [ ] Monitor application logs
- [ ] Check performance metrics
- [ ] Test on mobile devices
- [ ] Verify email notifications (if any)
- [ ] Check uptime monitoring

### Weekly (ongoing)

- [ ] Review error logs
- [ ] Check performance metrics
- [ ] Update dependencies: `pnpm update --latest`
- [ ] Backup database (if applicable)
- [ ] Monitor disk space / resource usage

---

## Troubleshooting

### Build Fails Locally

```bash
# Clear everything and rebuild
rm -rf node_modules dist pnpm-lock.yaml
pnpm install
pnpm build
```

### Type Errors Before Deploy

```bash
pnpm typecheck
# Fix errors, then retry
```

### Server Won't Start

```bash
# Check Node version
node --version  # Should be 18+

# Check environment variables
cat .env

# Run with verbose logging
NODE_DEBUG=* pnpm start
```

### Pages Show 404

- Verify React Router paths match file names
- Check `.env.example` for missing vars
- Ensure build completed: `ls dist/spa/index.html`

### Images Don't Load

- Check image URLs in code
- Verify Pexels URLs are not blocked
- Check browser console for CORS errors

### Port Already in Use

```bash
# Find process using port 8080
lsof -i :8080

# Kill if needed
kill -9 <PID>
```

---

## Rollback Procedure

### Vercel
- Go to Deployments tab
- Click on previous deployment
- Click "Redeploy"

### Netlify
- Go to Deploys tab
- Click "Restore" on previous deploy

### Self-Hosted (with Git)
```bash
git log --oneline      # Find commit
git revert <commit>    # Create new commit that reverts
git push
pnpm build && pnpm start
```

---

## Monitoring & Maintenance

### Health Checks

Add monitoring for:
- API endpoint: `GET /api/health`
- Response time: < 1 second
- Uptime: > 99.9%

Use services:
- Vercel Analytics (built-in)
- Netlify Analytics (built-in)
- UptimeRobot (free, external)
- DataDog / New Relic (advanced)

### Log Aggregation

For self-hosted:
```bash
pm2 logs > /var/log/etyw-ngo.log
# Or use pm2-logrotate
pm2 install pm2-logrotate
```

### Dependency Updates

Monthly:
```bash
pnpm update --interactive
pnpm test
git commit -m "chore: update dependencies"
git push
```

---

## Security Hardening

1. **HTTPS Only**
   - Redirect HTTP → HTTPS
   - Set HSTS header

2. **Rate Limiting**
   - Add `express-rate-limit` for API routes
   - Prevent abuse

3. **CORS**
   - Restrict origins if needed
   - Current: all origins allowed (fine for public NGO site)

4. **Content Security Policy**
   - Add CSP headers
   - Prevent XSS attacks

5. **Regular Updates**
   - Keep Node.js updated
   - Update packages monthly
   - Monitor security advisories

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Express Docs: https://expressjs.com
- React Router Docs: https://reactrouter.com
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com

For ETYW-specific issues, check:
- README.md - Quick start
- AGENTS.md - Architecture & development
- GitHub Issues (if using GitHub)

---

**Last Updated**: 2024
**Maintained by**: ETYW Team
