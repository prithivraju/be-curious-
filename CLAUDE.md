# RBI Learning Engine

## Project Path
`C:/rbi-learning-engine/rbi-learning-engine`

## Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **State:** Zustand
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Utils:** date-fns, clsx

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Architecture
```
src/
├── App.tsx              # Root — view router (dashboard/session/syllabus/topic-detail)
├── main.tsx             # Entry point
├── store/
│   └── learningStore.ts # Zustand store (schedule, insights, nudges, export)
├── components/
│   ├── dashboard/       # Dashboard.tsx — main landing screen
│   ├── session/         # LearningSession.tsx — active study session
│   ├── syllabus/        # SyllabusBrowser.tsx, TopicCard.tsx
│   ├── topic/           # TopicDetailView.tsx, ToyRenderer.tsx
│   ├── content/         # CollapsibleSection, SectionRenderer, TopicReader
│   ├── review/          # RetentionCard.tsx
│   └── toys/            # Interactive learning widgets
├── data/
│   ├── content/         # Topic content (Paper 1 & Paper 3)
│   │   ├── paper1/      # indian-economy, growth-and-development, globalization, social-structure
│   │   └── paper3/      # financial-system, financial-markets, ethics, management, general-topics
│   └── syllabus/        # paper1.ts, paper3.ts — syllabus structure
├── export/              # Obsidian & Notion export scripts
└── styles/
    └── globals.css
```

## Views (App.tsx routing)
- `dashboard` — Home screen, start session, open pouch, export, browse syllabus
- `session` — Active learning session with scheduled topics
- `syllabus` — Browse Paper 1 & Paper 3 syllabus
- `topic-detail` — Deep dive into a specific topic with content reader

## Content Status
- **Paper 1:** indian-economy (2 parts), growth-and-development, globalization (2 parts), social-structure
- **Paper 3:** financial-system (2 parts), financial-markets, ethics, management (2 parts), general-topics (2 parts)
- **Content phase: COMPLETE**

## Current Phase
- **Design & UI implementation** — content is done, now working on visual design, layout, and UX polish

## Key Patterns
- Views managed via `useState<View>` in App.tsx (no router library)
- Zustand store handles all learning state (schedule, insights, nudges)
- Content files are TypeScript modules in `src/data/content/`
- Framer Motion `AnimatePresence` for view transitions
- Export to Obsidian (markdown) and Notion (JSON) supported
