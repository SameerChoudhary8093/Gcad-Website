<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## Project: GCAD X SGVU — Design College Landing Page

### Stack
- React + TypeScript + Vite + Tailwind CSS
- shadcn/ui components in `src/components/ui/`
- All page sections live in `src/screens/Body/sections/<SectionName>/`

### Responsive Breakpoints (Tailwind)
- mobile: default (< 640px)
- sm: 640px+
- md: 768px+
- lg: 1024px+
- xl: 1280px+

### Design Tokens (inline, not in tailwind.config.js)
- Navy: `#1a2b48`
- Orange accent: `#fd8b00`
- Orange hover: `#e07d00`
- BG light: `#f7f9fc`
- BG grey: `#f2f4f7`
- Footer dark: `#031632`

### Conventions
- All image assets hosted at `https://c.animaapp.com/mnyx7rno5LIHte/img/`
- Section padding pattern: `px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24`
- Max content width: `max-w-screen-xl mx-auto`
- Font families: `[font-family:'Plus_Jakarta_Sans',Helvetica]` (headings), `[font-family:'Inter',Helvetica]` (body)
- Navbar hamburger state managed in `Body.tsx` with useState
</coder>
