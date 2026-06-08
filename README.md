# Brand Panther - Digital Marketing Agency Website

A modern, high-performance digital marketing website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, responsive design with Tailwind CSS
- ⚡ Lightning-fast performance with Vite
- 🎬 Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 Interactive components with Radix UI
- ⚙️ **Admin Panel** - Easily update website content without code

## Quick Start

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Admin Panel

Manage website content easily through the admin dashboard:

- **Access**: Navigate to `/admin` (e.g., `http://localhost:5173/admin`)
- **Update logos, headlines, and content** without touching code
- **Real-time updates** - changes appear instantly on the website
- **Local persistence** - settings are saved in browser storage

For detailed admin panel documentation, see [ADMIN_PANEL.md](./ADMIN_PANEL.md)

## Project Structure

```
src/
├── components/          # React components
│   ├── brand/          # Brand-specific components (Hero, About, etc.)
│   ├── ui/             # Reusable UI components
│   └── seo/            # SEO components
├── context/            # React Context (AdminContext for settings)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   ├── Admin.tsx       # Admin panel
│   └── NotFound.tsx    # 404 page
└── assets/             # Static assets
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI
- **Animations**: Framer Motion
- **Routing**: React Router
- **State Management**: React Context + TanStack Query

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Customization

### Updating Website Content

Use the **Admin Panel** at `/admin` to update:
- Company logo (mark and wordmark)
- Hero section (headline, subheading, CTA button)
- About section (headline, description)
- Company name (used throughout the site)

### Color Scheme

Colors are defined in `src/index.css`. The theme uses:
- **Primary**: Violet/Purple
- **Accent**: Cyan/Blue
- **Dark background** with light text

To change colors, update the CSS variables in `src/index.css`

### Adding New Sections

1. Create a new component in `src/components/brand/`
2. Import it in `src/pages/Index.tsx`
3. Add it to the layout

## Performance

- ✅ Optimized images with proper sizing
- ✅ Code splitting with Vite
- ✅ Lazy loading for components
- ✅ CSS optimization with Tailwind purge
- ✅ Animations use GPU acceleration

## SEO

The site includes:
- Meta tags for social media sharing (Open Graph, Twitter Card)
- Schema.org structured data
- Dynamic SEO component in `DocumentMeta.tsx`
- Proper heading hierarchy
- Alt text for images

## Future Enhancements

- Backend database integration for admin settings
- Multi-language support
- Analytics integration
- Blog/Content management system
- E-commerce capabilities

## Deployment (Namecheap / Apache)

1. Run the production build:

```bash
npm run build
```

2. Upload the contents of `dist/` to your Namecheap site root (usually `public_html`).

3. Make sure the hidden `.htaccess` file is also uploaded to the same folder.

4. For SPA routing, the following rewrite rule is required:

```apache
Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^ index.html [L]
```

5. If your app is hosted in a subfolder, set `RewriteBase /your-folder/` after `RewriteEngine On`.

This ensures client-side routes like `/admin` and deep links do not return a 404.

## Support

For issues or questions, please check the documentation or contact the development team.
