# Deployment Instructions

## Netlify Deployment

### Method 1: Netlify CLI (Recommended)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize site (first time only):
```bash
netlify init
```

4. Deploy:
```bash
netlify deploy --prod
```

### Method 2: Git Integration

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - North House Press interim site"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click "Deploy site"

3. **Configure Environment (if needed):**
   - Site settings → Environment variables
   - Add any required variables

### Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 (configured in netlify.toml)

## Post-Deployment

1. **Update DNS** (if using custom domain):
   - Add custom domain in Netlify
   - Update DNS records as instructed

2. **Test the site:**
   - Visit the Netlify URL
   - Check all pages load correctly
   - Test responsive design

3. **Share with David:**
   - Send the Netlify URL
   - Explain the purpose
   - Request feedback

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Verify all dependencies installed
- Check build logs in Netlify dashboard

### Pages Not Loading
- Verify `.next` is publish directory
- Check routing configuration
- Review Next.js build output

### Styling Issues
- Verify Tailwind CSS is configured
- Check `globals.css` imports
- Review component class names

