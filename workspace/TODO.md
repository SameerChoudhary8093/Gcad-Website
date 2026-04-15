<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="add-routing">
Add page routing (Programs, About, Admissions)
Wire up nav links to dedicated pages using React Router
</todo>

<todo id="form-validation">
Add form validation to the Hero application form
Validate required fields, email format, phone number with helpful error messages
</todo>

<todo id="seo-meta">
Add SEO meta tags and Open Graph data
Improve discoverability with proper title, description, og:image for social sharing
</todo>

<todo id="animations">
Add scroll-triggered entrance animations
Use Intersection Observer or a light library (e.g. framer-motion) to animate sections as they enter the viewport
</todo>

<todo id="dark-mode">
Add dark mode toggle
Leverage Tailwind dark: classes and a localStorage-persisted preference
</todo>
