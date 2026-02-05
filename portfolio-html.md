# Hero Section Design Specification

## Overview
This document provides a complete design specification for implementing a modern, vibrant hero section for a developer portfolio website. Follow this pattern to create consistent, high-quality hero sections.

---

## Layout Structure

### Container Hierarchy
```
hero (section)
└── container
    ├── hero-content (left column)
    │   ├── hero-badge
    │   ├── h1 (main heading)
    │   ├── hero-tagline
    │   ├── hero-desc
    │   ├── hero-cta (buttons)
    │   └── hero-stats
    └── hero-visual (right column)
        └── phone-mockup
            └── phone-screen
                ├── app-icon (1)
                ├── app-icon (2)
                └── app-icon (3)
```

---

## Grid Layout

### Desktop Layout (992px+)
```css
.hero .container {
    display: grid;
    grid-template-columns: 1.2fr 1fr; /* Content takes slightly more space */
    gap: 60px;
    align-items: center;
}
```

### Tablet/Mobile (< 992px)
```css
.hero .container {
    grid-template-columns: 1fr; /* Single column */
    text-align: center;
}
.hero-visual {
    display: none; /* Hide mockup on smaller screens */
}
```

---

## Component Breakdown

### 1. Hero Badge (Status Indicator)

**Purpose:** Show availability status with animated pulse

**HTML Structure:**
```html
<div class="hero-badge">
    <span class="pulse"></span>
    [Status Text]
</div>
```

**Styling:**
- Display: `inline-flex`
- Align items: `center`
- Gap: `10px`
- Padding: `8px 16px`
- Background: `rgba(34, 197, 94, 0.1)` (green tint)
- Border: `1px solid rgba(34, 197, 94, 0.3)`
- Border radius: `100px` (pill shape)
- Color: Green accent (`#22c55e`)
- Font size: `0.85rem`
- Font weight: `500`
- Margin bottom: `24px`

**Pulse Animation:**
```css
.pulse {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.3);
    }
}
```

**Usage Examples:**
- "Open to Opportunities"
- "Available for Hire"
- "Currently Working"

---

### 2. Main Heading (h1)

**HTML Structure:**
```html
<h1>Hi, I'm <span class="gradient-text">[Your Name]</span></h1>
```

**Styling:**
- Font size: `clamp(2.5rem, 5vw, 3.5rem)` (responsive)
- Font weight: `800` (extra bold)
- Line height: `1.2`
- Margin bottom: `8px`

**Gradient Text Effect:**
```css
.gradient-text {
    background: linear-gradient(135deg, #8b5cf6, #d946ef, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

**Pattern:**
- Start with casual greeting: "Hi, I'm"
- Highlight name with gradient effect
- Keep it friendly and approachable

---

### 3. Tagline

**HTML Structure:**
```html
<p class="hero-tagline">[Your Title/Role]</p>
```

**Styling:**
- Font size: `clamp(1.25rem, 3vw, 1.75rem)`
- Font weight: `600`
- Color: Secondary text (`#9ca3af`)
- Margin bottom: `24px`

**Examples:**
- "Senior Android Developer"
- "Mobile App Developer"
- "Full Stack Developer"
- "Product Designer"

---

### 4. Description

**HTML Structure:**
```html
<p class="hero-desc">
    I build <strong>beautiful, high-performance</strong> mobile apps that users love.
    Specialized in <span class="highlight">Fintech</span> & <span class="highlight">Healthcare</span>
    with 5+ years of experience crafting solutions with Kotlin, Jetpack Compose & Flutter.
</p>
```

**Styling:**
- Font size: `1.1rem`
- Color: Secondary text (`#9ca3af`)
- Max width: `520px`
- Margin bottom: `32px`
- Line height: `1.8` (generous spacing)

**Strong Tags:**
- Color: Primary white (`#ffffff`)

**Highlight Class:**
```css
.highlight {
    background: linear-gradient(135deg, #8b5cf6, #d946ef, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
}
```

**Content Formula:**
1. What you do (action verb)
2. Key qualities (strong tags)
3. Specializations (highlight spans)
4. Experience metric
5. Tech stack/skills

---

### 5. Call-to-Action Buttons

**HTML Structure:**
```html
<div class="hero-cta">
    <a href="#projects" class="btn btn-primary btn-lg">
        View My Work
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" 
             stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    </a>
    <a href="#contact" class="btn btn-outline btn-lg">Get In Touch</a>
</div>
```

**Container Styling:**
- Display: `flex`
- Gap: `16px`
- Margin bottom: `48px`
- Flex wrap: `wrap` (for mobile)

**Button Base Styles:**
```css
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.btn-lg {
    padding: 16px 32px;
    font-size: 1rem;
}
```

**Primary Button:**
```css
.btn-primary {
    background: linear-gradient(135deg, #8b5cf6, #d946ef, #f97316);
    color: white;
    box-shadow: 0 4px 24px rgba(168, 85, 247, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(168, 85, 247, 0.4);
}
```

**Outline Button:**
```css
.btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.08);
}

.btn-outline:hover {
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
}
```

