# Miranda 🟣⚖️

**You Have the Right to Know.**  
_Miranda_ is a simple, trustworthy rights-based chatbot that helps people understand their legal rights—no law degree required.

---

## 🛠 Features

- 🤖 **Chatbot**: Ask Miranda legal rights questions in plain language
- 📚 **Know Your Rights**: Detailed, color-coded info across categories like:
  - Police Stops and Searches
  - Immigration & ICE
  - Tenant & Housing Rights
  - Free Speech & Protesting
  - Workplace & Labor Rights
  - Student & School Rights
- 💬 **"I'm in a Situation..." Cards**: Quick response scripts, Do/Don't lists, and downloadable cards
- 🎨 Clean, responsive UI with accessible color scheme and emojis for clarity

---

## 🧰 Tech Stack

- **Frontend**: React + React Router
- **Styling**: CSS Modules with a global style sheet
- **Animation**: `react-simple-typewriter` for typewriter prompt effects
- **Embedding**: Hugging Face Spaces iframe integration for the chatbot

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SkylarS300/miranda-webapp.git
cd miranda-webapp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

## 🗂 Folder Structure
```bash
public/
  images/          # Logo and hero image
src/
  components/      # Reusable components like SituationFlow
  pages/           # React Router pages (Home, Ask, Rights, etc.)
  styles/          # CSS modules and global styles
```
