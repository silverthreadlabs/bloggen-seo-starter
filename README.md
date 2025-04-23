# BlogGen SEO Starter

BlogGen SEO Starter is an AI-powered template designed to help you quickly set up a fully optimized blog or website. Created by SilverThread Labs, this template comes pre-configured with essential SEO features, allowing you to focus on generating high-quality content using BlogGen. With built-in MDX blogs, JSON-LD structured data, and dynamic Open Graph images, BlogGen SEO Starter is your go-to solution for a seamless blogging experience.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-yellowgreen)

## Features

- **AI Content Generation**: Use BlogGen to create high-ranking content effortlessly.
- **Pre-configured MDX Blogs**: Start blogging immediately with ready-to-use MDX blog templates.
- **SEO Optimization**: All pages come with pre-set metadata and JSON-LD structured data for better search engine visibility.
- **Dynamic Open Graph Images**: Automatically generated OG images for enhanced social sharing.
- **User-Friendly Setup**: Get your website up and running with minimal configuration.

## Installation Instructions

To get started with BlogGen SEO Starter, follow these steps:

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

This is an example of a blog post created using BlogGen SEO Starter. 

## SEO Tips
- Use relevant keywords.
- Optimize images with alt text.
```

## Configuration Options

BlogGen SEO Starter allows for various configuration options. You can customize settings in the `config.js` file:

```javascript
module.exports = {
  siteTitle: "Your Blog Title",
  siteDescription: "A brief description of your blog.",
  author: "Your Name",
  // Add more configuration options as needed
};
```

## Dependencies

The following dependencies are included in this project:

| Dependency                   | Version         |
|------------------------------|------------------|
| @tailwindcss/postcss         | 4.0.0-alpha.13   |
| @types/node                  | 20.11.17         |
| @types/react                 | 19.0.8           |
| @types/react-dom             | 19.0.3           |
| @vercel/analytics            | ^1.1.3           |
| @vercel/og                   | ^0.6.8           |
| @vercel/speed-insights       | ^1.0.9           |
| framer-motion                | ^12.3.1          |
| geist                        | 1.3.1            |
| lucide-react                 | ^0.474.0         |
| next                         | 15.3.0           |
| next-mdx-remote             | 5.0.0            |
| postcss                      | ^8.4.35          |
| react                        | 19.0.0           |
| react-dom                    | 19.0.0           |
| schema-dts                   | ^1.1.2           |
| sugar-high                   | 0.9.2            |
| tailwindcss                  | 4.0.0-alpha.13   |
| three                        | ^0.173.0         |
| typescript                   | 5.3.3            |

## Contributing Guidelines

We welcome contributions to BlogGen SEO Starter! To contribute:

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
- Explore BlogGen: [BlogGen](https://www.bloggen.dev/)

Thank you for using BlogGen SEO Starter! We hope it helps you enhance your blogging experience and improve your site's SEO performance.