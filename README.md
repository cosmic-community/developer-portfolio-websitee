# Developer Portfolio Website

A professional developer portfolio website built with Next.js 15 and Cosmic CMS. This responsive portfolio showcases your projects, skills, work experience, and client testimonials in a modern, visually appealing design.

![App Preview](https://imgix.cosmicjs.com/7527a110-8daf-11f0-ad97-53722e3820bc-photo-1556742049-0cfed4f6a45d-1757444515131.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🚀 **Dynamic Project Gallery** - Showcase your work with filtering by technology and status
- 💡 **Interactive Skills Matrix** - Display your technical expertise organized by category
- 📈 **Experience Timeline** - Professional work history with achievements and technologies
- ⭐ **Client Testimonials** - Social proof with star ratings and project connections
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🔍 **SEO Optimized** - Proper meta tags and structured data for search engines
- 📊 **Real-time Updates** - Content automatically syncs with your Cosmic CMS bucket

## ## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c0788f2bc0a45649cdb27a&clone_repository=68c07ab22bc0a45649cdb2a3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view your portfolio

## Cosmic SDK Examples

### Fetching Projects
```typescript
const projects = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Skills by Category
```typescript
const skills = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'metadata'])
```

### Fetching Work Experience
```typescript
const workExperience = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['id', 'title', 'metadata'])
```

## Cosmic CMS Integration

This portfolio integrates with the following Cosmic object types:

- **Projects** - Showcase your development work with images, descriptions, and technology stacks
- **Skills** - Display your technical expertise organized by category and proficiency level
- **Work Experience** - Timeline of your professional career with achievements
- **Testimonials** - Client feedback with ratings and connected projects

All content is dynamically pulled from your Cosmic bucket and rendered in real-time, ensuring your portfolio is always up-to-date.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy automatically on every push to main branch

### Netlify
1. Connect your repository to Netlify
2. Set build command to `bun run build`
3. Set publish directory to `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables for Production
Set these variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

The portfolio will automatically display your projects, skills, experience, and testimonials from your Cosmic bucket.
<!-- README_END -->