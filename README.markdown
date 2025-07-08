# My Portfolio

A responsive portfolio website built with Angular 20 and Tailwind CSS, showcasing my projects hosted on Vercel. This site highlights my skills in full-stack development, featuring a clean, modern design with a dynamic project grid.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens using Tailwind CSS utilities.
- **Dynamic Project Cards**: Displays Vercel-hosted projects with names, descriptions, tech stacks, and live links.
- **Angular 20 Features**: Utilizes zoneless change detection (developer preview), stable signals API, and modern control flow (`@for`) for performance and developer experience.
- **Fast Deployment**: Hosted on Vercel with automatic builds and global CDN for optimal performance.
- **SEO and Accessibility**: Includes meta tags for search engine visibility and ARIA labels for accessibility.

## Tech Stack
- **Frontend**: Angular 20, Tailwind CSS
- **Hosting**: Vercel
- **Build Tools**: Vite (Angular 20’s default), TypeScript 5.8
- **Version Control**: Git, GitHub
- **Data Management**: Hard-coded project data with Angular signals

## Prerequisites
- **Node.js**: v20.11.1 or higher
- **Angular CLI**: v20.0.5 (`npm install -g @angular/cli@20`)
- **Vercel CLI**: `npm install -g vercel`
- **Git**: For version control
- **GitHub Account**: For repository hosting
- **Vercel Account**: For deployment

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Verify Tailwind CSS setup**:
   Ensure `tailwind.config.js` and `src/styles.css` include:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Running Locally
1. **Start the development server**:
   ```bash
   ng serve
   ```
2. Open `http://localhost:4200` in your browser to view the portfolio.
3. Update `src/app/services/project.service.ts` to add your Vercel-hosted projects:
   ```typescript
   private projects = signal<Project[]>([
     {
       name: 'Your Project Name',
       description: 'Project description.',
       techStack: ['Tech1', 'Tech2'],
       liveUrl: 'https://your-project.vercel.app'
     }
     // Add more projects
   ]);
   ```

## Deployment
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. **Deploy to Vercel**:
   - Install Vercel CLI: `npm install -g vercel`
   - Log in: `vercel login`
   - Deploy: `vercel --prod`
3. **Configure public access**:
   - In Vercel’s dashboard, go to **Settings > Deployment Protection** and set “Vercel Authentication” to “None”.
4. Access your portfolio at the provided URL (e.g., `https://my-portfolio.vercel.app`).
5. Ensure `vercel.json` is configured:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist/my-portfolio/browser" }
       }
     ],
     "routes": [
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

## Usage
- **View Projects**: Browse the project grid to see details and visit live Vercel-hosted apps.
- **Update Projects**: Edit `src/app/services/project.service.ts` to add or modify projects, then redeploy.
- **Analytics**: Add Google Analytics in `src/index.html` to track visitor interactions.
- **SEO**: Update meta tags in `src/index.html` for better search visibility.

## Project Structure
```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── header/             # Header component
│   │   ├── footer/             # Footer component
│   │   ├── project-card/       # Project card component
│   │   ├── models/             # Project interface
│   │   ├── services/           # Project service with signals
│   │   ├── app.html            # Main template
│   │   ├── app.ts              # Main component
│   ├── styles.css              # Tailwind CSS styles
│   ├── index.html              # Entry point with meta tags
├── tailwind.config.js          # Tailwind configuration
├── vercel.json                 # Vercel deployment config
├── package.json                # Dependencies and scripts
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License
MIT License. See [LICENSE](LICENSE) for details.

---

**Live Demo**: [https://my-portfolio.vercel.app](https://my-portfolio.vercel.app)
**GitHub Repository**: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)
**Contact**: [your.email@example.com](mailto:your.email@example.com) or [LinkedIn](https://linkedin.com/in/yourusername)
