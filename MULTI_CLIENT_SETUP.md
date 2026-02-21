# Multi-Client Landing Pages Setup

This application supports custom landing pages for multiple clients, each accessible via different subdomains.

## Clients

- **Client A**: `clienta.yourdomain.com` - Blue theme
- **Client B**: `clientb.yourdomain.com` - Green theme  
- **Client C**: `clientc.yourdomain.com` - Purple theme

## Features

Each client has:
- ✅ Unique logo
- ✅ Custom color theme (primary, secondary, accent colors)
- ✅ Custom contact form with different fields
- ✅ Branded landing page

## Local Development Testing

To test subdomains locally, you have a few options:

### Option 1: Modify hosts file (Recommended)

1. Edit your hosts file:
   - **Windows**: `C:\Windows\System32\drivers\etc\hosts`
   - **Mac/Linux**: `/etc/hosts`

2. Add these lines:
   ```
   127.0.0.1 clienta.localhost
   127.0.0.1 clientb.localhost
   127.0.0.1 clientc.localhost
   ```

3. Access the sites:
   - http://clienta.localhost:3000
   - http://clientb.localhost:3000
   - http://clientc.localhost:3000

### Option 2: Use query parameter (Fallback)

If subdomain detection doesn't work, you can use query parameters:
- http://localhost:3000?subdomain=clienta
- http://localhost:3000?subdomain=clientb
- http://localhost:3000?subdomain=clientc

### Option 3: Use localhost subdomain (Next.js default)

Next.js middleware should detect subdomains in the format:
- `clienta.localhost:3000`
- `clientb.localhost:3000`
- `clientc.localhost:3000`

## Production Deployment

For production, configure your DNS to point subdomains to your server:
- `clienta.yourdomain.com` → Your server
- `clientb.yourdomain.com` → Your server
- `clientc.yourdomain.com` → Your server

The middleware will automatically detect the subdomain and serve the appropriate client's landing page.

## Customization

To customize a client's configuration, edit `lib/clients.ts`:

- **Colors**: Modify `primaryColor`, `secondaryColor`, `accentColor`, `backgroundColor`, `textColor`
- **Logo**: Replace the SVG file in `public/logos/` (keep the same filename)
- **Contact Form**: Modify the `contactForm` object with different fields, labels, and messages

## File Structure

```
├── app/
│   ├── page.tsx          # Main page that detects client
│   └── layout.tsx        # Root layout
├── components/
│   ├── LandingPage.tsx   # Main landing page component
│   ├── ClientLogo.tsx    # Logo component
│   └── ContactForm.tsx   # Contact form component
├── lib/
│   └── clients.ts        # Client configurations
├── middleware.ts         # Subdomain detection
└── public/
    └── logos/            # Client logos
        ├── clientA-logo.svg
        ├── clientB-logo.svg
        └── clientC-logo.svg
```
