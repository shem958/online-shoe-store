# Shoe Haven 👟

A premium, production-grade online shoe store web application. Reimagined and modernized from a legacy React Single Page Application (CRA) into a high-performance web experience built with **Next.js (App Router)**, **TypeScript**, **Material UI (MUI)**, and **Redux Toolkit**.

---

## ✨ Features

- **Dynamic E-Commerce Architecture**: Powered by Next.js 16 and React 19, utilizing App Router for optimized static page generation and dynamic routing.
- **Strict Type Safety**: Completely written in TypeScript for reliable compile-time checks and type-safe component props, state hooks, and database models.
- **Premium Component UI**: Styled entirely with Material UI (MUI), featuring a responsive layout, sleek cards, hover effects, and modern typography (Outfit & Inter fonts).
- **Global Cart State Management**: Managed via Redux Toolkit, supporting quantity adjustments, item removals, and grouping nested variant options (selected Size and Color).
- **Dynamic Search & Filtration**: Fast search matching and Category filters (All, Running, Basketball, Casual, Tennis) built using reactive MUI Chips.
- **Robust checkout**: Includes shipping and billing form layouts, real-time client-side inputs verification (card number, expiration dates, email structure), and a successful purchase receipt state.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **UI & Icon Library**: Material UI (MUI) & `@mui/icons-material`
- **State Management**: Redux Toolkit & `react-redux`
- **Build System**: Next.js Turbopack

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shem958/online-shoe-store.git
   cd online-shoe-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To create an optimized production build:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```
