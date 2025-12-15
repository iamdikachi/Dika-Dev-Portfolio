# Portfolio Dashboard

A modern, responsive portfolio dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI with blue gradient theme
- 📱 Fully responsive (desktop dashboard, mobile single-page)
- ⚡ Built with Next.js 14 App Router
- 🔷 TypeScript for type safety
- 🎭 Smooth animations and transitions
- 📊 Collapsible sidebar on desktop
- 🎯 Multiple sections: Home, Profile, About, Projects, Experience, Skills, Resume, Contact, Buy Me a Coffee

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-dashboard/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app router files
│   ├── components/     # React components
│   │   ├── layout/    # Layout components
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI components
│   ├── data/          # Static data
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utilities and types
└── ...config files
```

## Customization

### Update Your Information

1. **Personal Info**: Edit `src/data/` files:
   - `projects.ts` - Your projects
   - `experience.ts` - Work experience
   - `skills.ts` - Technical skills
   - `socialLinks.ts` - Social media links

2. **Section Content**: Modify components in `src/components/sections/`

3. **Colors**: Update Tailwind config in `tailwind.config.js`

### Add New Sections

1. Create component in `src/components/sections/YourSection.tsx`
2. Add menu item in `src/data/menuItems.ts`
3. Import and add to `sectionComponents` in `src/components/layout/DashboardLayout.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## License

MIT License - feel free to use this for your own portfolio!

## Support

If you found this helpful, consider buying me a coffee! ☕

---

Built with ❤️ using Next.js