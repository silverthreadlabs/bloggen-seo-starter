
import Banner from '@/components/layout/banner/banner';
import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';

import { RootProvider } from 'fumadocs-ui/provider';


export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
                <Banner />
                <Header />
                <RootProvider>{children}</RootProvider>
                <Footer />
        </>
    );
}
