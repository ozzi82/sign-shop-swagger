# TinaCMS Setup Instructions

TinaCMS has been added to your project for visual editing capabilities. Follow these steps to complete the setup:

## 1. Initialize TinaCMS
Run the following command to initialize TinaCMS:
```bash
npx tinacms init
```

## 2. Build TinaCMS
Generate the required client and type definitions:
```bash
npx tinacms build
```

## 3. Start Development with TinaCMS
To enable visual editing in development:
```bash
npx tinacms dev
```

## 4. Access the Visual Editor
- Visit your site in development mode
- You'll see a TinaCMS sidebar for editing content
- Edit the hero section content directly on the page

## Configuration
- TinaCMS config: `tina/config.ts`
- Content files: `content/hero/index.json`
- The Hero component will automatically use TinaCMS when available, or fallback to Supabase

## Features Enabled
- Visual editing of hero section content
- Image upload and management
- Real-time preview of changes
- Automatic fallback to Supabase if TinaCMS isn't available

Note: TinaCMS is set to only run in development mode for security.