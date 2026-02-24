# Booking Checkout

[My commit history](https://github.com/assuncaocharles/booking-checkout/commits?author=assuncaocharles) should help you understand my line of thoughts here.

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

## Scope change scenario: SMS opt-in

*Example: PM asks to add an “SMS opt-in” checkbox to Contact Information (Personal Details step).*

### What would change in the implementation

- **Types** (`types/checkout.ts`): Add `smsOptIn: boolean` (or `smsOptIn?: boolean` if optional) to `PersonalDetails`. Context and payload stay aligned with that shape.
- **Context** (`contexts/checkout-context.tsx`): Set initial `personalDetails.smsOptIn` (e.g. `false` for opt-in). No other context changes needed.
- **UI** (`components/steps/personal-details.tsx`): Add a checkbox (e.g. `CheckboxWithLabel`) with copy like “Send me appointment reminders via SMS”, wired with `register('smsOptIn')` or a `Controller`. Submission already sends `personalDetails`, so the new field is included automatically.
- **Tests**: Update PersonalDetails tests (default value, submit with opt-in on/off). Adjust context tests if they assert the shape of `personalDetails`. Add or update an a11y test for the new control.
- **Docs / Storybook**: If we had a PersonalDetails story, add a control for `smsOptIn`. No change to generic UI component stories unless we introduce a new variant.

### How to handle it in a real scenario

- **Clarify with PM**: Exact placement (Confirm it’s the Contact Information / Personal Details step), final label and helper text, required vs optional, and default (opt-in vs opt-out). If the flow shows phone only when opted in, confirm that behavior.
- **Scope and timing**: Treat as a small change (e.g. 1–2 hours including tests and copy). If it’s “late in the build”, agree whether it ships in the current iteration or goes to the backlog, and what (if anything) is deprioritized.
- **Compliance**: SMS consent often has legal requirements (disclosure, wording, opt-in proof). Confirm with Product/Legal that the copy and behavior are compliant before implementing.
- **Backend / API**: Confirm the API accepts an `smsOptIn` (or agreed) field and when it will be available. If the backend isn’t ready, we can add the field to the payload and document that the backend will consume it later.
- **Document**: In the PR, mention the new field, where it appears, and any copy or compliance notes. Update README or product docs if they describe the checkout payload or contact step.

---

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
