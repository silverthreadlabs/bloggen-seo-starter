// import fs from 'fs'
// import path from 'path'
// import { BlogMetadata, ProductMetadata } from '@/lib/types/PostMetadata';

// // type Metadata = {
// //   title: string
// //   publishedAt: string
// //   summary: string
// //   image?: string
// // }

// // function parseFrontmatter(fileContent: string) {
// //   let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
// //   let match = frontmatterRegex.exec(fileContent)
// //   let frontMatterBlock = match![1]
// //   let content = fileContent.replace(frontmatterRegex, '').trim()
// //   let frontMatterLines = frontMatterBlock.trim().split('\n')
// //   let metadata: Partial<Metadata> = {}

// //   frontMatterLines.forEach((line) => {
// //     let [key, ...valueArr] = line.split(': ')
// //     let value = valueArr.join(': ').trim()
// //     value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
// //     metadata[key.trim() as keyof Metadata] = value
// //   })

// //   return { metadata: metadata as Metadata, content }
// // }


// /**
//  * Parse frontmatter from MDX content
//  */
// export function parseFrontmatter<T extends Record<string, any>>(fileContent: string) {
//   const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
//   const match = frontmatterRegex.exec(fileContent);
  
//   if (!match) {
//     throw new Error('No frontmatter found in content');
//   }
  
//   const frontMatterBlock = match[1];
//   const content = fileContent.replace(frontmatterRegex, '').trim();
//   const frontMatterLines = frontMatterBlock.trim().split('\n');
//   const metadata: Record<string, string> = {};

//   frontMatterLines.forEach((line) => {
//     const [key, ...valueArr] = line.split(': ');
//     const value = valueArr.join(': ').trim();
//     metadata[key.trim()] = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
//   });

//   return { metadata: metadata as unknown as T, content };
// }


// /**
//  * Get all MDX files from a directory
//  */
// function getMDXFiles(dir) {
//   return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
// }

// /**
//  * Read and parse an MDX file
//  */
// function readMDXFile(filePath) {
//   let rawContent = fs.readFileSync(filePath, 'utf-8')
//   return parseFrontmatter(rawContent)
// }

// /**
//  * Get all MDX data from a directory
//  */
// function getMDXData(dir) {
//   let mdxFiles = getMDXFiles(dir)
//   return mdxFiles.map((file) => {
//     let { metadata, content } = readMDXFile(path.join(dir, file))
//     let slug = path.basename(file, path.extname(file))

//     return {
//       metadata,
//       slug,
//       content,
//     }
//   })
// }

// // export function getBlogPosts() {
// //   return getMDXData(path.join(process.cwd(), 'app', 'blog', 'content'))
// // }

// export function formatDate(date: string, includeRelative = false) {
//   let currentDate = new Date()
//   if (!date.includes('T')) {
//     date = `${date}T00:00:00`
//   }
//   let targetDate = new Date(date)

//   let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
//   let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
//   let daysAgo = currentDate.getDate() - targetDate.getDate()

//   let formattedDate = ''

//   if (yearsAgo > 0) {
//     formattedDate = `${yearsAgo}y ago`
//   } else if (monthsAgo > 0) {
//     formattedDate = `${monthsAgo}mo ago`
//   } else if (daysAgo > 0) {
//     formattedDate = `${daysAgo}d ago`
//   } else {
//     formattedDate = 'Today'
//   }

//   let fullDate = targetDate.toLocaleString('en-us', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   })

//   if (!includeRelative) {
//     return fullDate
//   }

//   return `${fullDate} (${formattedDate})`
// }



import fs from 'fs';
import path from 'path';
// import { BlogMetadata, ProductMetadata } from './types/PostMetadata';

/**
 * Parse frontmatter from MDX content
 */
export function parseFrontmatter<T extends Record<string, any>>(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) {
    throw new Error('No frontmatter found in content');
  }
  
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Record<string, string> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    const value = valueArr.join(': ').trim();
    metadata[key.trim()] = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
  });

  return { metadata: metadata as unknown as T, content };
}

/**
 * Get all MDX files from a directory
 */
export function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/**
 * Read and parse an MDX file
 */
export function readMDXFile<T extends Record<string, any>>(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter<T>(rawContent);
}

/**
 * Get all MDX data from a directory
 */
export function getMDXData<T extends Record<string, any>>(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile<T>(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

/**
 * Format a date string with optional relative time
 */
export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}