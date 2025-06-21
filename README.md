<div align="center">
  <a href="https://www.bloggen.dev">
<!--     <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img alt="Next.js logo" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture> -->
  <h1>Bloggen</h1>
  </a>


<a href="https://www.silverthreadlabs.com">
  <img alt="Made by Silverthread Labs" src="https://img.shields.io/badge/MADE%20BY%20SILVERTHREAD%20LABS-000000.svg?style=for-the-badge&labelColor=000000">
</a>

<a href="https://www.npmjs.com/package/create-bloggen-app">
  <img alt="NPM version" src="https://img.shields.io/badge/NPM-v1.0.2-blue.svg?style=for-the-badge&labelColor=000000">
</a>

<a href="">
  <img alt="License" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
</a>

<a href="https://www.reddit.com/r/DukeOfAllTrades/">
  <img alt="Join the community on Reddit" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=reddit&labelColor=000">
</a>


</div>

**Bloggen SEO Starter** is a fast, minimal Next.js template for building SEO-optimized, content-rich websites—not just blogs. It’s the first official starter in the Bloggen.dev ecosystem, showcasing how to use general-purpose MDX architecture to power full websites, dynamic pages, and web apps with structured content.

Built with MDX powered by [Fumadocs](https://github.com/xetera/fumadocs), it lets you create flexible routes like `/blog`, `/docs`, `/services`, or `/product/x`—all content-driven, fully typed, and SEO-ready out of the box.

**Designrift**, our theming engine, gives you powerful visual control with:

* Radix-based color palettes
* WCAG-compliant contrast
* Built-in dark mode
* Single-step theme setup and override

This template is tailored as an agency example, but easily extended for personal sites, SaaS landing pages, or documentation-heavy apps. Think of it as your baseline for building fast, indexable, and accessible websites using the full potential of the Bloggen.dev platform.

## Getting Started

To get started with Bloggen SEO Starter, you have two options:

## Option 1: Quick Start (Recommended)

```bash
npx create-bloggen-app
```

## Option 2: Manual Installation

1. Clone the repository:

```bash
git clone https://github.com/silverthreadlabs/bloggen-seo-starter.git
```

2. Navigate to the project directory:

```bash
cd bloggen-seo-starter
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Usage Examples

Once you have the application running, you can create and manage your blog posts easily. Here’s how to create a new blog post:

1. Navigate to the "Create Post" section.
2. Fill in the title, content, and tags for your post.
3. Click "Publish" to make your post live.

### Example of Creating a Blog Post

```mdx
# My First Blog Post

This is an example of a blog post created using Bloggen SEO Starter. 

## SEO Tips
- Use relevant keywords.
- Optimize images with alt text.
```

## Features

Developer experience first, extremely flexible code structure and only keep what you need:

### Core Stack
* ⚡ **Next.js App Router**<br>
Built on the latest Next.js App Router.
* 🔷 **TypeScript 5**<br>
  Latest TypeScript with strict type checking and modern language features for enhanced developer productivity and code reliability.
* 💎 **Tailwind CSS v4**<br>
  Utility-first styling with the latest Tailwind release.
* ✅ **Strict Mode**<br>
  Enforced React and TypeScript strict flags for predictable, bug-resistant behaviour.
* ♻️ **Type-Safe Env Vars**<br>
  Automatically typed environment variables via Zod for zero surprises.
* 🛡️ **Zod Validation**<br>
  Schema-based validation on both client and server to guarantee data integrity.
* 🔒 **Zero-Config Security**<br>
  Built-in headers (CSP, HSTS) and hardened defaults.


### Developer Experience
* 📏 **ESLint 9**<br>
  Preconfigured with Next.js–friendly rules and comprehensive linting presets including [`@eslint/js`](https://www.npmjs.com/package/@eslint/js), [`typescript-eslint`](https://typescript-eslint.io/), [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react), [`@next/eslint-plugin-next`](https://nextjs.org/docs/app/building-your-application/configuring/eslint), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier), [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import), and [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise).
* 🖋️ **Prettier 3**<br>
  Opinionated code formatting to keep your team's style consistent, enhanced with [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports) for automatic import organization and [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for optimal class sorting.

* 🧭 **Absolute Imports (`@/…`)**<br>
  Skip long relative paths—import modules from `@/` for cleaner code.
* 🏎️ **Blazing-Fast Dev Server**<br>
  Built with [Turbopack](https://turbo.build/pack) under the hood for minimal startup and rebuild times.


### SEO & Performance
* 🌐 **Global Metadata Config**<br>
  Centralized `metadata` and JSON-LD settings in one file.
* 🤖 **Metadata Helpers**<br>
  Tiny, simple helpers for static and dynamic routes.
* 📊 **Type-Safe JSON-LD**<br>
  Leverage [`schema-dts`](https://github.com/google/schema-dts) for fully typed structured data.
* 🎨 **Dynamic OG Images**<br>
  On-the-fly Open Graph image generation via [`@vercel/og`](https://vercel.com/docs/functions/edge-functions/og-image-generation) for perfect social previews.
* 🗺️ **Sitemap & robots.txt**<br>
  Auto-generated `sitemap.xml` and `robots.txt` to guide search engines.
* 📰 **RSS Feed**<br>
  Built-in RSS support for all blog posts—syndication made simple.
* 📈 **Google Analytics**<br>
  One-line integration with GA4 for traffic insights and event tracking.
* ⚡ **Lighthouse-Optimized**<br>
  Pre-tuned for top scores in Performance, Accessibility, Best Practices, and SEO.
* 🔤 **Font Optimization**<br>
  Built-in Next.js Google Fonts integration for automatic font subsetting, preloading, and performance-optimized delivery.
* 🔗 **Image Optimization**<br>
  Next `<Image>` component for responsive, lazy-loaded images with automatic format selection.


### UI, Theming & Accessibility
* ✨ **Framer Motion**<br>
  Out-of-the-box support for smooth, declarative animations with [`framer-motion`](https://www.framer.com/motion/).
* 📚 **MDX Content with Fumadocs**<br>
  Generalized MDX viewer for Blog and Product pages using [`fumadocs`](https://fumadocs.vercel.app/).
* 🌗 **Radix Colors**<br>
Automatic Light/Dark mode Theme with [`radix-colors`](https://www.radix-ui.com/colors).
* 🎨 **Designrift Design Tokens**<br>
  Semantic CSS variables for consistent theming and easy overrides with [Designrift](https://designrift.vercel.app/) .
* 🔄 **Reusable CVA & Radix Primitives**<br>
  Pre-built, composable components with [`class-variance-authority`](https://cva.style/) and [Radix UI](https://www.radix-ui.com/).
* ♿ **Accessibility-First**<br>
  WCAG-compliant ARIA attributes, keyboard support, and 100% Lighthouse accessibility scores.
* 📱 **Fully Responsive**<br>
  Mobile-first layouts that adapt seamlessly to tablet and desktop breakpoints.


### Deployment
Click the button below to deploy this example project with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsilverthreadlabs%2Fbloggen-seo-starter)

Below are the steps to completing deployment:

1. Create a Git Repository for your project.
2. Provide the required environment variables.

## Contributing Guidelines
We welcome contributions to Bloggen SEO Starter! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact/Support

For support or inquiries, please reach out to:

- Email: silverthreadlabs@gmail.com
- Visit our website: [SilverThread Labs](https://www.silverthreadlabs.com/)
- Explore Bloggen: [Bloggen](https://www.bloggen.dev/)

Thank you for using Bloggen SEO Starter! We hope it helps you enhance your blogging experience and improve your site's SEO performance.
