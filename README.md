# Gabriel Samura - Full-Stack Developer Portfolio

An immersive black liquid-glass portfolio built with Tailwind CSS. The site uses a floating glass navbar, custom cursor, ambient particles, 3D tilt cards, scroll-driven reveals, and a responsive mobile experience.

## Features

- **Black Liquid Glass**: Pure black backdrop with frosted translucent panels, cyan/violet accents, and soft ambient gradients
- **Local Tailwind Build**: Compiled `tailwind.css` with no CDN dependency
- **Floating Glass Navbar**: Sliding active pill, shrink-on-scroll behavior, magnetic hover, and full-screen mobile menu
- **Cinematic Hero**: Typewriter intro, gradient clip-reveal name, animated portrait ring, floating glass chips, particles, and scroll cue
- **Custom Interactions**: 12px cursor dot with trailing ring, button ripples, card spotlight, and magnetic social links
- **Animated Toolkit**: Progress bars and circular skill rings triggered by IntersectionObserver
- **Bio & Stats**: Animated counters for projects, experience, clients, and retention
- **Services & Pricing**: 3D tilt service cards plus fixed-scope, retainer, and advisory engagement models
- **Project Showcase**: Five project cards with alternating layouts and a swipeable mobile carousel
- **Contact Section**: Ambient blobs, orbit lines, reduced-motion support, and direct email/LinkedIn actions
- **Fully Responsive**: Tuned layouts from 390px through 1920px with zero horizontal overflow
- **Accessible Motion**: Complete `prefers-reduced-motion` fallback for all animations

## Quick Start

### Development
Open `index.html` in a browser. It loads the committed `tailwind.css` build.

### Rebuild CSS
```bash
npm install
npm run build
```

Outputs minified CSS to `tailwind.css`.

### Local Development Server
```bash
npm run dev
```

Serves at http://localhost:3000.

### Watch CSS
```bash
npm run watch:css
```

## Project Structure

```
main-portfolio/
├── index.html          # Main portfolio page (markup + interaction JS)
├── tailwind.css        # Compiled Tailwind + custom styles
├── src/
│   └── input.css       # Tailwind source, design tokens, components, responsive rules
├── Gibson_11.JPG       # Hero portrait
├── aos.css / aos.js    # Used only by the legacy standalone pages
├── package.json
└── README.md
```

## Customization

### Design Tokens
Edit the `:root` variables in `src/input.css`:

```css
:root {
  --bg: #000000;
  --accent: #00d4ff;
  --accent-2: #8b5cf6;
  --text: rgba(255, 255, 255, 0.6);
  --glass: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

### Content
Update the sections in `index.html`:
- Hero intro and tech stack
- About bio and stats
- Toolkit skills and percentages
- Services and engagement models
- Project cards, descriptions, and tags
- Contact and social links

### Fonts
Uses Inter (UI) and Space Grotesk (display) from Google Fonts. Change the `<link>` tags in `<head>`.

## Deployment

### Netlify / Vercel
Connect the repository or drag and drop the folder. Build command: `npm run build`. Publish directory: `.` (root).

### GitHub Pages
Enable Pages from the main branch root folder.

## Browser Support
Modern browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.

## License
MIT
