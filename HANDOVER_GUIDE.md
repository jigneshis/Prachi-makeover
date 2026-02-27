# Project Handover & Analysis Guide

## Project Status: V1 Launch Ready
This project is a luxury makeup artistry landing page for **Prachi Makeover**.

### 1. What has been built:
*   **Premium Landing Page:** Hero with parallax, staggered service cards, and an about section.
*   **Advanced Gallery Section:** A homepage-integrated, Supabase-linked portfolio. Supports images and videos with a premium glass-blur lightbox.
*   **Dynamic Booking System:** A custom-built modal with direct WhatsApp (+91 8740007981) and Call integration.
*   **Motion UI:** 60FPS Lenis smooth scrolling and Framer Motion entrance reveals.

### 2. Integration Details:
*   **Database:** Table `gallery_items` stores media metadata.
*   **Storage:** Images in `Photos`, Videos in `Videos`.
*   **Manual Management:** The owner manages items directly via Supabase. There is **no admin login** on the site.

### 3. How to Resume (Instruction for AI):
If you are analyzing this project for the first time:
1.  Verify `src/integrations/supabase/client.ts` for credentials.
2.  Inspect `src/app/globals.css` for the `luxury-button` and `luxury-text-gradient` definitions.
3.  Check `src/components/home/GallerySection.tsx` to understand the data fetching logic.
4.  Maintain the **₹5 Lakh Agency** quality standard: generous whitespace, subtle animations, and refined typography.

### 4. Contact / Credits:
*   **Owner:** Prachi Makeover
*   **Designer:** Jignesh Wadwani (jigneshis.vercel.app)