**Icon (Arrow SVG):**
- Width/Height: `20px`
- Stroke: `currentColor`
- Stroke width: `2`
- Only on primary button

**Button Pair Pattern:**
1. **Primary CTA:** Action-oriented (View Work, See Projects)
2. **Secondary CTA:** Contact-oriented (Get In Touch, Hire Me)

---

### 6. Statistics

**HTML Structure:**
```html
<div class="hero-stats">
    <div class="stat">
        <span class="stat-value">5+</span>
        <span class="stat-label">Years Exp.</span>
    </div>
    <div class="stat">
        <span class="stat-value">10+</span>
        <span class="stat-label">Apps Built</span>
    </div>
    <div class="stat">
        <span class="stat-value">100K+</span>
        <span class="stat-label">Users</span>
    </div>
</div>
```

**Container Styling:**
```css
.hero-stats {
    display: flex;
    gap: 40px;
}

@media (max-width: 768px) {
    .hero-stats {
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;
    }
}
```

**Individual Stat:**
```css
.stat {
    text-align: center;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #8b5cf6, #d946ef, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: 0.85rem;
    color: #6b7280;
}
```

**Recommended Stats:**
- Years of experience
- Projects/Apps built
- Users reached
- Companies worked with
- Technologies mastered
- GitHub stars
- Downloads

**Format Pattern:**
- Value: Number + suffix (5+, 100K+, 20+)
- Label: Short descriptor (2-3 words max)

---

### 7. Visual Element (Phone Mockup)

**HTML Structure:**
```html
<div class="hero-visual">
    <div class="phone-mockup">
        <div class="phone-screen">
            <div class="app-icon kotlin"></div>
            <div class="app-icon compose"></div>
            <div class="app-icon flutter"></div>
        </div>
    </div>
</div>
```

**Phone Mockup Styling:**
```css
.phone-mockup {
    width: 280px;
    height: 560px;
    background: #1c1c26;
    border-radius: 40px;
    border: 4px solid #242432;
    padding: 16px;
    position: relative;
    box-shadow:
        0 50px 100px rgba(139, 92, 246, 0.2),
        0 20px 60px rgba(0, 0, 0, 0.3);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}
```

**Phone Screen:**
```css
.phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #1e1e2e 0%, #2d1f47 100%);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
}
```

**App Icons:**
```css
.app-icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.app-icon.kotlin {
    background: linear-gradient(135deg, #7c3aed, #c084fc);
}

.app-icon.compose {
    background: linear-gradient(135deg, #4ade80, #22d3ee);
}

.app-icon.flutter {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
}
```

**Customization:**
- Add actual logos/icons inside app-icon divs
- Change gradient colors to match tech stack
- Replace with different visual (laptop, code editor, etc.)

---

## Section Wrapper Styling

```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0 80px;
    position: relative;
    overflow: hidden;
}

/* Optional: Decorative gradient background */
.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 100%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%);
    pointer-events: none;
}
```

---

## Color Palette Reference

### Primary Colors
- **Background Primary:** `#0f0f13`
- **Background Secondary:** `#16161d`
- **Background Card:** `#1c1c26`

### Text Colors
- **Primary (White):** `#ffffff`
- **Secondary (Gray):** `#9ca3af`
- **Muted (Light Gray):** `#6b7280`

### Gradient
```css
linear-gradient(135deg, #8b5cf6, #d946ef, #f97316)
```
- Start: Purple `#8b5cf6`
- Middle: Pink `#d946ef`
- End: Orange `#f97316`

### Accent Colors
- **Green:** `#22c55e`
- **Blue:** `#3b82f6`
- **Purple:** `#a855f7`
- **Orange:** `#f97316`
- **Pink:** `#ec4899`

---

## Typography

### Font Family
```css
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Weights
- Regular: `400`
- Medium: `500`
- Semibold: `600`
- Bold: `700`
- Extra Bold: `800`

### Font Sizes (Responsive)
```css
/* Heading */
font-size: clamp(2.5rem, 5vw, 3.5rem);

/* Tagline */
font-size: clamp(1.25rem, 3vw, 1.75rem);

/* Description */
font-size: 1.1rem;

