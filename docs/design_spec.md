# Project Design Specification: Personal Portfolio Website

## Overview
A clean, modern, mobile-first personal portfolio website built to showcase projects and skills. The design focuses on a premium "vibe" with dark mode support, smooth animations, and high performance.

## Tech Stack
- **Framework**: Astro (for performance and partial hydration)
- **Styling**: Tailwind CSS (for utility-first, rapid styling)
- **Interactivity**: React (for complex components like Forms and Theme Toggle)
- **Icons**: Phosphor Icons or similar React icon library
- **Deployment**: Netlify

## Visual Design & "Vibe"
- **Theme**: Dark mode by default or system preference, with a high-contrast, sleek look.
- **Colors**:
    - Primary: Deep blacks/grays for background (e.g., Slate/Zinc 900/950).
    - Accents: Vibrant but professional colors (e.g., Electric Blue, Violet, or Emerald gradients).
- **Typography**: Modern sans-serif (Inter, Plus Jakarta Sans, or Outfit).
- **Effects**:
    - Smooth scrolling.
    - Subtle hover states on cards and buttons.
    - Glassmorphism for the navbar and contact form background.

## Site Structure
1.  **Hero Section**:
    - Large name display.
    - Catchy tagline.
    - Call to Action (Resume / Contact).
2.  **About Me**:
    - Short bio.
    - potentially a photo.
3.  **Projects Grid**:
    - Responsive grid.
    - Cards with title, description, tags (technologies), and links (Repo/Demo).
    - Hover effects to reveal more info or scale slightly.
4.  **Skills Section**:
    - Visual representation of tech stack (Icons).
5.  **Contact Section**:
    - Functional form (Name, Email, Message).
    - Integration with Netlify Forms.

## Components Architecture
- `Layout.astro`: Main entry point, `<head>`, SEO, Dark mode init.
- `Navbar.astro`: Sticky navigation.
- `ThemeToggle.tsx`: Client-side state for theme switching.
- `ContactForm.tsx`: interactive form with validation.
- `ProjectCard.astro`: Reusable card component.

## Deployment
- **Platform**: Netlify
- **Configuration**: netlify.toml for build settings (if needed).
