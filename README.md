# Sophia Williams - UI/UX Designer Portfolio

A modern, dark-themed portfolio website built with Tailwind CSS featuring a dashboard-style layout with sticky sidebar navigation.

## Features

- **Dark Theme**: Deep slate background (#0b0f19) with elevated cards (#131b2e)
- **Electric Cyan Accents**: #06b6d4 / #00f2fe for primary actions and highlights
- **Sticky Sidebar Navigation**: Profile card, navigation links, CTA buttons
- **Hero Section**: Bold headline, portrait card with floating badge, social proof ticker
- **Creative Toolkit**: Skills grid with progress bars + AI tools with circular progress rings
- **Bio & Stats**: 4-column animated counter metrics
- **Services Grid**: Numbered service cards with hover effects
- **Pricing Cards**: Two-tier pricing with "Most Popular" badge
- **Portfolio/Works**: Project showcase with case study links
- **Testimonials**: Client reviews with ratings
- **FAQs**: Accordion-style questions
- **Contact CTA**: Email and Calendly booking
- **Fully Responsive**: Mobile-first with hamburger menu
- **Smooth Animations**: IntersectionObserver-triggered counters, progress bars, scroll animations

## Quick Start

### Development (CDN - No Build Required)
Simply open `index.html` in a browser. Uses Tailwind CDN for instant preview.

### Production Build
```bash
npm install
npm run build
```
Outputs minified CSS to `dist/output.css`

### Local Development Server
```bash
npm run dev
```
Serves at http://localhost:3000

## Project Structure
```
main-portfolio/
├── index.html          # Main portfolio page (CDN version)
├── src/
│   ├── input.css       # Tailwind source with custom theme
│   └── main.js         # JS entry point
├── dist/
│   └── output.css      # Built CSS (after npm run build)
├── package.json
└── README.md
```

## Customization

### Colors
Edit `src/input.css` @theme section:
```css
@theme {
  --color-bg-deep: #0b0f19;
  --color-bg-card: #131b2e;
  --color-accent: #06b6d4;
  --color-accent-glow: #00f2fe;
  --color-text-primary: #ffffff;
  --color-text-secondary: #9ca3af;
}
```

### Content
Update the HTML in `index.html`:
- Profile info (name, role, avatar)
- Skills & percentages
- Services list
- Pricing tiers
- Portfolio projects
- Testimonials
- FAQ questions

### Fonts
Uses Inter (UI) + Space Grotesk (Display) from Google Fonts. Change in `<head>`.

## Deployment

### Netlify/Vercel
Drag and drop the folder or connect GitHub repo. Build command: `npm run build`, Publish directory: `.` (root)

### GitHub Pages
Enable Pages from main branch root folder.

## Browser Support
Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## License
MIT