# 🎓 RBI Grade B Learning Engine

> **Physics-powered, gamified learning for RBI Grade B Phase-2 exam preparation**

Built with Rauno Freiberg's interaction design principles. Transform boring syllabus into playable toys. Capture insights like catching golden pills.

![Status](https://img.shields.io/badge/Status-Active_Development-green)
![Target](https://img.shields.io/badge/Target-July_2025-blue)
![Daily](https://img.shields.io/badge/Time-30_mins%2Fday-orange)

---

## 🎮 What is This?

A learning system that:
- **Transforms** syllabus content into interactive "Playable Toys"
- **Uses physics** for satisfying interactions (spring animations, drag & drop, snap feedback)
- **Captures insights** as "Golden Pills" you drag to your pouch
- **Adapts** to your pace - complete early? Get tomorrow's content. Behind? Gentle nudges.
- **Exports** to Obsidian, Notion, NotebookLM, Anki

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         🎭 ORCHESTRATOR                                 │
│    Daily 30-min plan • Progress tracking • Adaptive scheduling          │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │
     ┌───────────────┬───────────┼───────────┬───────────────┐
     ▼               ▼           ▼           ▼               ▼
┌─────────┐   ┌───────────┐ ┌─────────┐ ┌─────────┐   ┌───────────┐
│📚SYLLABUS│   │📰 CURRENT │ │📝 PYQ   │ │🎨DESIGNER│   │🔬PEDAGOGY │
│RESEARCHER│   │  AFFAIRS  │ │  AGENT  │ │  AGENT  │   │  ENGINE   │
└─────────┘   └───────────┘ └─────────┘ └─────────┘   └───────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone or download the project
cd rbi-learning-engine

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### First Session

1. Click **"Start Today's Session"**
2. **Play with toys** - drag sliders, toggle switches, categorize items
3. **Capture insights** - drag golden pills to your pouch (bottom-right)
4. **Review** - quick spaced repetition at the end
5. **Export** - send to Obsidian/Notion when ready

---

## 📅 Daily Session Structure (30 mins)

| Phase | Time | What Happens |
|-------|------|--------------|
| 🌅 Brief | 0-5 min | See today's topics, CA items, PYQ hints |
| 🎮 Learn | 5-20 min | Interact with 3-4 toys per topic |
| 💊 Capture | 20-25 min | Drag insights to pouch |
| 🔄 Review | 25-30 min | Spaced repetition cards |

---

## 🎯 Adaptive Scheduling

### Completed Early?
> "🚀 Ahead of schedule! Starting tomorrow's topics..."

The next day's content unlocks immediately. Keep your momentum!

### Behind Schedule?
> "⚠️ You have 3 pending topics. Complete them first!"

You'll see a nudge banner. Complete pending items to unlock new content.

### Missed Days?
A "catch-up" mini-schedule (15 mins) focuses on highest-priority missed topics.

---

## 🧸 Toy Types

### 1. SliderToy 📊
Drag to see cause-effect relationships.
- Fiscal policy → GDP impact
- Repo rate → Inflation
- FDI → Currency value

### 2. ToggleTrap 🎚️
Binary choices with trap detection.
- Repo vs Reverse Repo (common confusion!)
- Maslow vs Herzberg
- GDP vs GNP

### 3. AttributionMap 🗂️
Drag items to correct buckets.
- Classify banks (PSB/Private/Foreign)
- Categorize NPA levels
- Sort Maslow's needs

### 4. InsightToken 💊
Golden pills containing key facts.
- Drag to pouch to capture
- Auto-added to spaced repetition
- Exported to your notes

---

## 📤 Export Options

### Obsidian
```bash
npm run export:obsidian
```
Generates markdown with:
- Grouped by topic
- Tags for searching
- Review schedule table

### Notion
```bash
npm run export:notion
```
JSON file ready for Notion API import with database schema.

### NotebookLM
JSON structured for AI-powered study sessions.

### Anki
Tab-separated flashcard format for direct import.

---

## 🗂️ Project Structure

```
rbi-learning-engine/
├── src/
│   ├── components/
│   │   ├── toys/           # Playable interactive components
│   │   │   ├── SliderToy.tsx
│   │   │   ├── ToggleTrap.tsx
│   │   │   ├── AttributionMap.tsx
│   │   │   └── InsightToken.tsx
│   │   ├── dashboard/      # Main dashboard
│   │   ├── session/        # Learning session flow
│   │   └── review/         # Spaced repetition cards
│   ├── agents/             # Claude Code agent prompts
│   │   ├── orchestrator.md
│   │   ├── pyq-agent.md
│   │   ├── designer.md
│   │   └── current-affairs.md
│   ├── data/
│   │   ├── syllabus/       # Paper-I and Paper-III topics
│   │   ├── pyqs/           # Previous year question analysis
│   │   └── current-affairs/
│   ├── store/              # Zustand state management
│   ├── export/             # Export utilities
│   └── styles/             # Tailwind + Rauno physics CSS
├── .claude/
│   └── commands/           # Custom slash commands
└── package.json
```

---

## 🧠 Multi-Agent Setup (Claude Code)

To run agents autonomously using git worktrees:

### Setup Worktrees

```bash
# Main repo
git init
git add .
git commit -m "Initial commit"

# Create agent worktrees
git worktree add ../rbi-syllabus-agent -b syllabus-agent
git worktree add ../rbi-ca-agent -b ca-agent
git worktree add ../rbi-pyq-agent -b pyq-agent
git worktree add ../rbi-designer-agent -b designer-agent
```

### Run Agents

In separate terminals:

```bash
# Terminal 1: Syllabus Agent
cd ../rbi-syllabus-agent
claude --print "Read src/agents/syllabus-researcher.md and update src/data/syllabus/"

# Terminal 2: CA Agent
cd ../rbi-ca-agent
claude --print "Read src/agents/current-affairs.md and generate today's CA items"

# Terminal 3: PYQ Agent
cd ../rbi-pyq-agent
claude --print "Read src/agents/pyq-agent.md and analyze priority scores"

# Terminal 4: Designer Agent
cd ../rbi-designer-agent
claude --print "Read src/agents/designer.md and generate toys for today's topics"
```

---

## 📊 Syllabus Coverage

### Paper-I: Economic & Social Issues
- Growth and Development (8 topics)
- Indian Economy (14 topics)
- Globalization (5 topics)
- Social Structure (5 topics)

### Paper-III: Finance & Management
- Financial System (8 topics)
- Financial Markets (4 topics)
- General Topics - Finance (11 topics)
- Management & OB (12 topics)
- Ethics (4 topics)

**Total: ~71 micro-topics**

---

## 📆 5-Month Roadmap (Feb → July)

| Month | Focus | Topics |
|-------|-------|--------|
| Feb | Foundation | Growth, Fiscal, Banking Basics |
| Mar | Deep Dive | Reforms, Markets, RBI Functions |
| Apr | Expansion | Social Issues, Management Theory |
| May | Consolidation | High-yield revision, Mocks |
| Jun | Exam Mode | Full revision, PYQ practice |

---

## 🔧 Configuration

### Tailwind Config
Dark theme with Rauno-inspired animations in `tailwind.config.js`.

### Physics Settings
Spring animations configured in CSS:
```css
--spring-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Session Timing
Default: 30 minutes. Adjust in `src/store/learningStore.ts`.

---

## 🤝 Contributing

This is a personal learning project, but feel free to:
- Fork and adapt for other exams
- Suggest new toy types
- Report bugs

---

## 📜 License

MIT - Use freely for your exam prep!

---

## 🙏 Acknowledgments

- **Rauno Freiberg** - Design principles from [rauno.me](https://rauno.me) and [devouringdetails.com](https://devouringdetails.com)
- **Andy Matuschak** - Spaced repetition research
- **Nir Eyal** - "Hooked" behavioral design

---

> **"Less motion for frequency, more motion for novelty."**
> 
> — Rauno Freiberg

Good luck with your RBI Grade B exam! 🎯
