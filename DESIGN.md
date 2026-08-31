# SpendWise Expense Tracker — Design System & Specification

This document defines the comprehensive design system, visual style, token definitions, layout guidelines, and component specifications for the **SpendWise Expense Tracker**, extracted directly from the official **Stitch MCP** project specifications.

---

## 1. Project Overview

* **Project Name**: SpendWise Expense Tracker
* **Stitch Resource ID**: `projects/4777745408768821476`
* **Target Audience**: Professional & Individual Users requiring clear financial tracking, analytical clarity, and expense management.
* **Core Screens**:
  1. **Dashboard Overview**: Financial KPIs (Total Balance, Monthly Spending, Transaction Count), spending trend charts, category donut breakdown, and recent transaction feeds.
  2. **Add Expense Modal**: Interactive overlay form featuring a hero currency amount input, description, category picker, date selector, payment method tile radio group, and form actions.

---

## 2. Design Philosophy

The SpendWise design system is built upon **Modern Corporate Fintech Minimalist** aesthetics with a focus on **Controlled Efficiency** and **High-Value Precision**.

* **Information Density**: High density without visual clutter. Prioritizes data legibility using structured alignment and generous white space.
* **Color Discipline**: Low-noise monochromatic backgrounds anchored by deep navy surfaces, vibrant high-chroma primary blue for call-to-actions, and calibrated semantic colors for metrics.
* **Content First**: Visual container styling recedes into the background to allow financial data to be scanned rapidly.
* **Tonal Elevation**: Uses subtle border definition paired with ambient shadows for surface separation.

---

## 3. Color Tokens

### Primary Brand & Actions
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `primary` | `#003EC7` | Primary brand color & active button states |
| `primary-container` | `#0052FF` | High-chroma primary blue for CTAs, active highlights & focal points |
| `on-primary` | `#FFFFFF` | Text/icons on primary containers |
| `on-primary-container` | `#DFE3FF` | Muted contrast text on primary container fills |
| `primary-fixed` | `#DDE1FF` | Light blue background tint for metrics & icon containers |
| `primary-fixed-dim` | `#B7C4FF` | Secondary blue fill for chart bars and accents |
| `on-primary-fixed-variant` | `#0038B6` | Dark blue contrast text on fixed primary elements |

### Surfaces & Backgrounds
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `background` / `surface` | `#F7F9FB` / `#F8FAFC` | Level 0 global app canvas |
| `surface-container-lowest` | `#FFFFFF` | Level 1 card containers, dropdowns & modal cards |
| `surface-container-low` | `#F2F4F6` | Input field default fills & table row hover states |
| `surface-container` | `#ECEEF0` | Neutral container backgrounds & button hover tints |
| `surface-container-high` | `#E6E8EA` | Elevated surface partitions |
| `surface-container-highest` | `#E0E3E5` | Category breakdown indicators & muted tags |
| `surface-variant` | `#E0E3E5` | Muted border dividers and secondary text tints |
| `inverse-surface` | `#0F172A` / `#2D3133` | Dark sidebar navigation background |
| `inverse-on-surface` | `#EFF1F3` | Light text on dark inverse surfaces |

### Typography & Structural Lines
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `on-surface` | `#191C1E` | Primary headings, values, and high-contrast text |
| `on-surface-variant` | `#434656` | Subheadings, metadata labels, and input placeholders |
| `outline` | `#737688` | Standard input borders & secondary button outlines |
| `outline-variant` | `#C3C5D9` | Card borders, dividers, and subtle separators |

### Secondary & Tertiary Colors
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `secondary` | `#565E74` | Muted slate secondary text & icons |
| `secondary-container` | `#DAE2FD` | Light secondary highlight fills |
| `on-secondary-container` | `#5C647A` | Slate text on secondary containers |
| `tertiary` | `#3F4F65` | Muted blue-gray for auxiliary metrics |
| `tertiary-container` | `#57677E` | Chart series & tag fills |
| `tertiary-fixed` | `#D3E4FE` | Light tertiary icon containers |

### Semantic & Feedback
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `error` | `#BA1A1A` | Negative values, spending increases, & alert indicators |
| `error-container` | `#FFDAD6` | Soft background for error tags and indicator icons |
| `on-error-container` | `#93000A` | Text on error container badges |

---

## 4. Typography Tokens

All typography utilizes **Inter** with specific scale definitions:

| Token Name | Font Size | Line Height | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | 48px | 56px | Bold (`700`) | `-0.02em` | Hero balance amounts, modal currency input |
| `headline-lg` | 32px | 40px | Semi-Bold (`600`) | `-0.01em` | Main page title ("Overview") |
| `headline-md` | 24px | 32px | Semi-Bold (`600`) | Normal | Modal section title ("Add Expense") |
| `title-lg` | 20px | 28px | Semi-Bold (`600`) | Normal | Card headers, sidebar section titles |
| `body-lg` | 16px | 24px | Regular (`400`) | Normal | Featured body content |
| `body-md` | 14px | 20px | Regular (`400`) | Normal | Default body text, form input text |
| `label-md` | 12px | 16px | Medium (`500`) | `0.02em` | Metadata, tags, uppercase form labels |
| `mono-data` | 14px | 20px | Semi-Bold (`600`) | `-0.01em` | Financial table values, currency deductions |

