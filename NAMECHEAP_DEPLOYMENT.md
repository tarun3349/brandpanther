# Brand Panther - Namecheap Deployment Guide

## Quick Fix for Blank Page Issue

If your site shows a blank page after deploying to Namecheap, follow these steps:

## Step 1: Build the Project

```bash
npm install
npm run build
```

This creates a `dist/` folder with all production files.

## Step 2: Deploy to Namecheap

### Option A: Using Namecheap File Manager (Recommended for beginners)

1. **Login to Namecheap cPanel**
   - Go to https://www.namecheap.com/
   - Click "Sign In"
   - Go to your hosting account

2. **Open File Manager**
   - Find and click "File Manager"
   - Navigate to `public_html` folder

3. **Upload Files**
   - Delete all existing files in `public_html`
   - Upload all files from the `dist/` folder to `public_html`
   - **IMPORTANT**: Make sure `.htaccess` file is uploaded (it's a hidden file)

4. **Enable Showing Hidden Files** (if .htaccess doesn't appear)
   - In File Manager, look for Settings
   - Enable "Show Hidden Files"
   - Then upload `.htaccess` from your project root

5. **Verify Upload**
   - Refresh your browser
   - Go to your domain: https://brandpanther.org

### Option B: Using FTP (Recommended for frequent updates)

1. **Get FTP Credentials**
   - In cPanel, find "FTP Accounts"
   - Create or use existing FTP account
   - Note the host, username, password

2. **Use FTP Client** (e.g., FileZilla)
   - Download FileZilla: https://filezilla-project.org/
   - Connect using FTP credentials
   - Navigate to `public_html` on the server

3. **Upload Files**
   - Delete all files from `public_html`
   - Drag all files from `dist/` folder to `public_html`
   - Enable "Show Hidden Files" setting in FileZilla (Edit → Settings → File lists)
   - Upload `.htaccess` from project root

4. **Verify**
   - Wait 1-2 minutes for changes to take effect
   - Visit https://brandpanther.org

### Option C: Using GitHub Actions (For automated deployments)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Namecheap

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
          dangerous-clean-slate: true
```

Add these secrets in GitHub (Settings → Secrets and Variables):
- `FTP_SERVER`: Your FTP host
- `FTP_USERNAME`: Your FTP username  
- `FTP_PASSWORD`: Your FTP password

## Step 3: Troubleshooting

### Still Showing Blank Page?

1. **Check if `.htaccess` is in public_html**
   - Use File Manager → Enable "Show Hidden Files"
   - Verify `.htaccess` exists in `public_html`

2. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Go to Console tab
   - Look for any red errors
   - Share errors with debugging support

3. **Clear Browser Cache**
   - Press Ctrl+Shift+Delete
   - Clear cache and cookies
   - Visit site again

4. **Check File Permissions**
   - Files should be readable (644 permissions)
   - Directories should be executable (755 permissions)
   - In File Manager: right-click file → Change Permissions

5. **Verify index.html Exists**
   - In File Manager, open `public_html`
   - Look for `index.html` file
   - If missing, re-upload all files from `dist/`

### Getting 404 Errors on Routes?

- This means `.htaccess` isn't working
- Verify `.htaccess` is in `public_html`
- Check if RewriteModule is enabled (contact Namecheap support to enable)

### Assets Not Loading (404 errors for CSS/JS)?

- Check that asset files are in `public_html/assets/` folder
- File paths should be absolute from root: `/assets/...`
- If using subdomain, may need to adjust base in `vite.config.ts`

## Production Checklist

- ✅ Run `npm run build` locally
- ✅ Upload all `dist/` files to `public_html`
- ✅ Upload `.htaccess` to `public_html`
- ✅ Enable "Show Hidden Files" if .htaccess not visible
- ✅ Wait 1-2 minutes for changes to propagate
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Test main page: https://brandpanther.org
- ✅ Test admin page: https://brandpanther.org/admin
- ✅ Test non-existent page: https://brandpanther.org/test-404
- ✅ Check console for errors (F12)

## Support

If issues persist:
1. Contact Namecheap support - mention "Apache RewriteEngine" needs to be enabled
2. Verify all files in `public_html` are readable
3. Check that index.html has correct content (not empty)

## Quick Redeploy Command

After making changes locally:

```bash
npm run build
# Then upload dist/ files again to public_html via FTP or File Manager
```

## For Developers: Environment Variables

If you need different behavior for production:

Create `.env.production`:
```
VITE_API_URL=https://your-api.com
```

Build for production:
```bash
npm run build
```
