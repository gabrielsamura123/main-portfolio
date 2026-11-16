# Gabriel Samura - Full-Stack Developer Portfolio

An immersive black liquid-glass portfolio built with Tailwind CSS. The site uses a floating glass navbar, custom cursor, ambient particles, 3D tilt cards, scroll-driven reveals, and a responsive mobile experience.

## Features

- **Black Liquid Glass**: Pure black backdrop with frosted translucent panels, cyan/violet accents, and soft ambient gradients
- **Local Tailwind Build**: Compiled `tailwind.css` with no CDN dependency
- **Floating Glass Navbar**: Sliding active pill, shrink-on-scroll behavior, magnetic hover, and full-screen mobile menu
- **Cinematic Hero**: Typewriter intro, gradient clip-reveal name, animated portrait ring, live Freetown clock, availability status, floating glass chips, particles, and scroll cue
- **Custom Interactions**: 12px cursor dot with trailing ring, button ripples, card spotlight, and magnetic social links
- **Animated Toolkit**: Progress bars and circular skill rings triggered by IntersectionObserver
- **Bio & Stats**: Animated counters for projects, experience, clients, and retention
- **Services & Pricing**: 3D tilt service cards plus interactive fixed-scope, retainer, and advisory engagement models that preselect the matching project type, budget, and contact modal state
- **Project Showcase**: Five project cards with alternating layouts, a swipeable mobile carousel, and a slide-over detail drawer with highlights, tech stack, and project CTAs
- **Contact Section**: Ambient blobs, orbit lines, reduced-motion support, direct email/LinkedIn actions, and a glass project inquiry modal with validated fields and success states
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
├── favicon.svg         # Scalable site icon
├── favicon.ico         # Multi-size browser fallback icon
├── apple-touch-icon.png
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

### Contact Form
The inquiry modal validates fields client-side and sends submissions to `gabrielsamura9@gmail.com` through FlowForm's no-signup email endpoint. The form posts an AJAX `application/x-www-form-urlencoded` request and receives JSON; no activation step is required. On success, the form is replaced by a confirmation screen; failed sends show an inline warning with a direct email fallback. To change the destination, update the `action` attribute and `contactEndpoint` in `index.html`, plus the hidden `_next` URL if needed.

### Project Drawer Data
Project details live in the `projectDetails` array in `index.html`. Add project-specific demo URLs or source links there; live demos without a public URL open a prefilled inquiry in the contact modal.

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
