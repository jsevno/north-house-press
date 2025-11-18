# Netlify Setup Instructions

## ✅ Code Pushed to GitHub

Repository: https://github.com/jsevno/north-house-press

---

## 🌐 Netlify Deployment

### Step 1: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign in (or create account)
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub
6. Select repository: **`jsevno/north-house-press`**

### Step 2: Configure Build Settings

Netlify should auto-detect Next.js, but verify:

- **Base directory:** `website/interim` (or leave blank if deploying root)
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 (or latest)

**Note:** If deploying from root, you may need to:
- Set base directory to `website/interim`
- Or move netlify.toml to root and adjust paths

### Step 3: Deploy

1. Click **"Deploy site"**
2. Wait for build to complete (2-3 minutes)
3. Get your live URL: `https://random-name-123.netlify.app`

### Step 4: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

---

## 🔧 Alternative: Netlify CLI

If you prefer command line:

```bash
cd website/interim
npm install -g netlify-cli
netlify login
netlify init
# Follow prompts:
# - Create & configure new site
# - Team: (select your team)
# - Site name: north-house-press (or custom)
# - Build command: npm run build
# - Directory: .next
netlify deploy --prod
```

---

## 📋 Build Configuration

The site is configured with `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages work (Home, Assets, Docs, Updates)
- [ ] Navigation works
- [ ] Responsive design tested
- [ ] Share URL with David & Kirsty
- [ ] Request feedback

---

## 🔗 Quick Links

- **GitHub Repo:** https://github.com/jsevno/north-house-press
- **Netlify Dashboard:** https://app.netlify.com
- **Site URL:** (will be provided after deployment)

---

## 🆘 Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify `package.json` has all dependencies
- Check build logs in Netlify dashboard

### Pages Not Loading
- Verify publish directory is `.next`
- Check Next.js routing
- Review build output logs

### Base Directory Issue
If deploying from repo root:
- Set base directory to `website/interim` in Netlify settings
- Or move all files to root (not recommended)

---

**Ready to deploy!** Follow Step 1-3 above to get live on Netlify.

