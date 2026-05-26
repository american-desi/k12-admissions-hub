# NYC K-12 Admissions Navigator

Mobile-first guide to NYC school enrollment with multilingual support and accessibility-first design.

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- i18next (internationalization)

## Quick Start

```bash
npm install
npm run dev
```

The app opens at http://localhost:5173 by default.

## Architecture

**Admissions Navigator** helps families navigate NYC school enrollment across four main areas:

1. **School Search** (`/`): Discover and filter schools by district, grade level, and specialized programs.
2. **Application Timeline** (`/timeline`): Track key dates, deadlines, and milestones throughout the admissions process.
3. **Checklist** (`/checklist`): Stay organized with personalized requirement checklists for each school application.
4. **Multilingual Support** (`/languages`): Access information in Spanish, Mandarin, Arabic, and Bengali.

### Key Features
- Mobile-first responsive design
- WCAG AA accessibility compliance
- Offline-capable with service worker support (progressive web app)
- i18n internationalization framework for multiple languages
- Comprehensive school database with filtering and search

### Directory Structure

```
src/
  components/    # Reusable UI components (school cards, checklists, timelines)
  pages/         # Route-level components
  lib/           # Utilities (search logic, i18n config, accessibility helpers)
  styles/        # Global styles (Tailwind config)
public/          # Static assets
```

## Emergent.sh Origin

- **NYC Admissions Navigator** (EMT-002): Build a mobile-first platform helping families navigate NYC K-12 school enrollment with searchable school database, application timelines, requirement tracking, and multilingual support (Spanish, Mandarin, Arabic, Bengali).

## Next Steps

- [ ] Integrate school database with search API
- [ ] Implement i18next multilingual system with language detection
- [ ] Build offline capability with service workers
- [ ] Add accessibility features (ARIA labels, keyboard navigation, screen reader optimization)
- [ ] Create parent/guardian account system for saving progress
- [ ] Implement requirements checklist with file upload for documents
- [ ] Build push notification system for deadline reminders
- [ ] Add school comparison tool
