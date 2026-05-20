# Project Context: Personal Portfolio

## Overview
This project is a personal portfolio website for a frontend developer. The initial prototype was generated via Vercel v0. 

## Tech Stack
* Framework: Next.js (App Router)
* Styling: Tailwind CSS
* UI Components: shadcn/ui
* Architecture: Fully static, no backend
* Environment: Local development on M4 MacBook Air

## Developer Data
* Name: Andrew Kim
* Role: Frontend Developer
* Experience:
  * Frontend Web Developer @ Penn Labs
  * Software Engineering Intern @ U.S. Navy
* Projects:
  * ThoccWorks: Mechanical keyboard part search engine (Featured/Large card)
  * Shopii: AI-powered shopping assistant browser extension
  * Gummi: Social commerce platform

## Design Language & Aesthetics
* Theme: Sleek, high-contrast dark mode.
* Background: Deep Obsidian (`#0A0A0A`).
* Surface Elements: Very Dark Gray (`#171717`, 50% opacity, glassmorphic).
* Typography: Geist Sans or Inter (sans-serif, tight tracking). Primary text is Off-White (`#F3F4F6`), secondary is Muted Gray (`#9CA3AF`).
* Accent Color: Soft Amber/Gold (`#FBBF24`).

## Structural Constraints
* Layout: Centered, single-column flow. Strict prohibition on split-screen or two-column fixed/scroll layouts.
* Navigation: Floating, glassmorphic pill menu (Home, Experience, Projects).
* Hero: Massive typography for name, subtitle, heavily constrained bio, social icons (GitHub, LinkedIn, Email).
* Experience: Minimalist list or table. Role/Company left-aligned, Dates right-aligned. Expandable details via shadcn Accordion.
* Projects: Asymmetrical CSS Grid (Bento Box effect).

## Pending Interactive Implementation
The standard radial cursor glow was rejected. Collaborate with the developer to implement one of the following alternatives:
1. Interactive Dot Grid (localized amber illumination on mouse proximity)
2. Dynamic Proximity Borders (CSS masking on Bento cards)
3. Typographic Scramble Reveal (ASCII/hex character cycle on hover)
4. Static Matte Grain (SVG noise overlay)

## AI Agent Instructions (User Communication Preferences)
* Output: Provide concise, structured responses. Get straight to the point.
* Formatting: Use lists and tables. Avoid excessive explanation.
* Tone: Professional, zero pleasantries or flattery. Use plain language with minimal adjectives/adverbs.
* Problem Solving: Prioritize evidence-based reasoning. Use the metric system for measurements.
* Corrections: Acknowledge mistakes directly and correct them transparently. Challenge ideas if they lack technical rigor. Accept pushback gracefully.