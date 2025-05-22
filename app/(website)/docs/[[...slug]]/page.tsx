import React from 'react';
import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
      <DocsPage
        tableOfContent={{ enabled: true }}
        tableOfContentPopover={{ enabled: true }}
        toc={page.data.toc} full={page.data.full}
      >
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  
  // Get the current directory path from the file structure
  // This dynamically determines we're in the docs section
  const currentPath = __filename.split(/[\\/]/).slice(-3)[0];
  
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      title: page.data.title,
      description: page.data.description,
      url: `${params.slug ? `/${currentPath}/${params.slug.join('/')}` : `/${currentPath}`}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
    }
  };
}
