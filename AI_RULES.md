# Prachi Makeover - AI Development Rules

This document outlines the high-end standards and technical constraints for the Prachi Makeover project.

## 1. Visual & Brand Identity
*   **Theme:** Luxury, Premium, Minimalist.
*   **Palette:** 
    *   Primary: Gold (#D4AF37)
    *   Secondary: Cream (#FAF9F6)
    *   Accents: Soft Pink, Warm Glows.
*   **Typography:** Playfair Display (Serif) for headings, Montserrat (Sans) for body.
*   **Vibe:** Dior/Apple-inspired whitespace and elegance.

## 2. Technical Constraints (Next.js 15 + Tailwind)
*   **No Arbitrary Apply:** Never use `ease-[cubic-bezier(...)]` or other arbitrary values inside `@apply`. Move them to standard CSS properties like `transition-timing-function`.
*   **Imports:** Always use strictly accurate relative paths (e.g., `../components/...`) to ensure build compatibility in this specific environment.
*   **Animations:** Use Framer Motion for entrance/exit. Use hardware-accelerated transforms (transform, opacity) only.
*   **Scrolling:** Lenis is integrated for 60FPS smooth inertia scrolling. Do not break this.

## 3. Component Architecture
*   **Modular:** Keep components small (< 100 lines).
*   **Client Components:** Use `"use client";` strictly for interactive elements.
*   **Responsive:** Mobile-first is mandatory. The gallery must maintain a clean symmetric grid (2 cols mobile, 4 cols desktop).

## 4. Media Management
*   **Supabase:** The project is integrated with Supabase. 
*   **Manual Control:** All admin/login pages have been removed. Management is done manually via the Supabase Dashboard.
*   **Storage:** 
    *   Photos -> "Photos" bucket
    *   Videos -> "Videos" bucket