/* Small text */
font-size: 0.85rem;
```

---

## Spacing System

### Margins
- Small: `8px`
- Medium: `16px`
- Large: `24px`
- XL: `32px`
- XXL: `48px`

### Gaps
- Button gap: `16px`
- Stat gap: `40px` (desktop), `24px` (mobile)
- Grid gap: `60px`
- Icon gap: `24px`

### Padding
- Button: `12px 24px` (regular), `16px 32px` (large)
- Badge: `8px 16px`
- Phone mockup: `16px`

---

## Responsive Breakpoints

### Large Desktop (1200px+)
- Full two-column layout
- Maximum content width

### Desktop (992px - 1199px)
- Two-column layout maintained
- Slightly reduced spacing

### Tablet (768px - 991px)
- Single column layout
- Center-aligned text
- Hide phone mockup
- Adjusted font sizes

### Mobile (< 768px)
- Simplified layout
- Reduced padding: `80px 0`
- Wrapped stats
- Smaller buttons

---

## Best Practices

### Content Guidelines

1. **Keep it concise:** 2-3 sentences max for description
2. **Be specific:** Mention actual technologies and specializations
3. **Show value:** Focus on outcomes (users love, reduced wait times)
4. **Use metrics:** Include years of experience and quantifiable achievements
5. **Call to action:** Clear, actionable button text

### Design Guidelines

1. **Maintain hierarchy:** Badge → Heading → Tagline → Description → CTA → Stats
2. **Use whitespace:** Don't crowd elements
3. **Consistent gradient:** Use same gradient across name, stats, and buttons
4. **Subtle animations:** Floating mockup, pulsing badge
5. **Responsive text:** Use clamp() for fluid typography

### Accessibility

1. **Semantic HTML:** Use proper heading levels (h1)
2. **Color contrast:** Ensure text meets WCAG AA standards
3. **Focus states:** Add visible focus indicators for buttons
4. **Alt text:** Add meaningful descriptions to visual elements
5. **Keyboard navigation:** Ensure all interactive elements are accessible

---

## Quick Implementation Checklist

- [ ] Set up two-column grid layout
- [ ] Add hero badge with pulse animation
- [ ] Create main heading with gradient text
- [ ] Add tagline below heading
- [ ] Write concise description (max 3 sentences)
- [ ] Add two CTA buttons (primary + outline)
- [ ] Include 3 statistics with gradient values
- [ ] Add phone mockup with floating animation
- [ ] Include tech stack icons in mockup
- [ ] Test responsive behavior on all breakpoints
- [ ] Ensure gradient consistency across elements
- [ ] Add smooth transitions and hover effects
- [ ] Verify accessibility (keyboard nav, contrast)
- [ ] Optimize for performance (CSS animations)

---

## Variations & Alternatives

### Alternative Visual Elements
Instead of phone mockup, you can use:
- **Code Editor:** VS Code style window with syntax highlighting
- **Dashboard:** Analytics dashboard mockup
- **3D Illustration:** Abstract geometric shapes
- **Profile Image:** Professional headshot with gradient border
- **Laptop Mockup:** MacBook style device
- **Multiple Devices:** Phone + tablet + laptop

### Alternative Layouts
- **Centered:** Single column, centered content with visual below
- **Full Width:** Background image with overlay and centered content
- **Split Screen:** 50/50 split with large background image
- **Asymmetric:** 2fr 1fr grid ratio
- **Stacked:** All content in one column, no visual element

### Alternative Color Schemes
- **Blue Theme:** Replace purple gradient with blues (#3b82f6 → #06b6d4)
- **Green Theme:** Nature/growth theme (#10b981 → #22c55e)
- **Monochrome:** Black/white/gray only
- **Brand Colors:** Use company/personal brand colors

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use too many colors (stick to 2-3 accent colors)
- Overcrowd with information
- Use tiny font sizes (minimum 14px)
- Forget mobile responsiveness
- Use generic stock photos
- Include too many CTAs (max 2)
- Use low-contrast text
- Animate excessively

✅ **Do:**
- Keep gradient consistent
- Use ample whitespace
- Test on real devices
- Optimize images
- Use semantic HTML
- Add loading states
- Consider dark mode
- Profile performance

---

## Example Content Templates

### For Mobile Developers
```
Hi, I'm [Name]
Senior Mobile Developer

I build beautiful, high-performance mobile apps that users love.
Specialized in iOS & Android with 5+ years of experience crafting
solutions with Swift, Kotlin & React Native.

Stats: 5+ Years | 15+ Apps | 500K+ Downloads
```

### For Web Developers
```
Hi, I'm [Name]
Full Stack Developer

I create modern, responsive web applications that drive business growth.
Specialized in React, Node.js & TypeScript with expertise in building
scalable solutions for startups and enterprises.

Stats: 4+ Years | 30+ Projects | 100+ Clients
```

### For Designers
```
Hi, I'm [Name]
Product Designer

I design intuitive, user-centered experiences that people love to use.
Specialized in SaaS & Mobile with 6+ years creating beautiful,
functional designs for fast-growing companies.

Stats: 6+ Years | 50+ Products | 1M+ Users
```

---

## Final Notes

This hero section follows modern web design principles with:
- Clean, professional aesthetic
- Vibrant yet professional color scheme
- Clear visual hierarchy
- Strong call-to-action
- Social proof through statistics
- Responsive design
- Smooth animations

**Remember:** The hero section is the first thing visitors see. Make it count by being clear, concise, and compelling. Focus on value proposition and guide users to your best work.

---

## Resources

**Fonts:**
- [Plus Jakarta Sans - Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

**Icons:**
- SVG icons (inline for performance)
- Lucide Icons / Heroicons for consistent style

**Colors:**
- Use HSL for easier color manipulation
- Test contrast with WebAIM checker
- Consider color blindness accessibility

**Testing:**
- Chrome DevTools for responsive testing
- Lighthouse for performance
- WAVE for accessibility
- Real device testing

---

**Version:** 1.0  
**Last Updated:** 2026  
**License:** Free to use and modify