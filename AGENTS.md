# AGENTS.md — Rate Global Website

## 1. Project Identity

- **Project:** Rate Global Company Profile Website
- **Repository:** `rate-global-website`
- **Purpose:** Build a professional, responsive company website that showcases Rate Global's web development services, technical expertise, portfolio, and business contact options.

The website must communicate credibility, technical competence, and business value while generating qualified project inquiries.

---

## 2. Source of Truth

Before implementing a feature, inspect the existing codebase and read the relevant project documentation.

Follow these documents in order:
1. `docs/SRS.md` — approved functional and non-functional requirements.
2. `docs/PROJECT-CONTEXT.md` — confirmed company information and business constraints.
3. `docs/DESIGN-SYSTEM.md` — visual design tokens and component standards.
4. Existing application architecture and established coding conventions.

If documents conflict, identify the conflict and ask for clarification when it affects scope, security, architecture, or business behavior.

Never invent company facts, clients, testimonials, certifications, performance metrics, contact information, or project outcomes.

Use clearly labeled placeholders when approved content is unavailable.

---

## 3. Mandatory Workflow

For every non-trivial task:
1. Inspect the existing project structure and relevant files.
2. Identify applicable requirements and skills.
3. Summarize the intended change and implementation approach.
4. Identify dependencies, risks, and affected components.
5. Implement the smallest complete solution.
6. Run the relevant lint, type-check, test, and build commands available in the project.
7. Review the changes for regressions, accessibility, security, and responsiveness.
8. Report changed files, verification results, and remaining issues.

For a small, low-risk change, use a proportionately lightweight workflow.

Do not claim a test, build, or deployment succeeded unless it was actually executed and its result was checked.

---

## 4. Repository and Architecture Rules

- Preserve the existing framework and project architecture unless an approved change requires otherwise.
- Inspect `package.json`, configuration files, and existing components before choosing tools.
- Reuse existing components and utilities when appropriate.
- Keep components focused on clear responsibilities.
- Separate content, presentation, and business logic when it improves maintainability.
- Use the project's existing routing and data-fetching conventions.
- Avoid unnecessary dependencies and architectural complexity.
- Do not duplicate components to solve problems that can be addressed through reusable patterns.
- Do not rewrite unrelated files during a focused task.
- Follow existing formatting and naming conventions.

Do not assume a specific framework or library until it is confirmed by the repository or project owner.

---

## 5. Design and User Experience Rules

The website must feel like a professional web development company website, not a generic template.

- Follow `docs/DESIGN-SYSTEM.md`.
- Maintain consistent typography, spacing, colors, borders, and component states.
- Use clear visual hierarchy and readable content widths.
- Create responsive layouts for mobile, tablet, and desktop.
- Prioritize the actual content and the user's journey.
- Use meaningful whitespace and consistent alignment.
- Avoid excessive gradients, glass effects, shadows, animation, and decorative elements.
- Avoid generic layouts that repeat the same card grid across every section.
- Do not use emojis as substitutes for professional interface icons.
- Use authentic project screenshots and approved brand assets whenever available.
- Provide loading, empty, error, hover, focus, and disabled states where applicable.
- Respect reduced-motion preferences.
- Do not introduce new design patterns without a clear reason.

---

## 6. Component and Code Quality Rules

- Prefer small, composable, reusable components.
- Use descriptive names for components, variables, functions, and files.
- Avoid giant page components that mix unrelated responsibilities.
- Avoid unnecessary abstractions for one-off requirements.
- Avoid deeply nested conditional rendering when simpler logic is possible.
- Use the project's established type system and strictness settings.
- Avoid `any` or equivalent unsafe escape hatches unless justified.
- Avoid unexplained magic numbers and duplicated configuration.
- Remove unused imports, variables, and dead code.
- Keep comments focused on non-obvious decisions.
- Do not suppress lint or type errors merely to make checks pass.

---

## 7. Responsive Design

Every user-facing feature must be tested at representative viewport sizes.

- Mobile navigation must work with touch and keyboard input.
- Content must not overflow horizontally without an intentional design reason.
- Images must scale without distortion.
- Forms must remain usable on small screens.
- Buttons and links must have comfortable interactive areas.
- Text must remain readable without excessive zooming.
- Do not rely exclusively on hover for essential functionality.
- Avoid layout shifts caused by images, fonts, and dynamic content.

---

## 8. Accessibility

Target WCAG 2.2 Level AA where applicable.

