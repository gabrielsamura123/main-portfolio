# Gabriel Samura - Full-Stack Developer Portfolio

A modern, black liquid-glass portfolio website built with Tailwind CSS featuring a dashboard-style layout with a floating glass sidebar and AOS scroll animations.

## Features

- **Black Liquid Glass**: Pure black backdrop with frosted translucent panels and cyan/violet accents
- **Local Tailwind Build**: Compiled `tailwind.css` (no CDN dependency)
- **AOS Scroll Animations**: Section reveals powered by AOS
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

### Development
Simply open `index.html` in a browser. It loads the committed `tailwind.css` build.

### Rebuild CSS
```bash
npm install
npm run build
```
Outputs minified CSS to `tailwind.css`

### Local Development Server
```bash
npm run dev
```
Serves at http://localhost:3000

## Project Structure
```
main-portfolio/
├── index.html          # Main portfolio page
├── tailwind.css        # Compiled Tailwind + custom glass styles
├── aos.css / aos.js    # Scroll animation library
├── src/
│   ├── input.css       # Tailwind source with custom theme
│   └── main.js         # JS entry point
├── package.json
└── README.md
```

## Customization

### Colors
Edit `src/input.css` @theme section:
```css
@theme {
  --color-bg-deep: #000000;
  --color-bg-card: #0b0d12;
  --color-accent: #38e8ff;
  --color-accent-glow: #a78bfa;
  --color-text-primary: #ffffff;
  --color-text-secondary: #c3cad8;
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