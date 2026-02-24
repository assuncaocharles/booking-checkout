# Booking Checkout

A US-only appointment checkout flow: collect personal details, card details, then confirm. No backend—data is mocked and the final payload is logged to the console.

**Live app:** [booking-checkout.vercel.app](https://booking-checkout.vercel.app/)  
**Storybook:** [booking-checkout-feqw.vercel.app](https://booking-checkout-feqw.vercel.app/?path=/story/ui-button--default)

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Getting Started

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the Next.js dev server    |
| `npm run storybook` | Run Storybook for UI components |
| `npm run test`      | Run Vitest (watch mode)         |

---

## Overview

- **Flow:** Personal details → Card details → Confirmation. User moves forward step by step and submits at the end.
- **Scope:** Front-end only. No API or persistence; checkout result is logged in the browser.
- **Stack:** Next.js 16, React 19, Tailwind 4, react-hook-form. Company data comes from fixtures.

---

## Possible improvements

**Flow & UX**

- **Step 2 actions:** Clarify or merge “Book appointment” vs “Continue” so their roles are obvious.
- **Persistence:** Save progress per step (e.g. local storage or server) so a refresh doesn’t lose data; support an “incomplete” state.
- **Back navigation:** Let users go back to earlier steps and edit without losing data.
- **Motion:** Add transitions between steps and on the success screen.

**Forms & validation**

- **Validation:** All fields are required; expiration is validated as a future date (MM/YY).
- **Input masking:** Currently only card and expiration dates are being masked, we could add for zip code and phone latter.
- **Autofill:** Currently not enabled; could be enabled where appropriate.

**Architecture**

- **Routing:** Use real routes per step with permalinks instead of a single page + context.

**Testing & quality**

- **E2E tests:** Add Playwright for the full checkout flow in a browser.
- **CI:** Run `test:run`, `lint`, and `build` (and optionally `build-storybook`) on push/PR; consider coverage thresholds.
- **Storybook for steps:** Add stories for PersonalDetails, CardDetails, Confirmation (with `CheckoutProvider` and mocks) to document and visually test the flow.
- **Visual regression:** Use Chromatic or similar to catch UI changes in Storybook.

---

## AI usage

- Project and first components were built manually to set patterns and structure.
- AI was used for Tailwind guidance, replicating patterns, and speeding up form and UI work (plan + agent mode).
- After the app was done, AI was used to add unit tests, Storybook, and basic a11y checks.

Session notes:

- [Build and get app done](https://gist.github.com/assuncaocharles/cc38cfcfb4f085ea82e3c72713088786)
- [Unit tests and Storybook](https://gist.github.com/assuncaocharles/12a551c26f1f1900842b73aa5cb48eef)
