import { siteConfig } from '@/lib/config/site';

import type { WebPage, WithContext } from 'schema-dts';

interface AuthSchemaProps {
    view: 'signup' | 'login';
}

const AuthSchema: React.FC<AuthSchemaProps> = ({ view }) => {
    const baseURL = siteConfig.baseUrl;
    const url = `${baseURL}/auth/${view}`;
    let name = '';
    let description = '';

    if (view === 'signup') {
        name = 'Sign Up – GlanceAI';
        description = 'Create your GlanceAI account to start exploring our platform.';
    } else if (view === 'login') {
        name = 'Login – GlanceAI';
        description = 'Access your GlanceAI account and continue where you left off.';
    }

    const schema: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url,
        publisher: {
            '@type': 'Organization',
            name: 'Silverthread Labs',
            url: baseURL,
            logo: {
                '@type': 'ImageObject',
                url: `${baseURL}/favicon/favicon.ico`
            }
        },
        image: {
            '@type': 'ImageObject',
            url: `${baseURL}/assets/images/open-graph.png`,
            width: '1200',
            height: '630',
            description: `${name} Open Graph Image`
        },
        sameAs: ['https://www.silverthreadlabs.com/']
    };

    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default AuthSchema;
