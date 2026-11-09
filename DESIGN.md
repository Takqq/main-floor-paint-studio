# DESIGN.md: Main Floor Paint Studio

## Identity & Purpose
An interactive architectural paint visualizer built specifically for the main floor, entryway stairwell, hallway, and open-concept living room/kitchen renovation. Every control exists to test real Behr and BeautiTone paint formulas across the actual room photos and wall zones.

## Dials
- **ENERGY**: 2 (Warm, tactile architectural studio with responsive canvas interaction)
- **RHYTHM**: 2 (Asymmetric split studio on desktop, two-column control deck on tablet, single-column stack on mobile)
- **MOTION**: 1 (Immediate 60fps canvas re-coloring and crisp focus/selection states; no decorative animations)

## Palette & Contrast (WCAG AA Verified)
### Light Theme (Warm Studio Paper)
- Background Primary: `#F6F4EE`
- Surface Card: `#FFFFFF`
- Surface Subtle: `#EAE6DC`
- Text Primary: `#1B1A17` (Contrast on `#F6F4EE`: 15.6:1, on `#FFFFFF`: 17.4:1)
- Text Secondary: `#524F47` (Contrast on `#F6F4EE`: 7.1:1, on `#EAE6DC`: 6.3:1)
- Border / Control Edge: `#7A756B` (Contrast on `#FFFFFF`: 4.55:1, passes 3:1 non-text contrast)
- Primary Accent: `#3E4A35` (Deep Olive, contrast with `#FFFFFF` text: 9.3:1)

### Dark Theme (Architectural Slate)
- Background Primary: `#151513`
- Surface Card: `#1F1F1C`
- Surface Subtle: `#2A2A26`
- Text Primary: `#F3F0E8` (Contrast on `#151513`: 16.2:1, on `#1F1F1C`: 14.5:1)
- Text Secondary: `#BDB8AC` (Contrast on `#1F1F1C`: 8.6:1, on `#2A2A26`: 7.3:1)
- Border / Control Edge: `#8D887D` (Contrast on `#1F1F1C`: 4.6:1, passes 3:1 non-text contrast)
- Primary Accent: `#A8BC96` (Soft Sage, contrast with `#151513` text: 9.8:1)

## Typography
- **Headings**: `'Instrument Serif', Georgia, serif` (reflects residential interior design & architectural character)
- **UI & Labels**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif` (high legibility at small control sizes)
- **Paint Codes / HEX / LRV Specs**: `'JetBrains Mono', Consolas, monospace` (used strictly for manufacturer codes like `T27-01`, `S370-1`, `C45-7-0425-0`, HEX codes, and LRV numbers)
