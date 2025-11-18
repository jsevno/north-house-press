# North House Press - Interim Website

Interim Next.js website for hosting project assets, documentation, and providing updates to David & Kirsty.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
npm start
```

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Git Integration
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

## 📁 Project Structure

```
interim/
├── app/
│   ├── page.tsx          # Home/Status dashboard
│   ├── assets/           # Asset gallery
│   ├── docs/             # Documentation hub
│   ├── updates/          # Progress updates
│   └── layout.tsx        # Root layout
├── components/
│   ├── Navigation.tsx   # Site navigation
│   └── Footer.tsx        # Site footer
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Features

- **Status Dashboard** - Project progress tracking
- **Asset Gallery** - Brand assets, book covers, photos
- **Documentation Hub** - Research, strategy, company info
- **Updates Log** - Progress updates for David & Kirsty
- **Responsive Design** - Mobile-friendly
- **Moss Green Theme** - Brand colors

## 🔧 Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide icons

## 📝 Notes

This is an interim site for project planning. The production WordPress e-commerce site will be built separately.