- Use semantic HTML.
- Provide labels for form controls.
- Provide meaningful alternative text for informative images.
- Ensure keyboard navigation and visible focus indicators.
- Maintain sufficient text and interface contrast.
- Use buttons for actions and links for navigation.
- Provide accessible validation errors and status messages.
- Maintain logical heading hierarchy.
- Ensure interactive elements have accessible names.
- Respect reduced-motion settings.
- Do not communicate important information through color alone.

---

## 9. Performance

- Optimize images and serve appropriate image dimensions.
- Use modern image formats where supported by the existing stack.
- Lazy-load appropriate below-the-fold images.
- Do not lazy-load the primary above-the-fold image when doing so harms loading performance.
- Minimize unnecessary JavaScript and client-side rendering.
- Avoid unnecessary third-party scripts.
- Use appropriate font loading and caching strategies.
- Avoid layout shifts.
- Measure performance before claiming an optimization improved it.

Target Core Web Vitals:
- **LCP:** 2.5 seconds or less.
- **INP:** 200 milliseconds or less.
- **CLS:** 0.1 or less.

Treat these as performance goals, not guaranteed outcomes.

---

## 10. SEO

- Use meaningful page titles and meta descriptions.
- Maintain a logical heading hierarchy.
- Use descriptive URLs.
- Add appropriate canonical metadata.
- Provide an XML sitemap and appropriate robots.txt configuration.
- Add Open Graph metadata when relevant.
- Use structured data only when accurate and applicable.
- Add descriptive alternative text to informative images.
- Avoid duplicate page metadata.
- Do not fabricate ratings, reviews, business addresses, or structured data.
- Do not promise specific search engine rankings.

---

## 11. Security and Privacy

- Never commit secrets, tokens, passwords, or private credentials.
- Never expose server-only environment variables to the browser.
- Validate untrusted data on the server when a backend is involved.
- Sanitize or safely render user-controlled content.
- Protect inquiry forms against spam and abuse.
- Avoid collecting unnecessary personal information.
- Do not log sensitive inquiry data unnecessarily.
- Follow least-privilege access principles.
- Review dependency and third-party integration risks.
- Do not disable security controls to bypass a development problem.
- Never introduce unsafe HTML rendering without a justified and reviewed need.

---

## 12. Forms and User Feedback

- Validate required fields and input formats.
- Show clear, actionable validation errors.
- Prevent unintended duplicate submissions where practical.
- Show a success message only after the submission destination confirms success.
- Show a useful error state when submission fails.
- Preserve user input when practical after a recoverable error.
- Provide accessible status announcements.
- Never hardcode fake successful form submissions in production.
- Never expose private form-processing credentials in client code.

---

## 13. Testing Requirements

Before completing a task, run the relevant checks supported by the project:
- Lint.
- Type checking.
- Unit tests.
- Integration tests.
- Production build.
- Browser or end-to-end tests when relevant.

For UI changes, verify responsive layouts and key interactions.

For form changes, test valid input, invalid input, successful submission, and failure handling.

For routing changes, verify valid routes, navigation, metadata, and error states.

If a check cannot run, explain why. Do not claim unexecuted tests passed.

---

## 14. Dependency and Configuration Rules

- Prefer existing dependencies when they adequately solve the problem.
- Add a dependency only when its benefit justifies its maintenance and security costs.
- Check compatibility with the current framework and package manager.
- Do not replace package managers without approval.
- Do not upgrade major framework versions as part of an unrelated feature.
- Never overwrite environment configuration without inspecting it.
- Keep `.env` files containing secrets out of version control.
- Maintain an accurate `.env.example` where needed.

---

## 15. Change Safety

- Do not delete existing features without approval.
- Do not perform destructive database, repository, or deployment operations without explicit authorization.
- Do not overwrite user changes or unrelated work.
- Inspect the current diff before finalizing.
- Keep changes focused and explain significant trade-offs.
- Ask before making irreversible or high-impact changes.
- Do not silently change public APIs, routes, or data contracts.

---

## 16. Completion Report

At the end of each task, provide:
1. Summary of what was implemented.
2. Important files created or modified.
3. Requirements addressed.
4. Tests and commands executed.
5. Actual test results.
6. Known limitations or unresolved issues.
7. Any follow-up work required.

A task is complete only when the implementation is consistent with the requirements and the applicable verification steps have been performed.

---

## 17. Definition of Quality

Prefer correct, maintainable, accessible, secure, and production-ready code over quick visual approximations.

Do not optimize for code volume. Optimize for user value, reliability, clarity, and long-term maintainability.