---

## 5. Spacing System

Built on an **8px linear grid scale**:

| Token | Value | Applied To |
| :--- | :--- | :--- |
| `xs` | 4px | Inline icon gaps, tight form field margins |
| `base` | 8px | Standard component internal padding, icon offsets |
| `sm` | 12px | List item padding, card header gaps, tile gaps |
| `md` | 24px | Card internal padding, grid column gutters (`gutter`) |
| `lg` | 40px | Major section breaks |
| `xl` | 64px | Page bottom padding, hero section spacing |
| `margin-mobile` | 16px | Mobile screen outer margin |
| `margin-desktop` | 32px | Desktop content container horizontal padding |

---

## 6. Layout Structure

* **Sidebar Navigation**: Fixed left rail at `280px` width. Dark surface `#0F172A`. Active navigation link highlighted with a 4px left border (`border-primary-fixed-dim`) and background tint.
* **Top AppBar**: Sticky 64px header (`bg-surface`, `border-b border-outline-variant`). Contains global search (`max-w-md`), notification triggers, and user profile avatar.
* **Main Scrollable Canvas**: `max-w-7xl` centered container on Level 0 background (`#F8FAFC`).
* **KPI Grid**: 3-column CSS grid (`grid-cols-1 md:grid-cols-3 gap-gutter`).
* **Content Split Grid**: 2:1 column grid on large screens (`lg:grid-cols-3` where charts take 2 columns and recent expenses take 1 column).
* **Modal Overlay**: Fixed inset centered overlay (`bg-inverse-surface/40 backdrop-blur-sm`). Modal card max width `560px`.

---

## 7. Component Specifications

### Buttons
* **Primary Action**: Background `#0052FF` (`primary-container`), text `#FFFFFF`, radius `rounded-lg` (8px), padding `12px 24px`, hover effect to `#003EC7`.
* **Secondary / Outline**: Background transparent, border `1px solid #737688` (`outline`), text `#191C1E`, radius `rounded-lg` (8px).

### Cards & Containers
* **KPI & Dashboard Cards**: Surface `#FFFFFF`, border `1px solid #C3C5D9` (`outline-variant`), radius `rounded-xl` (12px), shadow `shadow-sm`.
* **Header Divider**: Header section inside cards features a 1px bottom border separator (`border-outline-variant`).

### Form Inputs
* **Standard Fields**: Background `#F1F5F9` / `#F2F4F6` (`surface-container-low`), border `2px solid transparent`, radius `rounded-lg` (8px). On focus: background `#FFFFFF`, border `#0052FF`.
* **Hero Currency Amount Input**: Borderless centered transparent field with dollar sign prefix, `display-lg` typography, and an animated bottom accent bar.
* **Payment Method Tiles**: 3-column radio tile grid. Unchecked: `bg-surface-container-lowest border-outline-variant`. Checked: `border-primary-container bg-primary-container/5`.

### Chips & Badges
* **Trend Indicator**: Pill shape (`rounded-full`), soft error background `#FFDAD6`, text `#BA1A1A` with mini upward arrow icon.

---

## 8. Border Radii

* **`sm` (4px / `0.25rem`)**: Checkboxes, small tags, mini status indicators
* **`DEFAULT` / `md` (8px / `0.5rem`)**: Buttons, text inputs, dropdowns, navigation pills
* **`lg` (12px / `0.75rem`)**: Chart containers, internal cards, nav active blocks
* **`xl` (16px / `1rem`)**: KPI dashboard cards, main modal container
* **`full` (9999px)**: Avatars, rounded action buttons, trend pill badges

---

## 9. Shadows & Elevation

* **Level 0 (Flat Canvas)**: No shadow, background `#F8FAFC`.
* **Level 1 (Cards & Controls)**:
  `box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.05);`
  Paired with a `1px` border of `#C3C5D9`.
* **Level 2 (Modals & Popovers)**:
  `box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);`

---

## 10. Responsive Behavior

* **Mobile (<768px)**:
  * Single-column vertical layout (`grid-cols-1`).
  * Horizontal screen margin scales to `16px`.
  * Sidebar transitions off-canvas / hamburger pattern.
  * Headline typography scales to mobile sizes (`headline-lg-mobile`: 24px).
* **Tablet (768px – 1023px)**:
  * 2-column KPI card grid.
  * Top bar search collapses to icon.
  * Gutters set to 24px.
* **Desktop (1024px+)**:
  * Full 12-column grid system with fixed 280px left sidebar rail.
  * 3-column KPI card row.
  * 2:1 column split for analytical charts vs. transaction feeds.
