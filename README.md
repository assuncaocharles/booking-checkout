# Booking Checkout

[My commit history](https://github.com/assuncaocharles/booking-checkout/commits?author=assuncaocharles) should help you understand my line of thoughts here.

A US-only appointment checkout flow: collect personal details, card details, then confirm. No backend—data is mocked and the final payload is logged to the console.

**Live app:** [booking-checkout.vercel.app](https://booking-checkout.vercel.app/)  
**Storybook:** [booking-checkout-feqw.vercel.app](https://booking-checkout-feqw.vercel.app/?path=/story/ui-button--default)

---

## Setup instructions

How to run the code locally:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Other commands**
   - `npm run storybook` — Storybook for UI components (port 6006).
   - `npm run test` — Vitest in watch mode.

No env vars or extra setup required. Node and npm (or equivalent) are assumed.

---

## AI usage

**Tools:** Cursor (plan mode and agent mode).

**How I used:**

- The project and first components I built manually to set patterns and structure.
- AI was used for Tailwind guidance, replicating patterns, and speeding up form and UI work (plan + agent mode).
- After the app was done, AI was used to add unit tests (Vitest + RTL), Storybook for UI components, and basic a11y tests (vitest-axe). Company fixtures and README edits were also done with AI.

**Session notes:**

- [Build and get app done](https://gist.github.com/assuncaocharles/cc38cfcfb4f085ea82e3c72713088786)
- [Unit tests and Storybook](https://gist.github.com/assuncaocharles/12a551c26f1f1900842b73aa5cb48eef)

---

## Assumptions

- **US-only:** Checkout is for a US context (e.g. US ZIP validation, no i18n).
- **No backend:** No API or database; the final payload is logged in the console. No auth, no persistence.
- **All fields required:** Personal details and card details are all mandatory; no optional fields.
- **Single company per run:** Company info is driven by fixtures and props; one active company (e.g. default) is sufficient for this slice. Multi-tenant or config-driven company switching was not required.
- **Forward-only flow:** Users move step-by-step forward only; back navigation was not in scope.
- **Contact Information = Personal Details step:** The first step is treated as “Contact Information” (name, email, phone, visit reason). Any extra contact preferences (e.g. SMS opt-in) would go there unless specified otherwise.
- **Demo slice:** This is a slice of a larger product; production concerns (rate limits, retries, analytics, feature flags) were not assumed.

---

## Tradeoffs

- **React Context for step and form state:** Keeps the demo simple and avoids routing/URL complexity. No permalinks per step, state is lost on refresh, harder to deep-link or share. For a real app, URL-based steps (and possibly server persistence) would be preferable.
- **Single page (no routes per step):** Same as above — simpler to build and reason about for a small flow. No browser back/forward per step, no bookmarking mid-flow.
- **Mock data and `console.log` at submit:** Makes the front-end self-contained and runnable without a backend. No real persistence or integration; backend contract is implied by the payload shape we log.
- **Storybook for UI components only:** Step and app screens are covered by unit tests; Storybook focuses on reusable primitives. Tradeoff: no visual documentation of full steps in Storybook unless we add stories with providers later.

---

## Scope decisions

What was left out of scope, and why:

- **Clarifying “Book appointment” vs “Continue” in step 2:** Both buttons submit the form; the distinction (if any) was not refined to avoid changing product copy in this slice.
- **Persistence (local or server):** Not built so the demo stays backend-free and simple. In production, I would persist it per setp.
- **Back navigation:** Would require preserving state when moving to a previous step and rehydrating the form.
- **Routing per step (e.g. `/checkout/contact`, `/checkout/card`):** Left out to avoid coupling state to the URL and to keep the app to a single page. Would improve bookmarking and state persisting for latter finishing.
- **E2E tests:** Only unit and baisc a11y tests are in place. E2E (e.g. Playwright) would cover the full flow in a browser; skipped to limit scope.
- **CI pipeline:** No automated run of tests/lint/build on push or PR. Assumed to be handled by the surrounding org.
- **Storybook for step components:** Only UI primitives have stories. Step screens would need `CheckoutProvider` and mocks; left for a possible second phase.
- **Input masking for phone and ZIP:** Only card number and expiration are masked. Phone and ZIP could be masked for consistency; left out to avoid scope creep.
- **Autofill:** Disabled; could be enabled later for better UX.
- **Animations/transitions:** No motion between steps or on success.

---

## Scope change response

**PM ask:** “Can we add an SMS opt-in checkbox to Contact Information?”

**What would I change in the current implementation**

- **Types** (`types/checkout.ts`): Add `smsOptIn: boolean` (or `smsOptIn?: boolean` if optional) to `PersonalDetails`. Context and payload stay aligned with that shape.
- **Context** (`contexts/checkout-context.tsx`): Set initial `personalDetails.smsOptIn` (e.g. `false` for opt-in). No other context changes needed.
- **UI** (`components/steps/personal-details.tsx`): Add a checkbox (e.g. `CheckboxWithLabel`) with copy like “Send me appointment reminders via SMS”, wired with `register('smsOptIn')` or a `Controller`. Submission already sends `personalDetails`, so the new field is included automatically.
- **Tests:** Update PersonalDetails tests (default value, submit with opt-in on/off). Adjust context tests if they assert the shape of `personalDetails`. Add or update an a11y test for the new control.
- **Docs / Storybook:** If we had a PersonalDetails story, add a control for `smsOptIn`. No change to generic UI component stories unless we introduce a new variant.

**How to handle it in a real scenario**

- **Clarify with PM:** Define exact placement, final label and helper text, required vs optional, and default (opt-in vs opt-out). If the flow shows phone only when opted in.
- **Scope and timing:** I would treat it as a small change (e.g. 1–2 hours including tests and copy). If it’s “late in the build”, agree whether it ships in the current iteration or goes to the backlog, and what (if anything) is deprioritized.
- **Compliance:** SMS consent often has legal requirements (disclosure, wording, opt-in proof). Confirm with Product/Legal that the copy and behavior are compliant before implementing.
- **Backend / API:** Confirm the API accepts an `smsOptIn` (or agreed) field and when it will be available. If the backend isn’t ready, we can add the field to the payload and document that the backend will consume it later.
- **Document:** In the PR, mention the new field, where it appears, and any copy or compliance notes. Update README or product docs if they describe the checkout payload or contact step.
