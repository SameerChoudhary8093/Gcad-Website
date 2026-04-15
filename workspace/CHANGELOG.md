<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-04-14 — Full Responsive Conversion
- Replaced `min-w-[1280px]` root with `w-full overflow-x-hidden`; added hamburger nav in `Body.tsx`
- `HeroBannerSection`: single-col on mobile → two-col on lg; fluid type scale
- `WhyChooseGucedSection`, `AcademicProgrammesSection`, `MentorshipProgramSection`: grid cols responsive (1→2→3/6)
- `AdmissionsInfoSection`, `AdmissionsCallToActionSection`, `CentreOfArtDesignSection`: stacked on mobile, side-by-side on sm+
- `CampusLifeExperienceSection`: main card full-width mobile, lg:col-span-2; side cards 2-col row on mobile
- `IndustryPartnersSection`, `WorldClassExperienceSection`, `FooterLinksSection`: fluid padding, responsive grids
- All sections: replaced fixed `px-32`/fixed-px sizing with `px-4 sm:px-6 lg:px-8` scale + `max-w-screen-xl mx-auto`
</changelog>
