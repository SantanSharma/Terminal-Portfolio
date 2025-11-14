# Tailwind CSS Best Practices

## Introduction

Tailwind CSS is a powerful utility-first CSS framework, but with great power comes the need for discipline. Here are best practices for writing maintainable Tailwind CSS.

## 1. Use Component Classes

Extract repeated utility combinations into component classes:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition;
  }
}
```

## 2. Leverage Tailwind Configuration

Customize your `tailwind.config.js` for project-specific values:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
        }
      }
    }
  }
}
```

## 3. Organize Utility Classes

Follow a consistent order:
1. Layout (display, position, grid/flex)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography
5. Visual (background, border)
6. Effects (shadow, opacity)

## 4. Responsive Design

Mobile-first approach:

```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 5. Avoid Magic Values

Use theme values instead of arbitrary values when possible:

```html
<!-- Good -->
<div class="mt-4 p-8">

<!-- Avoid -->
<div class="mt-[17px] p-[33px]">
```

## 6. Use @apply Sparingly

Only use `@apply` for component-level abstractions, not one-off styles.

## Conclusion

Following these practices will help you maintain a clean and scalable Tailwind CSS codebase.

**Tags:** CSS, Tailwind, Best Practices
