# RTL (Right-to-Left) Support

The Ameengo Design System has comprehensive RTL support for Arabic, Hebrew, Persian, Urdu, and other right-to-left languages.

## Quick Start

### Static RTL

Set the `dir` attribute on the HTML element in `src/app/layout.tsx`:

```tsx
<html lang="ar" dir="rtl">
```

### Dynamic RTL Switching

The showcase page includes a built-in RTL toggle. To add dynamic switching to your app:

```tsx
"use client"

import { useState } from "react"

export default function MyComponent() {
  const [rtlMode, setRtlMode] = useState(false)

  const toggleRtl = () => {
    setRtlMode(!rtlMode)
    document.documentElement.setAttribute("dir", !rtlMode ? "rtl" : "ltr")
  }

  return <button onClick={toggleRtl}>Toggle RTL</button>
}
```

## What's Supported

### ✅ Fully Supported Components

All 46 shadcn/ui components support RTL out of the box:

- **Layout**: Card, Dialog, Sheet, Drawer, Sidebar
- **Navigation**: Breadcrumb, Menu, Navigation Menu, Pagination, Tabs
- **Forms**: All input components, labels, and form layouts
- **Feedback**: Alert, Toast (Sonner), Skeleton, Progress
- **Data Display**: Table, Carousel, Chart
- **Overlay**: Popover, Tooltip, Hover Card, Dropdown Menu

### RTL-Aware Features

1. **Text Direction**
   - All text automatically flows right-to-left
   - Text alignment uses logical properties (`start`/`end`)

2. **Layout Mirroring**
   - Margins, padding, and positioning automatically flip
   - Flexbox and grid layouts reverse correctly
   - Floating elements (dropdowns, tooltips) position correctly

3. **Icons & Visuals**
   - Directional icons (arrows, chevrons) flip automatically
   - Breadcrumb separators reverse
   - Carousel navigation buttons swap positions

4. **Spacing**
   - `ml-auto` → `mr-auto` (and vice versa)
   - Uses logical properties: `padding-inline-start`, `padding-inline-end`

## Logical Properties

The design system uses CSS logical properties for automatic RTL support:

| Traditional | Logical | RTL Behavior |
|------------|---------|--------------|
| `margin-left` | `margin-inline-start` | Auto-flips |
| `margin-right` | `margin-inline-end` | Auto-flips |
| `padding-left` | `padding-inline-start` | Auto-flips |
| `padding-right` | `padding-inline-end` | Auto-flips |
| `border-left` | `border-inline-start` | Auto-flips |
| `text-align: left` | `text-align: start` | Auto-flips |

### Utility Classes

Use these RTL-safe utility classes:

```tsx
// ✅ Good - RTL-safe
<div className="ps-4 pe-2 text-start">

// ❌ Avoid - Not RTL-safe
<div className="pl-4 pr-2 text-left">
```

Available logical utilities:
- **Padding**: `ps-{n}`, `pe-{n}` (start/end)
- **Margin**: `ms-auto`, `me-auto`
- **Text**: `text-start`, `text-end`
- **Float**: `float-start`, `float-end`
- **Border**: `border-s`, `border-e`
- **Rounded**: `rounded-s`, `rounded-e`

## Component-Specific Notes

### Sidebar
```tsx
// Automatically positions on the right in RTL
<Sidebar>...</Sidebar>
```

### Carousel
```tsx
// Navigation buttons auto-flip
<Carousel>...</Carousel>
```

### Dropdown Menu
```tsx
// Positioning respects RTL direction
<DropdownMenu>...</DropdownMenu>
```

### Toast Notifications
```tsx
// Toasts appear on the right in RTL
<Toaster />
```

### Breadcrumbs
```tsx
// Separators flip automatically
<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>Products</BreadcrumbItem>
</Breadcrumb>
```

## Testing RTL

1. **In the showcase page**: Click the RTL toggle button in the header
2. **Via browser DevTools**: 
   ```js
   document.documentElement.setAttribute('dir', 'rtl')
   ```
3. **Manual testing**: Change the `dir` attribute in `layout.tsx`

## Best Practices

### ✅ Do

- Use logical properties (`start`/`end` instead of `left`/`right`)
- Use `text-align: start` instead of `text-align: left`
- Test with actual RTL content (Arabic العربية, Hebrew עברית)
- Use directional icons from lucide-react (they auto-flip)

### ❌ Don't

- Hardcode `left` or `right` in custom styles
- Use `ml-{n}` or `mr-{n}` for directional spacing
- Assume LTR-only layouts
- Use `absolute` positioning with `left`/`right` (use logical properties)

## Language Configuration

### Arabic

```tsx
<html lang="ar" dir="rtl">
```

### Hebrew

```tsx
<html lang="he" dir="rtl">
```

### Persian (Farsi)

```tsx
<html lang="fa" dir="rtl">
```

### Urdu

```tsx
<html lang="ur" dir="rtl">
```

## Advanced: Per-Component Direction

Override direction for specific components:

```tsx
// Force LTR for code blocks in RTL pages
<pre dir="ltr">
  <code>const x = 1;</code>
</pre>
```

## Browser Support

RTL works in all modern browsers:
- ✅ Chrome/Edge 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Mobile browsers

## Troubleshooting

### Issue: Component not flipping

**Solution**: Check if you're using traditional properties (`left`/`right`). Switch to logical properties.

### Issue: Text alignment wrong

**Solution**: Use `text-start` instead of `text-left`.

### Issue: Icons not flipping

**Solution**: Most icons auto-flip. For custom icons, use `transform: scaleX(-1)` in RTL mode.

## Need Help?

The RTL configuration is in:
- CSS: `src/styles/tokens/rtl.css`
- Layout: `src/app/layout.tsx`
- Toggle: `src/app/page.tsx`

All components automatically inherit RTL behavior when `dir="rtl"` is set on the HTML element.
