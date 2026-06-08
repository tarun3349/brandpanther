# Admin Panel Documentation

## Accessing the Admin Panel

You can access the admin panel by navigating to your website's `/admin` route:

- **Local Development**: `http://localhost:5173/admin`
- **Production**: `https://your-domain.com/admin`

## Features

The admin panel allows you to manage the following website content in real-time:

### Logo Settings
- **Logo Mark URL**: The icon/symbol version of your logo
- **Logo Wordmark URL**: The text/wordmark version of your logo

### Company Information
- **Company Name**: Your company's official name (used throughout the site)

### Hero Section
- **Hero Headline**: Main headline displayed prominently on the landing page (use `\n` for line breaks)
- **Hero Subheading**: Supporting text below the headline
- **CTA Button Text**: Text on the main call-to-action button

### About Section
- **About Headline**: Main headline for the about section
- **About Description**: Supporting description text for the about section

## How It Works

1. **Local Storage**: All settings are saved to your browser's local storage
2. **Real-time Updates**: Changes are applied immediately to the website
3. **Persistence**: Settings persist across browser sessions
4. **Reset Option**: You can reset all settings to their default values at any time

## Making Changes

1. Navigate to `/admin`
2. Update any fields you want to change
3. Click "Save Changes"
4. Your changes will be reflected on the website immediately
5. To reset: Click "Reset to Defaults"

## Default Values

The following are the default values used:

```
- Logo Mark URL: /logo-mark.png
- Logo Wordmark URL: /logo-wordmark.png
- Company Name: Brand Panther
- Hero Headline: Digital\nMarketing\nAgency.
- Hero Subheading: From first click to final sale — we craft brands that hunt growth.
- CTA Button Text: Let's Grow Together
- About Headline: We bring your vision to life.
- About Description: From conceptualization to implementation, Brand Panther partners with ambitious businesses to engineer growth that compounds — strategy, story, systems.
```

## Important Notes

⚠️ **Local Storage Only**: Currently, settings are stored in browser local storage. This means:
- Settings are device-specific
- Settings are not shared across different devices/browsers
- Clearing browser data will reset settings

**Future Enhancement**: To save settings globally, consider integrating with a backend database.

## Required Fields

All fields are required and must be valid:
- Logo URLs must be absolute or relative to your public folder
- Company name must be 1-100 characters
- All text fields have character limits
- URLs must be valid format

## Troubleshooting

**Changes not showing?**
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try in an incognito/private window
- Check browser console for errors

**Settings reset?**
- Clearing browser data/cookies will reset settings
- Use browser settings to prevent cache clearing
