# Portfolio CSS Documentation

## Vibrant, Warm, Professional Design

---

## Table of Contents

1. [CSS Variables (Root)](#css-variables-root)
2. [Reset & Global Styles](#reset--global-styles)
3. [Utility Classes](#utility-classes)
4. [Components](#components)
   - [Navbar](#navbar)
   - [Buttons](#buttons)
   - [Hero Section](#hero-section)
   - [About Section](#about-section)
   - [Projects Section](#projects-section)
   - [Experience Section](#experience-section)
   - [Contact Section](#contact-section)
   - [Footer](#footer)
5. [Animations](#animations)
6. [Responsive Design](#responsive-design)

---

## CSS Variables (Root)

### Vibrant Color Palette

**Background Colors:**
- `--bg-primary`: #0f0f13
- `--bg-secondary`: #16161d
- `--bg-card`: #1c1c26
- `--bg-card-hover`: #242432

**Text Colors:**
- `--text-primary`: #ffffff
- `--text-secondary`: #9ca3af
- `--text-muted`: #6b7280

**Gradient Colors:**
- `--gradient-start`: #8b5cf6
- `--gradient-mid`: #d946ef
- `--gradient-end`: #f97316
- `--gradient`: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))

**Accent Colors:**
- `--accent-green`: #22c55e
- `--accent-blue`: #3b82f6
- `--accent-purple`: #a855f7
- `--accent-orange`: #f97316
- `--accent-pink`: #ec4899

**Category Colors:**
- `--healthcare`: #10b981
- `--fintech`: #3b82f6
- `--finance`: #f59e0b

**Design Tokens:**
- `--border-color`: rgba(255, 255, 255, 0.08)
- `--border-radius`: 16px
- `--border-radius-lg`: 24px
- `--font`: 'Plus Jakarta Sans', -apple-system, sans-serif
- `--transition`: 0.3s ease

---

## Reset & Global Styles

### Universal Reset
```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### HTML Settings
- Smooth scrolling enabled
- Scroll padding top: 100px

### Body Styles
- Font family: Plus Jakarta Sans (with fallback)
- Background: Dark primary color
- Text color: White
- Line height: 1.6
- Overflow-x: hidden

### Container
- Max width: 1200px
- Centered with auto margins
- Padding: 0 24px

---

## Utility Classes

### Gradient Text
`.gradient-text`
- Applies vibrant gradient to text
- Uses background-clip for text effect
- Makes text transparent with gradient fill

---

## Components

### Navbar

**Structure:**
- Fixed position at top
- Z-index: 1000
- Background: Semi-transparent dark with blur effect
- Border bottom: 1px solid

**Features:**
- Flexbox layout
- Space-between alignment
- Logo with icon and text
- Navigation links with hover effects

**Nav Links:**
- Font size: 0.95rem
- Font weight: 500
- Color: Secondary text (gray)
- Hover: Changes to primary text color

---

### Buttons

#### Primary Button (`.btn-primary`)
- Background: Gradient
- Color: White
- Box shadow: Purple glow effect
- Hover: Translates up 2px with enhanced shadow

#### Outline Button (`.btn-outline`)
- Transparent background
- Border: 2px solid
- Hover: Purple tint background

#### Large Button (`.btn-lg`)
- Padding: 16px 32px
- Font size: 1rem

**Common Button Features:**
- Inline-flex display
- 8px gap between elements
- Rounded corners (100px border-radius)
- Smooth transitions
- Cursor pointer

---

### Hero Section

**Layout:**
- Minimum height: 100vh
- Flexbox centered
- Padding: 120px 0 80px
- Grid: 1.2fr 1fr (content | visual)
- Gap: 60px

**Hero Badge:**
- Inline-flex with pulse animation
- Green accent color
- Rounded pill shape
- Includes animated pulse dot

**Typography:**
- H1: Clamp 2.5rem to 3.5rem
- Font weight: 800
- Line height: 1.2

**Hero Tagline:**
- Clamp 1.25rem to 1.75rem
- Font weight: 600
- Secondary text color

**Description:**
- Font size: 1.1rem
- Max width: 520px
- Line height: 1.8

**Hero Stats:**
- Flexbox layout
- 40px gap
- Center aligned text

**Stat Values:**
- Font size: 2rem
- Font weight: 800
- Gradient text effect

**Phone Mockup:**
- Width: 280px
- Height: 560px
- Border radius: 40px
- Floating animation (6s ease-in-out)
- Purple glow shadow effect

**App Icons:**
- 64px × 64px
- Rounded corners (16px)
- Gradient backgrounds:
  - Kotlin: Purple gradient
  - Compose: Green-cyan gradient
  - Flutter: Blue gradient

---

### About Section

**Layout:**
- Background: Secondary dark color
- Grid: 1fr 1fr
- Gap: 60px

**About Text:**
- Font size: 1.1rem
- Line height: 1.8
- Secondary text color
- Strong tags: Primary color

**Location Badge:**
- Inline-flex
- Pink accent icon
- Rounded pill shape
- Card background

**Tech Stack:**
- Card style container
- Border radius: 24px
- Grid: 2 columns
- 16px gap

**Tech Items:**
- Flexbox with 12px gap
- Secondary background
- Rounded corners (12px)
- Icon + text layout

---

### Projects Section

**Projects Grid:**
- Auto-fit grid
- Minimum: 340px
- Gap: 24px

**Project Card:**
- Padding: 32px
- Card background
- Border radius: 24px
- 4px colored top border (category-based)
- Hover: Translates up 8px with shadow

**Project Badge:**
- Category-colored
- Uppercase text
- Small font (0.75rem)
- Rounded pill

**Project Icon:**
- 72px × 72px
- Category-colored background
- Rounded corners (16px)

**Project Tags:**
- Flex wrap
- 8px gap
- Pill-shaped tags
- Semi-transparent background

**Project Link:**
- Purple accent color
- Inline-flex with gap
- Hover: Increases gap to 12px

**Category Colors:**
- Healthcare: Green (#10b981)
- Fintech: Blue (#3b82f6)
- Finance: Orange (#f59e0b)

---

### Experience Section

**Timeline:**
- Max width: 800px
- Centered

**Timeline Item:**
- Flexbox with 24px gap
- 40px bottom padding
- Vertical line connector (except last item)

**Timeline Dot:**
- 16px circle
- Gradient background
- Positioned at top

**Timeline Content:**
- Card style
- Padding: 24px
- Border radius: 16px

**Timeline Header:**
- Space-between flex
- Wraps on small screens

**Timeline Date:**
- Purple tinted background
- Pill shaped
- Small font (0.85rem)

**Timeline Role:**
- Purple accent color
- 0.9rem font size

---

### Contact Section

**Layout:**
- Grid: 1fr 1fr
- Gap: 60px
- Center aligned

**Contact Info:**
- Large heading (clamp 2rem to 2.5rem)
- Secondary text description

**Contact Cards:**
- Flex column
- 16px gap

**Contact Card:**
- Flexbox with 16px gap
- Padding: 20px 24px
- Card background
- Hover: Slides right 8px with color change

**Contact Icon:**
- 48px × 48px
- Secondary background
- Rounded corners (12px)
- 1.5rem icon size

**Contact Details:**
- Flex column
- 2px gap
- Label + value structure

---

### Footer

**Styling:**
- Padding: 32px 0
- Center aligned text
- Top border
- Muted text color
- Font size: 0.9rem

---

## Animations

### Pulse Animation
```css
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
- Duration: 2s
- Easing: ease-in-out
- Infinite loop

### Float Animation
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}
```
- Duration: 6s
- Easing: ease-in-out
- Infinite loop
- Used for phone mockup

---

## Responsive Design

### Breakpoint: 992px (Tablets)

**Hero:**
- Single column grid
- Center text alignment
- Hide visual mockup

**About:**
- Single column grid

**Contact:**
- Single column grid
- Center text alignment
- Hover: Translate up instead of right

### Breakpoint: 768px (Mobile)

**Navigation:**
- Hide nav links

**Sections:**
- Reduced padding: 80px 0

**Hero Stats:**
- Flex wrap
- Reduced gap: 24px
- Minimum stat width: 80px

**Projects:**
- Single column grid

**Tech Grid:**
- Single column

**Timeline:**
- Column layout instead of row
- Hide connecting line
- Hide timeline dot

### Breakpoint: 480px (Small Mobile)

**Container:**
- Reduced padding: 0 16px

**Project Card:**
- Reduced padding: 24px

**Timeline Content:**
- Reduced padding: 20px

**Timeline Header:**
- Column layout

---

## Key Features Summary

✨ **Design Highlights:**
- Vibrant gradient color scheme
- Smooth transitions and animations
- Card-based component design
- Consistent spacing and typography
- Hover effects throughout
- Fully responsive layout

🎨 **Color System:**
- Purple-pink-orange gradient theme
- Category-based color coding
- Dark mode optimized
- High contrast for readability

📱 **Responsive Strategy:**
- Mobile-first approach
- Three main breakpoints
- Flexible grid layouts
- Hidden elements on small screens
- Adjusted spacing for all sizes

🚀 **Performance:**
- Hardware-accelerated animations
- Optimized transitions
- Minimal repaints
- Efficient selectors